import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{

  users!: User[];

  constructor(private service: ProductService, private router: Router){

  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.service.getUserList().subscribe(data => {
      this.users = data;
    });
  }

}
