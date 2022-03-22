import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { SensitiveDataInterceptor } from '../interceptors/sensitive-data.interceptor';

export function SensitiveData(...sensitiveData: string[]) {
  return applyDecorators(
    UseInterceptors(new SensitiveDataInterceptor(...sensitiveData)),
  );
}
