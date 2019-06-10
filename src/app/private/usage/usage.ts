import { Employee } from '../employee/employee';

export interface Usage {
    date: Date;
    employee: Employee;
    usages: UsageTmp[]; 
    bleachSum: number;
    dyeSum: number;
    waterSum: number;
    olaplexSum: number;
}
export interface UsageTmp {
    bleach: number;
    dye: number;
    water: number;
    olaplex: number;
}