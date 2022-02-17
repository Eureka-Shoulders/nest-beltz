import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { OkResponse } from './ok-response.decorator';

export const PaginatedOkResponse = <TModel extends Type<any>>(
  model: TModel,
  options?: ApiResponseOptions,
) => {
  return applyDecorators(
    ApiExtraModels(model),
    OkResponse({
      content: {
        'application-json': {
          schema: {
            properties: {
              items: {
                type: 'array',
                items: {
                  $ref: getSchemaPath(model),
                },
              },
              meta: {
                type: 'object',
                properties: {
                  totalItems: {
                    type: 'number',
                    nullable: true,
                  },
                  itemCount: {
                    type: 'number',
                    nullable: true,
                  },
                  itemsPerPage: {
                    type: 'number',
                    nullable: true,
                  },
                  totalPages: {
                    type: 'number',
                    nullable: true,
                  },
                  currentPage: {
                    type: 'number',
                    nullable: true,
                  },
                },
              },
            },
          },
        },
      },
      ...options,
    }),
  );
};
