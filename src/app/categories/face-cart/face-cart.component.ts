import { CartService } from '../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-cart',
  templateUrl: './face-cart.component.html',
  styleUrls: ['./face-cart.component.scss']
})
export class FaceCartComponent implements OnInit {

  public faceProducts : any = [];
  public faceTotal = 0 ;
  constructor(private faceCartService:CartService) { }

  ngOnInit(): void {
    this.faceCartService.getFaceProducts().subscribe((res)=>{
      this.faceProducts = res ;
      this.faceTotal = this.faceCartService.getTotalPrice();
    });
  }

  removeFaceItem(item:any){
    this.faceCartService.removeCartItem(item);
    console.log(item);
  }

}
