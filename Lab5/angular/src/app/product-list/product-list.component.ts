import { Component ,Input,Output} from '@angular/core';
import { categories } from '../categories';
import {Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  categories = categories;
  currentCategory : number | undefined ;

  selectCategory(categoryId: number) {
    this.currentCategory = categoryId;
  } 

  handleCategory(category: number): any {
    this.currentCategory = category;
    return this.currentCategory === undefined ? products : products.filter((product: { categoryId: number }) => product.categoryId === category);
  }

  share(sh:string) {
    window.open(`https://t.me/share/url?url=${sh}&text=xssxcfscxscsc`);
  }
  controlLikes(product: Product, likes:number){
    product.like = likes;
  }

  
}

