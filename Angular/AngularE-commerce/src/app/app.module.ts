import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { AdminComponent } from './admin/adminNav/admin.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AllProductsComponent } from './admin/all-products/all-products.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AllCategoriesComponent } from './admin/all-categories/all-categories.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { AddComponent } from './admin/addProduct/add.component';
import { UserComponent } from './user/userNav/user.component';
// import { UserProductsComponent } from './user-products/user-products.component';
import { HomeComponent } from './user/userHome/home.component';
import { RegisterComponent } from './user/register/register.component';
import { OrdersComponent } from './user/userAllOrders/orders.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { ProductComponent } from './user/productDetails/product.component';
import { CommonModule } from '@angular/common';
// import { SearchComponent } from './user/search/search.component';
// import { SearchComponent } from './user/search/search.component';
import { CartComponent } from './user/cart/cart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductPageComponent } from './user/product-page/product-page.component';
import { ProductCardComponent } from './user/product-card/product-card.component';
import { NgToastModule } from 'ng-angular-popup';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, "../assets/i18n/", '.json')
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AllProductsComponent,
    AllUsersComponent,
    AllCategoriesComponent,
    AllOrdersComponent,
    AddComponent,
    // ProductComponent,
    UserComponent,
    HomeComponent,
    RegisterComponent,
    OrdersComponent,
    UserOrderComponent,
    CartComponent,
    // ProductPageComponent,
    // ProductCardComponent,
    ProductPageComponent,
    ProductCardComponent,
    CartComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatSliderModule,
    MatTabsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgToastModule,
    BrowserModule,
    MatTabsModule,
    MatSliderModule,
    MatTabsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    NgToastModule,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
