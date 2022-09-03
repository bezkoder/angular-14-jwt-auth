import { Component, OnInit } from '@angular/core';
import {Employee} from "../../_model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {TokenStorageService} from "../../_services/token-storage.service";
import {EmployeeService} from "../../_services/employee.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: Employee = {};
  experiences!: any[] | undefined;
  overview!: any[] | undefined;
  url!: string | undefined ;
  username!:string | null | any;


  public communication: Number | undefined;
  public criticalThinking: Number | undefined;
  public positiveAttitude: Number | undefined;
  public leadership: Number | undefined;
  public teamwork: Number | undefined;
  private id: any;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEmployee(this.id)
    this.url =  this.employees?.videoPath
    this.username = this.tokenStorageService.getUser().username;

  }

  getEmployee(id : any) {
    this.employeeService.getAllEmployeesById(id)
      .subscribe(
        (data: {data: Employee}) => {
          this.employees = data.data;
          this.experiences = this.employees.experience;
          this.overview = this.employees.tabData.overview
         this.communication = this.employees.softskills.Communication * 10
         this.criticalThinking = this.employees.softskills.CriticalThinking * 10
         this.leadership = this.employees.softskills.Leadership * 10
         this.positiveAttitude = this.employees.softskills.PositiveAttitude * 10
         this.teamwork = this.employees.softskills.Teamwork * 10
          this.url =  this.employees?.videoPath

        },
        error => {
          this.toastr.error(error.error.message,"Diçka shkoi keq!")
        });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('login');
  }

  contact(id : any) {
    console.log(id)
    this.employeeService.contact(id)
      .subscribe(
        (data: {data: Employee}) => {
         
          this.toastr.success('Sukses',"Kandidati u njoftua!")
        },
        error => {
          this.toastr.error(error.error.message,"Diçka shkoi keq!")
        });
  }

  openCv() {

  }
}
