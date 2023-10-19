import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { FormService } from './services/form.service';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [AppComponent, FormComponent, IndexComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
