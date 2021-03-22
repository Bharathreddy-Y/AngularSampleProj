import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomformcomponentComponent } from './customformcomponent/customformcomponent.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from "@angular/material/slider"

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    CustomformcomponentComponent,
    CustomdirectiveDirective,
    ListofusersComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
