import { strongPassword } from '@euk-labs/beltz';
import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

export function IsStrongPassword(
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return ValidateBy(
    {
      name: 'isStrongPassword',
      validator: {
        validate: (pass): boolean => strongPassword(pass) === null,
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix + `${'$property must be a strong password'}`,
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
