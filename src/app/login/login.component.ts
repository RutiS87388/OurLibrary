import { CommonModule } from '@angular/common';


import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatDialogRef } from '@angular/material/dialog'
import { CustomersComponent } from '../nav/customers/customers.component';
import { ELEMENT_DATA } from '../nav/customers/customers.component';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
 
  @Input() pass = '';
  router = inject(Router);
  mouseoverLogin: boolean = false;
  message: string = '';
  formGroup: FormGroup = {} as FormGroup;
  // readonly dialogRef = inject(MatDialogRef<LoginComponent>);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({

      password: this.formBuilder.control('')
    });
  }

  login(): void {
    this.message = ''
    const obj = this.formGroup.value;
    const { password } = this.formGroup.value;
    localStorage.setItem('login', JSON.stringify({ password }))

    // if (password.length == 9) {
    //   for (let i = 0; i < ELEMENT_DATA.length; i++) {
    //     if (ELEMENT_DATA[i].subscriberId === password) {
    //       // this.dialogRef.close(true);
    //       this.router.navigate(['nav-customer'])
   
    //     }
    //     else {
    //       this.router.navigate(['nav'])
          // this.message = 'נא לגשת לספרן לרישום'
          // setTimeout(() => {
          //   // this.dialogRef.close(true);
          // }, 4000)
    //     }
    //   }
    // }
    // else
    //   if (password == 1234) {
        // this.dialogRef.close(false);
      //   this.router.navigate(['nav'])

      // }
      // if(password == 12){
      //   this.router.navigate(['nav-customer'])
      // }
      // else {
        // this.dialogRef.close(false);
      //   this.router.navigate(['/home-page'])
      //   this.message = 'אמצעי זיהוי לא תקין נא נסה שוב'
      // }
      if(password ==1){
        this.router.navigate(['nav'])
      }
      else{
        this.router.navigate(['nav-customer'])
      }

  }
  // @Input() parentInput!: string;
  // @Output() childOutput = new EventEmitter<string>();

  // emitOutput() {
  //   this.childOutput.emit('Output from child: ' + this.parentInput);
  // }
 

}
