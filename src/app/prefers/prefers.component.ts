import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefers',
  imports: [FormsModule, CommonModule],
  templateUrl: './prefers.component.html',
  styleUrl: './prefers.component.scss'
})
export class PrefersComponent {
  backgroundImage:string = 'img/s.jpg'
  imgPath = 'img/s.jpg'
  bookName =''
  love(id:number){
    console.log(this.bookName)
    console.log(id);

    
  }
  router = inject(Router)
  change(path : string) {
    this.router.navigate([path]);
  }

}
