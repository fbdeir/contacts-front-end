import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactListResolverService } from './product-list/contact-list-resolver.service';
import { ContactResolverService } from './contact/contact/contact-resolver.service';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {NewContactComponent} from './new-contact/new-contact.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent,
          resolve: {
            contactList: ContactListResolverService
          }
       },
      { path: 'newContactComponent', component: NewContactComponent},
      { path: ':id', component: ContactComponent,
      resolve: {
        contact: ContactResolverService
      }
    }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    NewContactComponent,
    ContactComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
