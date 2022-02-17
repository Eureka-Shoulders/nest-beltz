import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponseOptions,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

const IS_UNAUTHORIZED_RESPONSE = 'unauthorizedResponse';

const UNAUTHORIZED_MESSAGE =
  'Client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource';

/**
 * The HTTP `401 Unauthorized` client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.

 * This status is sent with a [WWW-Authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) header that contains information on how to authorize correctly.
 *
 * This status is similar to [403](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403), but in this case, authentication is possible.
 *
 * @see [401 Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401)
 * @param options - These are the same types as ApiResponse
 */
export function UnauthorizedResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_UNAUTHORIZED_RESPONSE, options),
    ApiUnauthorizedResponse({
      ...options,
      description: options?.description ?? UNAUTHORIZED_MESSAGE,
    }),
    ApiOperation({ summary: options?.description }),
  );
}
