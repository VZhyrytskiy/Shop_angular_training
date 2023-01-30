import { AfterContentChecked, ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements AfterContentChecked {

  products: Product[]
  totalCost: number = 0;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {
    // обычно эта операция выполняется в ngOnInit()
    this.products = cartService.getProducts();
  }

  ngAfterContentChecked(): void {
    this.totalCost = this.cartService.totalCost();
    this.totalQuantity = this.cartService.totalQuantity();
  }

  trackByItems(index: number, item: Product) : number
  {
    return Number(item.price);
  }

  deleteFromCart(product: Product)
  {
    this.cartService.deleteFromCart(product);
  }
}
