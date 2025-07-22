import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-model',
  imports: [CommonModule, MatIconModule,RouterModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})

export class ModelComponent {
  router = inject(Router); 

  goToComponent(path:string) {
    this.router.navigate([path]);
 }
}





