import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoggedInGuardService implements CanActivate {


    constructor(private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const {data, params} = next;
        console.log(data['message']);
        const {amountOfMoney} = params;
        let username= '';
        let password= '';
        const json = localStorage.getItem ('login');
        if(json){
            const obj  = JSON.parse(json);
            username = obj.username;
            password = obj.password;
        }
        localStorage.setItem (username,amountOfMoney)

        const isLoggedIn = !!username && !!password; 
        if (!isLoggedIn) {
            this.router.navigate(['/login']);
            return false;
        } else {
            console.log(`${username} isLoggedIn`, 'go to store');
         }
        return isLoggedIn;

    }
}

