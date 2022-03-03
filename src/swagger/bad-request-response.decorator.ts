import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';

const IS_BAD_REQUEST_RESPONSE = 'badRequestResponse';

const BAD_REQUEST_MESSAGE =
  'Response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error';

/**
 * The HyperText Transfer Protocol (HTTP) `400 Bad Request` response status code indicates that the server cannot or will not process the
 * request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or
 * deceptive request routing).
 *
 * @see [400 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400)
 * @param options - These are the same types as `ApiResponse`
 */
export function BadRequestResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_BAD_REQUEST_RESPONSE, options),
    ApiBadRequestResponse({
      ...options,
      description: options?.description ?? BAD_REQUEST_MESSAGE,
    }),
    ApiOperation({ summary: options?.description })
  );
}
