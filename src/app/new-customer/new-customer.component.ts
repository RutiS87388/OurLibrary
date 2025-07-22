import { CommonModule } from '@angular/common';
import { Component, OnInit , inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-customer',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.scss'
})
export class NewCustomerComponent implements OnInit{
  imgPath = '../../img/h.jpg';
  mouseoverLogin: boolean = false;
 
  formGroup: FormGroup = {}  as FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

    onSubmit() {
      console.log("Login Form Submitted!");
    }


  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      address: this.formBuilder.control('')
    });
  }

  login() {
   
    const obj =  this.formGroup.value;
    const { firstName, lastName,email,phone,address } = this.formGroup.value;

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(phone);
console.log(address);


  }


  router = inject(Router)
  changeNavigate(path: string){
    this.router.navigate([path]);
  }

}
