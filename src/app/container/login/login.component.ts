import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {TokenStorageService} from "../../_services/token-storage.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import {ForgotpComponent} from "../forgotp/forgotp.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginPage') loginPage: ElementRef | undefined;

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  loading= false;
  hide = true;

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
          'Success'
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

  openEmailDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';

    const dialogRef = this.dialog.open(ForgotpComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }
}

