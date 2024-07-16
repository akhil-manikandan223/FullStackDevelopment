import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl

  getProducts(): Observable<any>{
    return this.http.get(this.baseUrl + "getallproducts")
  }

  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + "addproducts", product);
  }

  updateProducts(product: any):Observable<any>{
    return this.http.put<any>(this.baseUrl + "updateproducts/" + product.productId,product)
  }

  getProductsById(id: any){
    return this.http.get<any>(this.baseUrl +"getproductsbyid/"+ id)
  }

  deleteProducts(productId: any):Observable<any>{
    return this.http.delete<any>(this.baseUrl + "deleteproducts/"+ productId)
  }
}
