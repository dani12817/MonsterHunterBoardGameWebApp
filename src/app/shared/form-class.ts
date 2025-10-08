import { FormGroup } from "@angular/forms";

export class FormClass {
  formGroup: FormGroup;
  validationMessages: any = {
    required: "El campo es obligatorio",
    invalidAutocompleteValue : "No se ha seleccionado un valor correcto"
  };

  constructor(formGroup: any, validationMessages?: any) {
    if (validationMessages) {
      this.validationMessages = validationMessages;
    }
    this.formGroup = formGroup;
  }

  /**
   * Comprueba si el campo del formulario pasado como parámetro tiene algún error según sus Validators.
   * @param {string} field Campo del formulario a comprobar.
   * @return {string} String con el error que tiene el campo pasado como parámetro.
   */
  hasError(field: string): string | boolean {
    let fieldControl = this.formGroup.get(field);

    if (fieldControl != null && fieldControl.errors !== undefined && fieldControl.errors !== null) {
      const errors = Object.keys(fieldControl.errors);
      if (errors.length > 0) {
        //return this.validationMessages[field][errors[0]];
        return this.validationMessages[errors[0]];
      }
    }

    return '';
  }

  /**
   * Comprueba si los valores del formulario 'formGroup' son correctos según sus Validators.
   * @return {boolean} Boolean con el resultado.
   */
  formIsInvalid(): boolean {
    if (this.formGroup.status === "VALID") {
      return false;
    }
    return true;
  }

  /**
   * Devuelve el 'value' del FormGroup.
   */
  getValue() {
    return this.formGroup.value;
  }
  
  getValueNotNull() {
    let formValue: any = {};
    let fieldControl;
    for (const field of Object.keys(this.formGroup.value)) {
      fieldControl = this.get(field);

      if (fieldControl && fieldControl.value != null && fieldControl.value.length) {
        formValue[field] = fieldControl.value;
      }
    }
    return formValue;
  }

  /**
   * Devuelve el campo del FromGroup pasado como parámetro.
   * @param {string} field Campo a buscar.
   * @return {AbstractControl} Objeto correspondiente al campo del FromGroup.
   */
  get(field: string) {
    return this.formGroup.get(field);
  }

  
  fieldIsInvalid(field: string): boolean {
    let fieldControl = this.get(field);
    if (fieldControl) {
      return fieldControl.invalid;
    }
    return true;
  }

  reset(): void {
    this.formGroup.reset();
  }

  patchValue(value: any, emitEvent?: boolean) {
    this.formGroup.patchValue(value, {emitEvent: emitEvent});
  }

  updateValueAndValidity(opts?: {onlySelf?: boolean, emitEvent?: boolean}) {
    this.formGroup.updateValueAndValidity(opts);
  }
}
