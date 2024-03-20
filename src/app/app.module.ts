import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MyColorDirective } from '../color-directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SelectMultiple } from '../select/select-multi';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    SelectMultiple,
    MatSelectModule,
    CommonModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
