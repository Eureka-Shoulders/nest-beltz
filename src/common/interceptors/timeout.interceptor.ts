import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {

  time: number;

  constructor(time: number) {
    this.time = time;
  }

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(timeout(this.time));
  }
}
