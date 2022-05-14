import { CartService } from '../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  public basketItems:number = 0;
  constructor(private faceCartService:CartService) { }

  ngOnInit(): void {
    this.faceCartService.getFaceProducts().subscribe((res)=>{
      this.basketItems = res.length ;
    })
  }

}
