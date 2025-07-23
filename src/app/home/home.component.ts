import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { ModelComponent } from '../model/model.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router'; 
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-home',
  imports: [ MatTabsModule, CommonModule, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  backgroundImage:string = 'img/s.jpg'
  router = inject(Router)
  change(path : string) {
    this.router.navigate([path]);
  }
  changeToLibririan(path : string) {
    this.router.navigate([path]);
  }
 
  imgA = 'img/hf.png'
  imgB = 'img/lk.png'
  imgR = 'img/ruty.png'
  imgT = 'img/t.jpg'
  imgW = 'img/w.jpg'
  imgSS ='img/ss.png'
  imgTa  = 'img/ta.png'
  imgCha  = 'img/cha.png'
  imgF  = 'img/f.png'
  ngOnInit(): void {
    // const childRoutes = ['/ruty'];
  }
  onClick(path: string) {
    this.router.navigate([path]);

  }
  
  
}
