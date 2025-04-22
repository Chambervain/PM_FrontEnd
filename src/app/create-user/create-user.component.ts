import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{

  user: User = new User();

  constructor(private service: ProductService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  saveUser(){
    this.service.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.goToUserList();
      },
      error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
