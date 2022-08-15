import { Component, OnInit } from '@angular/core';
import {Employee} from "../../_model/employee";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TokenStorageService} from "../../_services/token-storage.service";
import {EmployeeService} from "../../_services/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees: Employee = {};
  experiences!: any[] | undefined;
  overview!: any[] | undefined;
  username!: string;
  url!: string | undefined ;

  public communication: Number | undefined;
  public criticalThinking: Number | undefined;
  public positiveAttitude: Number | undefined;
  public leadership: Number | undefined;
  public teamwork: Number | undefined;
  // currentEmployee: Employee | any;
  // fourthFormGroup: FormGroup = this._formBuilder.group({skills: [''], imagePath: [''], videoPath:[''], cvPath:['']});


  private id: any;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private router: Router,
              private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getEmployee(this.id)

    this.url =  this.employees?.videoPath
    console.log(this.employees?.videoPath)

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

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigateByUrl('login');
  }

  openCv() {

  }
}
