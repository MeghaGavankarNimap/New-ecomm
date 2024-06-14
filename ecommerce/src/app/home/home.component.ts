import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';

import { Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[UsersService]
})
export class HomeComponent {
   data:any=[]
  constructor(private userservice:UsersService,private router:Router){}

  ngOnInit(){
    
    this.GetProducts()

  }


  GetProducts(){
    
     this.userservice.getAllProducts().subscribe((res)=>{
       console.log(res)
       this.data=res.products;
       

    })

  }



  navToSingleProd(id:any){
    this.router.navigate(['/product',id])
  }

}
