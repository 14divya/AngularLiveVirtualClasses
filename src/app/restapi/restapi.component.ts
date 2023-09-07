import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restapi',
  templateUrl: './restapi.component.html',
  styleUrls: ['./restapi.component.css']
})
export class RestapiComponent implements OnInit{
  // protected users$: Observable<IUser[]>;
users$!: IUser[];
constructor(public userservice: UserService) {}

ngOnInit() {
  this.userservice.getUsers().subscribe(res => {
    this.users$ = res;
  });
}

}
