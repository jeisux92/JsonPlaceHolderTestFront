import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { AppComponent } from './app.component';
import { RouterModuleApp } from './app.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModuleApp
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
