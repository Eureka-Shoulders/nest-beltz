import { BadRequestResponse, UnauthorizedResponse } from '.';
import { applyDecorators } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { PublicResource } from '../common/decorators/public-resource.decorator';

/**
 * The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default.
 *
 * The common use case for this decorator is to indicate that the login was successful.
 *
 * @see [200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
 */
export function ApiLogin(identifier = 'email', secret = 'password') {
  return applyDecorators(
    PublicResource(),
    UnauthorizedResponse(),
    BadRequestResponse(),
    ApiParam({
      name: identifier,
      description: `The ${identifier} of the user.`,
      required: true,
    }),
    ApiParam({
      name: secret,
      description: `The ${secret} of the user.`,
      required: true,
    }),
  );
}
