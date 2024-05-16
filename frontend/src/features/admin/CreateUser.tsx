import React, {ChangeEvent, useState} from 'react';
import {Right} from "../../models/Rights";

interface CreateUserState {
    registerEmail: string | undefined,
    registerPassword: string | undefined,
    registerPasswordConfirm: string | undefined,
    registerFullName: string | undefined,
    registerIdNumber: string | undefined,
    registerEmailErrors: string[],
    registerPasswordErrors: string[],
    registerFullNameErrors: string[],
    registerIdNumberErrors: string[],
    registerError: string | undefined,
}

const CreateUser: React.FC = () => {
    const [state, setState] = useState<CreateUserState>({
        registerEmail: undefined,
        registerPassword: undefined,
        registerPasswordConfirm: undefined,
        registerFullName: undefined,
        registerIdNumber: undefined,
        registerEmailErrors: [],
        registerPasswordErrors: [],
        registerFullNameErrors: [],
        registerIdNumberErrors: [],
        registerError: undefined,
    });


    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;


        setState(prevState => ({
            ...prevState,
            [event.target.name]: value
        }));
    };

    return (
        <div>
            <h2 className="h2 mb-4">Create user</h2>
            <form className="row">
                <div className="col-md-5 justify-content-center">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                        <input type="email" className="form-control" id="email"
                               name="email"
                               onChange={handleOnChange}
                               placeholder="e.g. mario@example.com"/>
                    </div>
                </div>
                <div className="col-md-5 justify-content-center">
                    <label htmlFor="password" className="form-label">Password: </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                        <input type="password" className="form-control" id="password"
                               name="password"
                               onChange={handleOnChange}
                               placeholder="****"/>
                    </div>
                </div>
                <div className="col-md-5 justify-content-center">
                    <label htmlFor="full-name" className="form-label">Full name: </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input type="text" className="form-control" id="full-name"
                               name="fullName"
                               onChange={handleOnChange}
                               placeholder="e.g. Todor Georgiev"/>
                    </div>
                </div>
                <div className="col-md-5 justify-content-center">
                    <label htmlFor="confirm-password" className="form-label">Confirm password: </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text"><i className="bi bi-lock"></i></span>
                        <input type="password" className="form-control" id="confirm-password"
                               name="confirmPassword"
                               onChange={handleOnChange}
                               placeholder="****"/>
                    </div>
                </div>
                <div className="col-md-5 justify-content-center">
                    <label htmlFor="id-number" className="form-label">Id number: </label>
                    <div className="mb-4 input-group">
                        <span className="input-group-text"><i className="bi bi-person"></i></span>
                        <input type="text" className="form-control" id="id-number"
                               name="idNumber"
                               onChange={handleOnChange}
                               placeholder="e.g. 8211152030"/>
                    </div>
                </div>
                <div className="col-md-5 mb-4 d-flex justify-content-center">
                    {Object.keys(Right).map(right => (
                        <div key={right} className="form-check align-content-center">
                            <input className="form-check-input" type="checkbox" value={right}
                                   id={`checkbox-right-${right}`}
                                   name="right"
                                   onChange={handleOnChange}
                            />
                            <label className="form-check-label me-4" htmlFor={`checkbox-right-${right}`}>
                                {right[0] + right.substring(1).toLowerCase()}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="col-md-10 mb-4 text-end">
                    <button type="submit" className="btn btn-primary">Create user</button>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;