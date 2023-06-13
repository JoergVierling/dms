import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';

import { HttpClientModule } from '@angular/common/http';
import { DiscoveryComponent } from './discovery/discovery.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';



@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    DiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
