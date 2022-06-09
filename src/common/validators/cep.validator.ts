import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

export function IsValidCep(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'isValidCep',
      validator: {
        validate: (value): boolean => value.replace(/\D/g, '').length === 8, // TODO: Improve validation
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + '$property must be a valid cep',
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
