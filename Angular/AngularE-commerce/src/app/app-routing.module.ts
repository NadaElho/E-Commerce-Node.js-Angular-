import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/adminNav/admin.component';
import { AllProductsComponent } from './admin/all-products/all-products.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AllCategoriesComponent } from './admin/all-categories/all-categories.component';
import { AllOrdersComponent } from './admin/all-orders/all-orders.component';
import { AddComponent } from './admin/addProduct/add.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './user/userNav/user.component';
import { HomeComponent } from './user/userHome/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { OrdersComponent } from './user/userAllOrders/orders.component';
import { ProductComponent } from './user/productDetails/product.component';
// import { SearchComponent } from './user/search/search.component';
import { UserOrderComponent } from './user/user-order/user-order.component';
import { CartComponent } from './user/cart/cart.component';
import { ProductCardComponent } from './user/product-card/product-card.component';
import { ProductPageComponent } from './user/product-page/product-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: '', component: HomeComponent },
      // { path: ':name', component: HomeComponent },
      { path: 'allOrder', component: OrdersComponent },
      { path: 'search/:name', component: ProductPageComponent },
      { path: 'allOrder', component: OrdersComponent },
      { path: 'order/:orderId', component: UserOrderComponent },
      { path: 'product/:productId', component: ProductComponent },
      { path: 'products', component: ProductPageComponent },
      { path: 'cart', component: CartComponent },
      // { path: 'search', component: HomeComponent }
     
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'products', component: AllProductsComponent },
      { path: 'categories', component: AllCategoriesComponent },
      { path: 'orders', component: AllOrdersComponent },
      { path: 'addProduct', component: AddComponent },
      { path: 'users', component: AllUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }