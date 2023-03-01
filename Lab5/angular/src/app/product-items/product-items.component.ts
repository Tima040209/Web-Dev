import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
@Input() product: any;
@Output() shareProduct = new EventEmitter();

likeClick:boolean = false;

share(sh: string){
  this.shareProduct.emit(sh);
}
onNotify() {
  window.alert('You will be notified when the product goes on sale');
}
controlLike(): void{
  if(this.likeClick){
    this.product.like--;
    this.likeClick = false;
  }else if(!this.likeClick ){
    this.product.like++;
    this.likeClick = true;
  }

}
}
