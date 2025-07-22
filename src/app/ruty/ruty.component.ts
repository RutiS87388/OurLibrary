import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';




@Component({
  selector: 'app-ruty',
  imports: [MatTabsModule, CommonModule, RouterModule],
  templateUrl: './ruty.component.html',
  styleUrl: './ruty.component.scss',

})
export class RutyComponent {
  ps = '';
  imgPath = 'img/f.jpg'
  router = inject(Router)
  openNavCustomer: boolean = false;
  openNavNewCustomer: boolean = false;
  openNav: boolean = false;
  active: string = '';
  change(path: string) {
    this.router.navigate([path]);
    this.active = path;
  }
  readonly dialog = inject(MatDialog);
  // openDialog(): void {
  //   this.active = "login";
  
  //   this.openNavCustomer = true;
  //   const dialogRef = this.dialog.open(LoginComponent);
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result == true) {
  //       this.openNavCustomer = true;
  //     } else {
  //       this.openNav = true;
  //     }

  //   });
  // }
  parentVariable: string = 'Initial Value';

  receiveOutput(output: any) {
    console.log(output);
  }


}

