import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponseOptions,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

const IS_UNPROCESSABLE_ENTITY_RESPONSE = 'unprocessableEntityResponse';

const UNPROCESSABLE_ENTITY_MESSAGE =
  'The HyperText Transfer Protocol (HTTP) `422 Unprocessable Entity` response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions';

/**
 * The HyperText Transfer Protocol (HTTP) `422 Unprocessable Entity` response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
 *
 * @see [422 Unprocessable Entity](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422)
 * @param options - These are the same types as ApiResponse
 */
export function UnprocessableEntityResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_UNPROCESSABLE_ENTITY_RESPONSE, options),
    ApiUnprocessableEntityResponse({
      ...options,
      description: options?.description ?? UNPROCESSABLE_ENTITY_MESSAGE,
    }),
    ApiOperation({
      summary: options?.description ?? UNPROCESSABLE_ENTITY_MESSAGE,
    }),
  );
}
