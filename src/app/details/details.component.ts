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

    // this.api.getdata().subscribe(data =>{
    //   this.detailList=data;
    // })
  }
  getAllDetails() {
    this.api.getdata().subscribe(res => {
      this.detailsList = res;
    })
  }

  postEmpDetails() {
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




}
