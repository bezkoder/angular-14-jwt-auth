import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {ToastrService} from "ngx-toastr";
import {TokenStorageService} from "../../_services/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],

})
export class ResetPasswordComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading= false;
  email: string | null;
  token: string | null;
  newPassword!: string;
  confirmPassword!: string;
  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              public dialog: MatDialog,
              private route: ActivatedRoute,

  ) {  this.email = this.route.snapshot.queryParamMap.get('email');
    this.token = this.route.snapshot.queryParamMap.get('token');
  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit() {
    const token = this.tokenStorage.getToken(); // get the Bearer token from the TokenStorageService

    // call the resetPassword() method of the PasswordResetService
    console.log(this.email,this.newPassword, this.confirmPassword)
    this.authService.resetPassword(this.email, this.token, this.newPassword, this.confirmPassword, this.route.snapshot).subscribe(response => {
      this.toastr.success(
        `Fjalekalimi u ndryshua me sukses!`,
        'Sukses!'
      );    }, error => {
      this.errorMessage = error.error.message;
    });
  }


  reloadPage(): void {
    window.location.reload();
  }



}
