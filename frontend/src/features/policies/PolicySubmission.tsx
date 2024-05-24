import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Currency} from "../../models/Currency";
import {PolicyType} from "../../models/PolicyType";
import moment, {unitOfTime} from "moment";

interface PolicySubmissionState {
    policyNumber: string,
    holderId: string,
    type: string,
    packageId: string,
    premium: string,
    premiumCurrency: string,
    beginDate: string,
    endDate: string,
    purchaseDate: string,
}

const PolicySubmission: React.FC = () => {
    const format = "YYYY-MM-DD";

    const [state, setState] = useState<PolicySubmissionState>({
        policyNumber: '',
        holderId: '',
        type: '',
        packageId: '',
        premium: '',
        premiumCurrency: Currency.BGN,
        beginDate: moment().format(format),
        endDate: moment().format(format),
        purchaseDate: moment().format(format),
    })

    const handleSubmit = (event: FormEvent) => {
        // event.preventDefault();
        alert("Submit")
    }

    const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
        // event.preventDefault();
        // event.stopPropagation();
        alert("Click")
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        debugger;
        if (event.target.name === "beginDate") {
            const beginDate = moment(event.target.value);
            const endDate = moment(beginDate).add(1, 'year' );
            setState({
                ...state,
                beginDate: beginDate.format(format),
                endDate: endDate.format(format)
            });
            return;
        }

        setState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        return;
    };

    return (
        <div className="container-md">
            <h2 className="h2 mb-4">Purchase a policy</h2>
            <form>
                <div className="row">
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="policy-type" className="form-label">Policy type: </label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <select id="policy-type" defaultValue={PolicyType.CAR_INSURANCE} className="form-select"
                                    name="type" onChange={handleOnChange}>
                                {Object.values(PolicyType).map((e, i) => (
                                    <option key={e.toString()} value={e.toString()}>{e.toString()}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="package" className="form-label">Package:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <select id="package" className="form-select" name="package" onChange={handleOnChange}>
                                {Object.values(PolicyType).map((e, i) => (
                                    <option key={e.toString()} value={e.toString()}>{e.toString()}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="begin-date" className="form-label">Begin date:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <input type="date" className="form-control" id="begin-date" name="beginDate"
                                   value={state.beginDate}
                                   onChange={handleOnChange}/>
                        </div>
                    </div>
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="end-date" className="form-label">End date:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <input type="date" className="form-control" id="end-date" name="endDate"
                                   value={state.endDate}
                                   disabled/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="base-premium" className="form-label">Base Premium:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <input type="number" className="form-control" id="base-premium" name="basePremium"
                                   disabled/>
                        </div>
                    </div>
                    <div className="col-md-5 justify-content-center">
                        <label htmlFor="premium" className="form-label">Premium:</label>
                        <div className="mb-4 input-group">
                            <span className="input-group-text"><i className="bi bi-braces"></i></span>
                            <input type="number" className="form-control" id="premium" name="premium"
                                   disabled/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 justify-content-center d-flex">
                        <button type="submit" className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PolicySubmission;