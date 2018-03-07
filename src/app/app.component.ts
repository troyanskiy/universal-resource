import {Component} from '@angular/core';
import { TestResource } from '../resource/test.resource';

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  {{data | json}}
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  data: any;

  constructor(private testRes: TestResource) {
    this.init();
  }

  async init() {
    this.data = await this.testRes.test();
  }


}
