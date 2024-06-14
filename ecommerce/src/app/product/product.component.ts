import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { map } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers:[UsersService]
})
export class ProductComponent implements OnInit {
id:any
product:any
  constructor(private route:ActivatedRoute,private service:UsersService){}

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.id=params['id']
      this.getOneOrodut(this.id)
    })
   
  }


getOneOrodut(id:any){
  this.service.getSpecificProdut(id).pipe(map(res=>
    {console.log(res)
      this.product=res
    }
   

  )).subscribe()

}

}
