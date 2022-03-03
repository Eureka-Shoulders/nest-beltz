import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * If don't pass `customTagName` this decorators will assumes to use ApiTag will be same `controllerName`

 * @param controllerName - Controller name
 * @param customTagName - ApiTag name (optional)
 */
export function ApiController(
  controllerName: string,
  customTagName?: string,
): ClassDecorator {
  return (target) => {
    Controller(controllerName)(target);
    ApiTags(customTagName ?? controllerName)(target);
  };
}
