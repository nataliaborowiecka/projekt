import { UsageTmp } from './../usage';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Usage } from '../usage';

export class UsageFormBuilder {
  static build(): FormGroup {
    return new FormGroup({
      date: new FormControl(new Date()),
      employee: new FormControl(undefined, Validators.required),
      usages: new FormArray([]),
      bleachSum: new FormControl(0),
      dyeSum: new FormControl(0),
      waterSum: new FormControl(0),
      olaplexSum: new FormControl(0)
    });
  }

  static usageTmpBuild(): FormGroup {
    return new FormGroup({
      bleach: new FormControl(0),
      dye: new FormControl(0),
      water: new FormControl(0),
      olaplex: new FormControl(0),
    });
  }
}
