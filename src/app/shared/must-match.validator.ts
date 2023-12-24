import { FormGroup } from "@angular/forms";

export function MustMatchValidate(field1: string, field2: string) {
    return (formGroup: FormGroup) => {
        const valueFromFeild1 = formGroup.controls[field1];
        const valueFromFeild2 = formGroup.controls[field2];

        // return null if controls haven't initialised yet
        if (!valueFromFeild1 || !valueFromFeild2) {
            return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (valueFromFeild2.errors && !valueFromFeild2.errors['mustMatch']) {
            return null;
        }

        // set error on matchingControl if validation fails
        if (valueFromFeild1.value !== valueFromFeild2.value) {
            valueFromFeild2.setErrors({ mustMatch: true });
        } else {
            valueFromFeild2.setErrors(null);
        }
        return null;
    }
}
