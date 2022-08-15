import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      // this.gotoDashboard()
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {

        this.router.navigateByUrl('/employee');
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.toastr.success(
          `You have successfully logged in!`,
          'Success'
        );
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage?.getUser().roles;
        // this.reloadPage();

      },
      err => {
        console.error(err)
        this.errorMessage = err.error.message;
        this.toastr.error(`${err.error.message}`, 'Error');
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
