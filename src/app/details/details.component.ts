import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatatypesModel } from './details.model';
import { ApiService } from '../service/api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  formValue!: FormGroup;

  typesobj: DatatypesModel = new DatatypesModel();

  detailsList: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      Mobile: [''],
      Email: [''],
      Salary: [''],
      Position: [''],
    });
    this.getAllDetails()
  }

  //Get Method calling

  getAllDetails(){
    this.api.getdata().subscribe(res => {
      this.detailsList = res;
    })
  }

  postEmpDetails(){
    this.typesobj.firstname = this.formValue.value.firstname;
    this.typesobj.lastname = this.formValue.value.lastname;
    this.typesobj.Mobile = this.formValue.value.Mobile;
    this.typesobj.Email = this.formValue.value.Email;
    this.typesobj.Salary = this.formValue.value.Salary;

    this.api.postdata(this.typesobj)
      .subscribe((res) => {
        console.log(res);
        alert("Employee added Successfully");

        let ref = document.getElementById('cancel');
        ref?.click();

        this.formValue.reset();
      },
        err => {
          alert("Something went wrong, May de Employee data doesn't added to the data base");
        })
  }

  
  delEmp(id:number){
    this.api.deldata(id).subscribe(emp=>{this.getAllDetails();})
  }

  // onEdit(){
  //   this.formValue.controls['firstname'].setValue(row.firstname);
  //   this.formValue.controls['lastname'].setValue(row.lastname);
  //   this.formValue.controls['Mobile'].setValue(row.Mobile);
  //   this.formValue.controls['Email'].setValue(row.Email);
  //   this.formValue.controls['Salary'].setValue(row.Salary);
  // }
}





