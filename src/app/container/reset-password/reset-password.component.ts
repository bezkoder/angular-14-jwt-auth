import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ForgotpComponent} from "../forgotp/forgotp.component";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading= false;
  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {

        this.router.navigateByUrl('/employee');
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.toastr.success(
          `Sapo u loguat me sukses!`,
          'Sukses!'
        );
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage?.getUser().roles;

      },
      error => {
        this.errorMessage = error.error.message;
        this.toastr.error(`${error.error.message}`, 'Error');
        this.isLoginFailed = true;
        if(error.status == '401'){
          this.router.navigateByUrl('/login');
        }
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }



}
