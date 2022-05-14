import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-face-details',
  templateUrl: './face-details.component.html',
  styleUrls: ['./face-details.component.scss']
})
export class FaceDetailsComponent implements OnInit {
  face_id:any;
  faceProductDetails:any = [];
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
      this.face_id = param.get('id');
    });
    this.faceDetails();
  }

  faceDetails(){
    this.http.get('../../assets/json/face.json').subscribe((data)=>{
      this.faceProductDetails = data;
      for(let x=0;x<this.faceProductDetails.length;x++){
        if(this.faceProductDetails[x].id ==this.face_id ){
          // this.faceProductDetails = data ;
          console.log(this.faceProductDetails[x].id);
          this.prodName = this.faceProductDetails[x].name ;
          this.prodImg = this.faceProductDetails[x].img ;
          this.productDetails = this.faceProductDetails[x].productDetails ;

          this.productContent1 = this.faceProductDetails[x].productContent1 ;
          this.productContent2 = this.faceProductDetails[x].productContent2 ;
          this.productContent3 = this.faceProductDetails[x].productContent3 ;
          this.productContent4 = this.faceProductDetails[x].productContent4 ;
          this.productContent5 = this.faceProductDetails[x].productContent5 ;
          this.productContent6 = this.faceProductDetails[x].productContent6 ;
          this.productContent7 = this.faceProductDetails[x].productContent7 ;
          this.productContent8 = this.faceProductDetails[x].productContent8 ;
          this.use = this.faceProductDetails[x].use ;

          this.size = this.faceProductDetails[x].size ;
          this.price = this.faceProductDetails[x].price
        }
      }
    });


  }


}
