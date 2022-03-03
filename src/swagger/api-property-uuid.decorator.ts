import { applyDecorators, SetMetadata } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { IsUUID, UUIDVersion, ValidationOptions } from 'class-validator';
import { v4 as uuid } from 'uuid';

const IS_API_PROPERTY_UUID = 'apiPropertyUuid';

/**
 *
 * @param options - These are the same types as `ApiProperty`
 * @param version - These are the same types as `IsUUID`
 * @param validationOptions - These are the same types as `IsUUID`
 *
 * @default
 * options: { type: String, format: 'uuid' }
 * validationOptions.message: 'Formato de GUID inválido.'
 * version: 4
 */
export function ApiPropertyUuid(
  options?: ApiPropertyOptions,
  version?: UUIDVersion,
  validationOptions?: ValidationOptions,
) {
  return applyDecorators(
    SetMetadata(IS_API_PROPERTY_UUID, options),
    ApiProperty({
      ...options,
      type: String,
      format: 'uuid',
      description: 'GUID - Identificador Único Universal',
      example: uuid(),
    }),
    IsUUID(version ?? '4', {
      ...validationOptions,
      message: validationOptions?.message ?? 'Formato de GUID inválido.',
    }),
  );
}
