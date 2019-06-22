import { FormGroup, FormControl } from '@angular/forms';
export class ExpensesFormBuilder {
    static build(): FormGroup {
        return new FormGroup({
            id: new FormControl (''),
            expense: new FormControl (''),
            price: new FormControl (0)
        })
    }
}
export class NotesFormBuilder {
    static build(): FormGroup {
        return new FormGroup ({
            id: new FormControl (''),
            notes: new FormControl (''),
        })
    }
}
export class ServiceFormBuilder {
    static build(): FormGroup {
        return new FormGroup ({
            id: new FormControl (''),
            service: new FormControl (''),
            cost: new FormControl (0),
        })
    }
}