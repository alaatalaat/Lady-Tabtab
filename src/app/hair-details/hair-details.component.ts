import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hair-details',
  templateUrl: './hair-details.component.html',
  styleUrls: ['./hair-details.component.scss']
})
export class HairDetailsComponent implements OnInit {
  hair_id:any;
  hairProductDetails:any = [];
  prodName:string ='';
  prodImg:string ='';
  price:string ='';
  size:string ='';
  productDetails:string ='';
  productContent1:string ='';
  productContent2:string ='';
  productContent3:string ='';
  productContent4:string ='';
  productContent5:string ='';
  productContent6:string ='';
  productContent7:string ='';
  productContent8:string ='';
  use:string ='';
  count:string ='';

  constructor(private activeRoute:ActivatedRoute ,private http:HttpClient) { }



  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(param=>{
      this.hair_id = param.get('id');
    });
    this.hairDetails();
  }

  hairDetails(){
    this.http.get('../../assets/json/hair.json').subscribe((data)=>{
      this.hairProductDetails = data;
      for(let x=0;x<this.hairProductDetails.length;x++){
        if(this.hairProductDetails[x].id ==this.hair_id ){
          // this.hairProductDetails = data ;
          console.log(this.hairProductDetails[x].id);
          this.prodName = this.hairProductDetails[x].name ;
          this.prodImg = this.hairProductDetails[x].img ;
          this.productDetails = this.hairProductDetails[x].productDetails ;

          this.productContent1 = this.hairProductDetails[x].productContent1 ;
          this.productContent2 = this.hairProductDetails[x].productContent2 ;
          this.productContent3 = this.hairProductDetails[x].productContent3 ;
          this.productContent4 = this.hairProductDetails[x].productContent4 ;
          this.productContent5 = this.hairProductDetails[x].productContent5 ;
          this.productContent6 = this.hairProductDetails[x].productContent6 ;
          this.productContent7 = this.hairProductDetails[x].productContent7 ;
          this.productContent8 = this.hairProductDetails[x].productContent8 ;
          this.use = this.hairProductDetails[x].use ;

          this.size = this.hairProductDetails[x].size ;
          this.price = this.hairProductDetails[x].price
        }
      }
    });


  }
}
