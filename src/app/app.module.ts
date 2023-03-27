import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
  ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}