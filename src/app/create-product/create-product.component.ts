import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductCreation } from '../product-creation';

@Component({
  selector: 'app-create-product',
  standalone: false,
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit{

  product: ProductCreation = new ProductCreation();

  constructor(private productService: ProductService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  saveProduct(){
    this.productService.createProduct(this.product).subscribe(
      data => {
        console.log(data);
        this.goToPoductList();
      },
      error => console.log(error));
  }

  goToPoductList(){
    this.router.navigate(['/products']);
  }

  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }

}
