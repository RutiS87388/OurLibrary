import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RutyComponent } from './ruty/ruty.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports:[CommonModule, RouterModule], 
})
export class AppComponent {
  title = 'emptyProject';
  router = inject(Router)

  onClick(path: string) {
    this.router.navigate([path]);

  }
}
