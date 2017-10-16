import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonapiModule.forRoot({
        url: 'http://jsonapiplayground.reyesoft.com/v2/'
    })
  ],
  providers: [
    AuthorsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
