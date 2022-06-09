import { validateCNPJ, validateCPF } from '@euk-labs/beltz';
import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

export function validateCNPJOrCPF(value: string) {
  if (!value) {
    return true;
  }

  const onlyDigits = value.replace(/\D/g, '');

  if (onlyDigits.length === 11) {
    return validateCPF(onlyDigits);
  }

  if (onlyDigits.length === 14) {
    return validateCNPJ(onlyDigits);
  }

  return false;
}

export function IsValidCNPJOrCPF(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'IsValidCNPJOrCPF',
      validator: {
        validate: (value): boolean => validateCNPJOrCPF(value),
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + '$property must be a valid CNPJ or CPF',
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
