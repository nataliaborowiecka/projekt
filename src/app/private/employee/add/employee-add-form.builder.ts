import { FormGroup, FormControl } from '@angular/forms';
export class EmployeeFormBuilder {
    static build(): FormGroup {
        return new FormGroup({
            name: new FormControl(''),
            surname: new FormControl(''),
            id: new FormControl('')
        });
    }
}