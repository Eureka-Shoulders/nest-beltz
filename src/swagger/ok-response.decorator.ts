import {
  applyDecorators,
  HttpCode,
  HttpStatus,
  SetMetadata,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponseOptions,
} from '@nestjs/swagger';

const IS_OK_RESPONSE = 'okResponse';

const OK_MESSAGE =
  'Success status response code indicates that the request has succeeded';

/**
 * The HTTP `200 OK` success status response code indicates that the request has succeeded. A 200 response is cacheable by default.
 * The meaning of a success depends on the HTTP request method:
 *
 * - [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): The resource has been fetched and is transmitted in the message body.
 * - [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD): The representation headers are included in the response without any message body
 * - [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): The resource describing the result of the action is transmitted in the message body
 * - [TRACE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/TRACE): The message body contains the request message as received by the server.
 *
 * The successful result of a [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT) or a [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE) is often not a 200 OK but a [204](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204) No Content (or a [201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201) Created when the resource is uploaded for the first time).
 *
 * @see [200 Ok](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 * @param options - These are the same types as ApiResponse
 */
export function OkResponse(options?: ApiResponseOptions) {
  return applyDecorators(
    SetMetadata(IS_OK_RESPONSE, options),
    HttpCode(HttpStatus.OK),
    ApiOkResponse({
      ...options,
      description: options?.description ?? OK_MESSAGE,
    }),
    ApiOperation({ summary: options?.description ?? OK_MESSAGE }),
  );
}
