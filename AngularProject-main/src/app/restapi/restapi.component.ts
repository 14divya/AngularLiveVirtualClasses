import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit{
  // protected users$: Observable<IUser[]>;
customers$!: IUser[];
constructor(public customerservice: CustomerService) {}

ngOnInit() {
  this.customerservice.getAll().subscribe(res => {
    this.customers$ = res;
  });
}

}
