import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myColor: string = 'yellow';
  ctx = { cucolor: this.myColor };
  condition: boolean = true;
  title = 'NO4';

  asyncData!: Promise<string>;
  observableAsync!: Observable<any>;

  constructor() {
    this.asyncData = this.getpromise();
    this.observableAsync = this.getObservable();
  }

  getpromise() {
    return new Promise<string>((resolve, rejects) => {
      setTimeout(() => {
        resolve('Promise Completed');
      }, 3000);
    });
  }
  getObservable() {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
  }
}
