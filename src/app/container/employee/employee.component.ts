import { Component, OnInit } from '@angular/core';
import { Employee } from '../../_model/employee';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {TokenStorageService} from "../../_services/token-storage.service";
import {SubscribeService} from "../../_services/subscribe.service";
import {EmployeeService} from "../../_services/employee.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  loading = false;
  employees: Employee[] = [];
  searchTerm: string = '';
  subscribeEmail: string = '';
  skills: string[] = [];
  username!:string | null | any;

  constructor(
    private toastr: ToastrService,
    private employeeService: EmployeeService,
    private subService: SubscribeService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {
    this.getEmployees();
    this.username = this.tokenStorageService.getUser().username;
console.log(this.username)
  }
  search() {
    console.log(this.searchTerm);
    this.employeeService.getAllSearchEmployees(this.searchTerm).subscribe(
      (data) => {
        this.employees = data.data;
      },
      (error) => {
        console.log(error);
        this.toastr.error(`${error.message}`, 'Error');
      }
    );
  }
  sub() {
    let data = {
      email: this.subscribeEmail,
    };
    this.subService.createSubcriber(data).subscribe(
      (response: any) => {
        this.toastr.success(
          `You have successfully subscribed!`,
          'Success'
        );
        this.subscribeEmail = ''
      },
      (error: any) => {
        console.log(error)
        this.toastr.error(`${error.error.error}`, 'Error');
      }
    );
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (data) => {
        this.employees = data.data;
        this.skills = data.data.skills;
        console.log(this.skills);
        console.log(data);
      },
      (error) => {
        if (error.status === 401) {
          this.router.navigate(['/login']);
        }
        console.log(error);
      }
    );
  }



  employeDetails(id: any) {
    this.router.navigate(['employee-details'], id);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigateByUrl('login');
  }
}
