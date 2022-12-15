import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      Emp_Firstname:[''],
      Emp_Lastname:[''],
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
}
