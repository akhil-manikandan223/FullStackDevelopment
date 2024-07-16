import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {

  constructor(private commonService: ProductsService) {}

  

  addProductsForm=new FormGroup({
    productName:new FormControl('',[Validators.required]),
    productBrand:new FormControl('',[Validators.required]),
    productType:new FormControl('',[Validators.required]),
    productPrice:new FormControl(0,[Validators.required]),
    productDiscountedPrice:new FormControl(0,[Validators.required]),
  })
  

  postProducts(){
    if(this.addProductsForm.valid){
      this.commonService.addProduct(this.addProductsForm.value).subscribe((data) => {
        alert("Added Successfully")
        console.log(data);
      },(error) => {
        alert("Failed Successfully")
        console.log(error);
      })
    }
    
  }
}
