import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt'
import generateRandomIdNumber from "../utils/generateRandomIdNumber";
import User from "../types/User";
import Right from "../types/Right";

const userSchema: Schema = new Schema<User>(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Email is invalid"],
      validate: [
        async function () {
          const result = await userModel.countDocuments({ email: this.email });
          return result === 0 ? true : false;
        },
        "Email is already in use",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain one lowercase, one uppercase and one special character",
      ],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    idNumber: {
      type: String,
      required: [true, "IdNumber is required"],
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    rights: {
      required: [true, "Rights are required"],
      type: [
        {
          type: String,
          enum: {
            values: Object.values(Right),
            message: "{VALUE} is not a supported Right",
          },
        },
      ],
      default: [Right.EXPERT]
    },
  },
  { timestamps: true, versionKey: false }
);

userSchema.pre("validate", async function(next) {
  const user = this as unknown as User & Document;

  if (user.isNew || !user.idNumber) {
    let unique = false;
    while (!unique) {
      const newIdNumber = generateRandomIdNumber(10);
      const existingUser = await userModel.findOne({ idNumber: newIdNumber });
      if (!existingUser) {
        user.idNumber = newIdNumber;
        unique = true;
      }
    }
  }

  next();
})

userSchema.pre("save", async function (next) {
  // 'this' refers to the document currently being created and contains the validated values
  const user = this as unknown as User & Document;
  
  if (user.isModified("password") || user.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    } catch (err) {
      return next(err);
    }
  }

  next();
});

const userModel = mongoose.model<User & Document>("users", userSchema);

export default userModel;
