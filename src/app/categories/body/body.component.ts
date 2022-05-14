import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  allData :any = [] ;
  constructor(private api:ApiService ,private bodyCartService:CartService) {
    this.api.faceData().subscribe((res:any)=>{
      this.allData = res ;
    })
   }

  ngOnInit(): void {
    this.api.bodyData().subscribe((res)=>{
      this.allData = res ;
      this.allData.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(res)
    });
  }

  addToCart(prod:any){
    this.bodyCartService.addToCart(prod)
  }

}
