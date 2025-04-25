import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  name!: string;
  userDetail!: UserInfo;
  products!: Product[];

  constructor(private route: ActivatedRoute, private service: ProductService){

  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];

    this.userDetail = new UserInfo();
    this.service.getUserDetail(this.name).subscribe(data => {
      this.userDetail = data;
      this.products = this.userDetail.productList;
      console.log(this.products);
    });
  }

}
