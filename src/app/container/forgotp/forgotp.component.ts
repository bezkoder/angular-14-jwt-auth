import {Component} from '@angular/core';
import { MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: 'app-forgotp',
  templateUrl: './forgotp.component.html',
  styleUrls: ['./forgotp.component.css']
})
export class ForgotpComponent {
  private loading = false;

  constructor(public dialogRef: MatDialogRef<ForgotpComponent>,
              private authService: AuthService,
              private toastr: ToastrService,

  ) {
  }

  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('')
    });
  }

  onSubmit() {
    const email = this.myForm.get('email')?.value;
    this.loading = true;
    this.authService.forgetP(email).subscribe({
      next: (response: any) => {
        this.toastr.success(
          `Kontrollo email-in per te ndryshuar fjalekalimin`,
          'Sukses!'
        );
        this.loading = false;
        this.dialogRef.close(response);
      },
      error: error => {
        error.errorMessage
           this.toastr.error('Perdoruesi nuk ekziston!')
      },
    });

  }
}
