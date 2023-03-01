import { Component, EventEmitter, Input, Output } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
@Input() product: products | undefined;
@Output() shareProduct = new EventEmitter();

share(sh: string){
  this.shareProduct.emit(sh);
}
}
