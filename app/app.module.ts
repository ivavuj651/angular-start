import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';
import {ProductService } from './products/product.service';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import {WelcomeComponent} from './home/welcome.component';

import {RouterModule, Routes} from '@angular/router';

import {ProductDetailComponent} from './products/product-detail.component';

const routes:Routes=[
  {
     path:'products',
     component: ProductListComponent
  },
  {
        path:'',
        redirectTo:'/products',
        pathMatch:'full'
  },
  {
    path: 'welcome',
    component:  WelcomeComponent
  },
  {
    path:'product/:id',
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [ BrowserModule , FormsModule, HttpModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent,  ProductListComponent, StarComponent,ProductFilterPipe, ProductDetailComponent, WelcomeComponent],
  bootstrap: [ AppComponent ],
  providers:[ ProductService,{provide: APP_BASE_HREF, useValue:''}]
})
export class AppModule { }
