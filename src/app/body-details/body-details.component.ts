import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body-details',
  templateUrl: './body-details.component.html',
  styleUrls: ['./body-details.component.scss']
})
export class BodyDetailsComponent implements OnInit {

  body_id:any;
  bodyProductDetails:any = [];
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
      this.body_id = param.get('id');
    });
    this.bodyDetails();
  }

  bodyDetails(){
    this.http.get('../../assets/json/body.json').subscribe((data)=>{
      this.bodyProductDetails = data;
      for(let x=0;x<this.bodyProductDetails.length;x++){
        if(this.bodyProductDetails[x].id ==this.body_id ){
          // this.bodyProductDetails = data ;
          console.log(this.bodyProductDetails[x].id);
          this.prodName = this.bodyProductDetails[x].name ;
          this.prodImg = this.bodyProductDetails[x].img ;
          this.productDetails = this.bodyProductDetails[x].productDetails ;

          this.productContent1 = this.bodyProductDetails[x].productContent1 ;
          this.productContent2 = this.bodyProductDetails[x].productContent2 ;
          this.productContent3 = this.bodyProductDetails[x].productContent3 ;
          this.productContent4 = this.bodyProductDetails[x].productContent4 ;
          this.productContent5 = this.bodyProductDetails[x].productContent5 ;
          this.productContent6 = this.bodyProductDetails[x].productContent6 ;
          this.productContent7 = this.bodyProductDetails[x].productContent7 ;
          this.productContent8 = this.bodyProductDetails[x].productContent8 ;
          this.use = this.bodyProductDetails[x].use ;

          this.size = this.bodyProductDetails[x].size ;
          this.price = this.bodyProductDetails[x].price
        }
      }
    });


  }

}
