import {Identifiable} from "./Identifiable";
import {PolicyType} from "./PolicyType";
import {CalculationCoefficientValue} from "./CalculationCoefficientValue";

//ToDo maybe use classes for models
export interface CalculationCoefficient extends Identifiable {
    policyType: PolicyType,
    type: string,
    description: string,
    values: CalculationCoefficientValue[]
    isEnabled: boolean
}