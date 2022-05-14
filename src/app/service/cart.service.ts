import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public faceCartItemList : any = [];
  public faceProductList = new BehaviorSubject<any>([]) ;
  constructor() { }

  getFaceProducts(){
    return this.faceProductList.asObservable();
  };


  setProduct(product:any){
    this.faceCartItemList.push(...product);
    this.faceProductList.next(product);
  }

  addToCart(product:any){
    this.faceCartItemList.push(product);
    this.faceProductList.next(this.faceCartItemList);
  }

  removeCartItem(product:any){
    this.faceCartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.faceCartItemList.splice(index,1);
      }
    });
    this.faceProductList.next(this.faceCartItemList)
  }

  getTotalPrice():number{
    let grandTotal = 0 ;
    this.faceCartItemList.map((a:any)=>{
      grandTotal += a.total
    });
    return grandTotal ;
  }



}
