import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatatypesModel } from './details.model';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  formValue!: FormGroup;

  datatypesobj:DatatypesModel=new DatatypesModel();
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      Mobile_No:[''],
      Email:[''],
      Salary:[''],


      // Checking with different Datatpes
      // Firstname:[''],
      // Lastname:[''],
      // Mobile_No:[''],
      // Email:[''],
      // Salary:[''],
    });
  }
postEmployeeDetails(){
  this.datatypesobj.firstname=this.formValue.value.firstname;
  this.datatypesobj.lastname=this.formValue.value.lastname;
  this.datatypesobj.Mobile_No=this.formValue.value.Mobile_No;
  this.datatypesobj.Email=this.formValue.value.Email;
  this.datatypesobj.Salary=this.formValue.value.Salary;

   this.api.postEmployee(this.datatypesobj)
   .subscribe((res: any)=>{
    console.log(res);
    alert("Employee added Successfully");
},
     (     _err: any)=>{
  alert("Something went wrong");
})
}
}
