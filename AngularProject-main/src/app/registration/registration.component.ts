import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { IUser } from '../IUser';
import { CustomerService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  angForm!: FormGroup;
  constructor(private fb: FormBuilder,private customerService: CustomerService) {
    this.createForm();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      radio: [''],
      check: [''],
      select: ['']
    });
  }
 customer: IUser = {
  id:0,
  name:'',
  address:'',
  gender:'',
  addcourses:''
 };
 submitted = false;
 saveCustomer():void{
  const data = {
    name:this.customer.name,
    address:this.customer.address,
    gender:this.customer.gender,
    addcourses:this.customer.addcourses
  };
 this.customerService.create(data).subscribe({
  next:(res)=>{
    console.log(res);
    this.submitted = true;
  },
  error:(e)=> console.error(e)
 });
 }
 newCustomer():void{
  this.submitted = false;
  this.customer = {
    id:0,
    name:'',
    address:'',
    gender:'',
    addcourses:''
  }
 }
}
