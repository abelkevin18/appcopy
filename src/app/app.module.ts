import { routes } from './app.route';

import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PartialNavbarComponent } from './components/partials/partial-navbar/partial-navbar.component';
import { PartialNavheaderComponent } from './components/partials/partial-navheader/partial-navheader.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    PartialNavbarComponent,
    PartialNavheaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
