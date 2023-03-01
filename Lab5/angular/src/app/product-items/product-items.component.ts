import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
@Input() product: Product | undefined;
@Output() shareProduct = new EventEmitter();

share(sh: string){
  this.shareProduct.emit(sh);
}
onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
}
