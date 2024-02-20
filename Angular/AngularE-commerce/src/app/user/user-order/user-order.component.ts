import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrl: './user-order.component.css'
})
export class UserOrderComponent {
  orderId: string="";
  token = localStorage.getItem('token') || '';
  email = localStorage.getItem('email') || '';
  order:any;

  constructor(private route: ActivatedRoute ,private orderServices: OrdersService,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orderId = params['orderId'];
      
    });
    this.orderServices.getOrderByID(this.token,this.email,this.orderId).subscribe(
      (response: any) => {
        this.order = response.data;
        console.log(this.order)
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    )

  }
}
