import { ApiService } from 'src/app/service/api.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.scss']
})
export class HairComponent implements OnInit {
  allHairData:any = [];
  constructor(private api:ApiService,private faceCartService:CartService) {
    this.api.hairData().subscribe((res)=>{
      this.allHairData = res ;
    })
  }

  ngOnInit(): void {
    this.api.hairData().subscribe((res)=>{
      this.allHairData = res ;
      this.allHairData.forEach((ele:any) => {
        Object.assign(ele,{quantity:1,total:ele.price});
      });
    })
  }

  addToCart(prod:any){
    this.faceCartService.addToCart(prod);
  }

}
