// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Validation } from '../protocols/validation'

export class ValidationSpy implements Validation {
  errorMessage: string;

  validate (fieldName: string, fieldValue: string): string {
    return this.errorMessage
  }
}
