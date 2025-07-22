import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-book',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent implements OnInit {

  imgPath = '../../img/h.jpg';
  mouseoverLogin: boolean = false;

  formGroup: FormGroup = {} as FormGroup;

  constructor(
    private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log("Login Form Submitted!");
  }
addBook(){
  
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

    const obj = this.formGroup.value;




  }
  router = inject(Router)
  changeNavigate(path: string) {
    this.router.navigate([path]);
  }

}
