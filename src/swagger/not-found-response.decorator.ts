import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';

const IS_NOT_FOUND_RESPONSE = 'notFoundResponse';

const NOT_FOUND_MESSAGE = `Client error response code indicates that the server can't find the requested resource`;

/**
 * The HTTP `404 Not Found` client error response code indicates that the server can't find the requested resource. Links that lead to a
 * 404 page are often called broken or dead links and can be subject to [link rot](https://en.wikipedia.org/wiki/Link_rot).
 *
 * A 404 status code does not indicate whether the resource is temporarily or permanently missing. But if a resource is permanently
 * removed, a [410](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410) (Gone) should be used instead of a 404 status.
 *
 * @see [404 Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404)
 * @param options These are the same types as ApiResponse
 */
export function NotFoundResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_NOT_FOUND_RESPONSE, options),
    ApiNotFoundResponse({
      ...options,
      description: options?.description ?? NOT_FOUND_MESSAGE,
      type: null,
    }),
    ApiOperation({ summary: options?.description }),
  );
}
