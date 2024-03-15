import { ProductCardComponent } from './user/product-card/product-card.component';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/adminNav/admin.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { AllProductsComponent } from './admin/all-products/all-products.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AllCategoriesComponent } from './admin/all-categories/all-categories.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { AddComponent } from './admin/addProduct/add.component';
import { UserComponent } from './user/userNav/user.component';
// import { UserProductsComponent } from './user-products/user-products.component';
// import { HomeComponent } from './user/userHome/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { OrdersComponent } from './user/userAllOrders/orders.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { ProductComponent } from './user/productDetails/product.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './user/cart/cart.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductPageComponent } from './user/product-page/product-page.component';
import { NgToastModule } from 'ng-angular-popup';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './user/userHome/home.component';
import { CategoriesComponent } from './user/categories/categories.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AllProductsComponent,
    AllUsersComponent,
    AllCategoriesComponent,
    AllOrdersComponent,
    AddComponent,
    ProductComponent,
    UserComponent,
    OrdersComponent,
    UserOrderComponent,
    // CartComponent,
    // ProductPageComponent,
    // ProductCardComponent,
    ProductPageComponent,
    // ProductCardComponent,
    ProductComponent,
    CartComponent,
    NotFoundComponent,
    ProductCardComponent,
HomeComponent,
CategoriesComponent    
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
  MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgToastModule,
    CommonModule,
    MatIconModule,
    NgxSkeletonLoaderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [provideClientHydration(), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
