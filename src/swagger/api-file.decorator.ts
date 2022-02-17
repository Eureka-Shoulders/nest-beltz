import { ApiBody } from '@nestjs/swagger';

export const ApiFile =
  (fileName = 'file', isArray = false): MethodDecorator =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (isArray) {
      ApiBody({
        schema: {
          type: 'object',
          properties: {
            [fileName]: {
              type: 'array',
              items: {
                type: 'string',
                format: 'binary',
              },
            },
          },
        },
      })(target, propertyKey, descriptor);
    } else {
      ApiBody({
        schema: {
          type: 'object',
          properties: {
            [fileName]: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      })(target, propertyKey, descriptor);
    }
  };
