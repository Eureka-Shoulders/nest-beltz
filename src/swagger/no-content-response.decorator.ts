import { applyDecorators, SetMetadata } from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';

const IS_NO_CONTENT_RESPONSE = 'noContentResponse';

const NO_CONTENT_MESSAGE = `Success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page`;

/**
 * The HTTP `204 No Content` success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.
 *
 * This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. In this case a [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) request would be used to save the page, and the 204 No Content response would be sent to indicate that the editor should not be replaced by some other page.
 *
 * A 204 response is cacheable by default (an [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header is included in such a response).
 *
 * @see [204 No Content](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
 * @param options - These are the same types as ApiResponse
 */
export function NoContentResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_NO_CONTENT_RESPONSE, options),
    ApiNoContentResponse({
      ...options,
      description: options?.description ?? NO_CONTENT_MESSAGE,
      type: null,
    }),
    ApiOperation({ summary: options?.description }),
  );
}
