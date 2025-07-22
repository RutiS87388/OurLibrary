import { Component } from '@angular/core';
// import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer-dialog',
  imports: [],
  templateUrl: './add-customer-dialog.component.html',
  styleUrl: './add-customer-dialog.component.scss'
})
export class AddCustomerDialogComponent {
  customerName: string = '';
  customerLastName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  customerAddress: string = '';

  // constructor(public dialogRef: MatDialogRef<AddCustomerDialogComponent>) {}

  onNoClick(): void {
    // this.dialogRef.close();
  }

  addCustomer() {
    const newCustomer = {
      subscriberId: Math.floor(Math.random() * 1000000),
      subscriberName: this.customerName,
      subscriberLastName: this.customerLastName,
      subscriberEmail: this.customerEmail,
      subscriberPhone: this.customerPhone,
      subscriberAddress: this.customerAddress,
    };
    // this.dialogRef.close(newCustomer);
  }
}
