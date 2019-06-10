import { UsageTmp } from './../usage';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Usage } from '../usage';

export class UsageFormBuilder {
    static build(): FormGroup {
        return new FormGroup({
            date: new FormControl(new Date()),
            employee: new FormControl({}),
            usages: new FormArray([]),
            bleachSum: new FormControl(0),
            dyeSum: new FormControl(0),
            waterSum: new FormControl(0),
            olaplexSum: new FormControl(0)
        });
    }
}