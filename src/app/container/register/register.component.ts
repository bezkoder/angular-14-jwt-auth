import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/auth.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  model: any;


  constructor(private authService: AuthService,  private toastr: ToastrService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.authService.register(this.form).subscribe(
        (data: any) => {
        console.log(data);
        this.isSuccessful = true;
          this.router.navigateByUrl('login');
          this.toastr.success('New user added successfully', 'Success')
      },
        (err: { error: { message: string; }; }) => {
        this.toastr.error(err.error.message, 'ERROR')
        this.errorMessage = err.error.message;
      }
    );
  }

  goToSignUp() {
    this.router.navigateByUrl("/login");

  }
}
