import { Injectable } from '@angular/core';

@Injectable()
export class WebServiceConfig {
  readonly PROTOCOL = 'http';
  readonly URL = 'localhost';
  readonly PORT = '7683';
}
