import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";
const USER_KEY = 'auth-user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username!:string | null | any;

  constructor(private tokenStorageService: TokenStorageService, private router: Router
  ) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser().username;

  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
