import { CartService } from '../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss']
})
export class FaceComponent implements OnInit {

  allData :any = [] ;
  constructor(private api:ApiService ,private faceCartService:CartService) {
    this.api.faceData().subscribe((res:any)=>{
      this.allData = res ;
    })
   }

  ngOnInit(): void {
    this.api.faceData().subscribe((res)=>{
      this.allData = res ;
      this.allData.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
  }

  addToCart(prod:any){
    this.faceCartService.addToCart(prod)
  }

}
