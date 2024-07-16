import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit{


  constructor(private commonService: ProductsService, private router: Router, private route: ActivatedRoute){}


  productId: any
  editedProduct: any
  currentProduct:any


  updateProductsForm = new FormGroup({
    productId:new FormControl(0,[Validators.required]),
    productName:new FormControl('',[Validators.required]),
    productBrand:new FormControl('',[Validators.required]),
    productType:new FormControl('',[Validators.required]),
    productPrice:new FormControl(0,[Validators.required]),
    productDiscountedPrice:new FormControl(0,[Validators.required]),
  })

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId']
    console.log(this.route.snapshot.params['productId'])
    this.commonService.getProductsById(this.productId).subscribe((data) => {
      this.currentProduct = data
      console.log(this.currentProduct)
      console.log(data)
      this.updateProductsForm = new FormGroup({
    productId:new FormControl(this.currentProduct.productId),
        productName:new FormControl(this.currentProduct.productName),
    productBrand:new FormControl(this.currentProduct.productBrand),
    productType:new FormControl(this.currentProduct.productType),
    productPrice:new FormControl(this.currentProduct.productPrice),
    productDiscountedPrice:new FormControl(this.currentProduct.productDiscountedPrice),
      })
    },(error) => {
      console.log(error)
    })
  }

  updateProducts(){
    if(this.updateProductsForm.valid){
      this.commonService.updateProducts(this.updateProductsForm.value).subscribe((data) => {
        alert('Success')
        this.router.navigate(['/viewproducts'])
      }, (error) => {
        console.log(error)
        console.log(this.productId)
      })
    }
  }
}
