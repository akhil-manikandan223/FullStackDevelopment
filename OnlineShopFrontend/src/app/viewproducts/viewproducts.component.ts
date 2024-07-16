import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit{

  constructor(private commonService: ProductsService, private router:Router){}

  productData:  any

  ngOnInit(): void {
    this.commonService.getProducts().subscribe((data) => {
      this.productData = data;
      console.log(data)
      console.log(this.productData)
    },(error) => {
      console.log(error);
    })
}

editProduct(productId: any):void{
  this.router.navigate(['updateproducts/', productId])
}

removeProduct(productId:any){
  this.commonService.deleteProducts(productId).subscribe((data) => {
    alert('Successfully deleted')
    console.log(data)
    this.ngOnInit();
  }, (error) => {
    alert(error)
    console.log(error)
  })
}
}

