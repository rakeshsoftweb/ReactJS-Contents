import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  FullName(): string {
    return 'Next JS!!';
  }
  Age(): number {
    return 10;
  }
}
