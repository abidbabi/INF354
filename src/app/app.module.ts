import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { READComponent } from './read/read.component';
import { UPDATEComponent } from './update/update.component';
import { DELETEComponent } from './delete/delete.component';
import { CREATEComponent } from './create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    READComponent,
    UPDATEComponent,
    DELETEComponent,
    CREATEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
