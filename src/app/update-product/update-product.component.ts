import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{

  id!: number;
  product: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe(data => {
      this.goToProductList();
    }, error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/products']);
  }

}
