import {
  applyDecorators,
  HttpCode,
  HttpStatus,
  SetMetadata,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';

const IS_CREATED_RESPONSE = 'createdResponse';

const CREATED_MESSAGE =
  'Success status response code indicates that the request has succeeded and has led to the creation of a resource';

/**
 * The HTTP `201 Created` success status response code indicates that the request has succeeded and has led to the creation of a
 * resource. The new resource is effectively created before this response is sent back and the new resource is returned in the body
 * of the message, its [location](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location) being either the URL of the
 * request, or the content of the Location header.
 *
 * The common use case of this status code is as the result of a [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) request.
 *
 * @see [201 Created](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
 * @param options - These are the same types as ApiResponse
 */
export function CreatedResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_CREATED_RESPONSE, options),
    HttpCode(HttpStatus.CREATED),
    ApiCreatedResponse({
      ...options,
      description: options?.description ?? CREATED_MESSAGE,
    }),
    ApiOperation({ summary: options?.description }),
  );
}
