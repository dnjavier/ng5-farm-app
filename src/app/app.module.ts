import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AnimalGuardService } from './farmer/animals/animal-guard.service';
import { FarmerModule } from './farmer/farmer.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FarmerModule,
    AppRoutingModule //this should be the last imported module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
