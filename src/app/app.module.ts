import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHighLightDirective } from './app-high-light.directive';
import { UnlessDirective } from './unless.directive';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [AppComponent, AppHighLightDirective, UnlessDirective, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
