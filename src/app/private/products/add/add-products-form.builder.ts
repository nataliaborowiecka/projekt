import { FormGroup, FormControl } from '@angular/forms';
export class ProductsFormBuilder {
    static build(): FormGroup {
        return new FormGroup ({
            id: new FormControl (''),
            name: new FormControl (''),
            stock: new FormControl (0),
        })
    }
}
