import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';
import { ApiGenericErroDto } from './dtos';

const IS_FORBIDDEN_RESPONSE = 'forbiddenResponse';

const FORBIDDEN_MESSAGE =
  'Client error status response code indicates that the server understood the request but refuses to authorize it';
/**
 * The HTTP `403 Forbidden` client error status response code indicates that the server understood the request but refuses to authorize it.
 *
 * This status is similar to [401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401), but in this case, re-authenticating will make no difference. The access is permanently forbidden and tied to the application logic, such as insufficient rights to a resource.
 *
 * @see [403 Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403)
 * @param options These are the same types as ApiResponse
 */
export function ForbiddenResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_FORBIDDEN_RESPONSE, options),
    ApiForbiddenResponse({
      ...options,
      description: options?.description ?? FORBIDDEN_MESSAGE,
      type: ApiGenericErroDto,
    }),
    ApiOperation({ summary: options?.description }),
  );
}
