import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit{
  dataSource:any[]=[];
  
  displayedColumns: string[] = ['productId','productName', 'productDescription', 'productActualPrice', 'productDiscountedPrice'];

  constructor(private productService:ProductService){
      
  }
  ngOnInit(): void {
     this.getAllProduct();

  }

  public getAllProduct():any{

    this.productService.getAllProduct().subscribe(
      (response:Product[])=>{
        this.dataSource=response;
        console.log(this.dataSource);


      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
