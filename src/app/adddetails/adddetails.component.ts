import { Component, OnInit } from '@angular/core';
import { Project } from '../interface/project'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { AddbudgetService } from '../add/addbudget.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { HttpClient, HttpResponse ,HttpHeaders, HttpRequest} from '@angular/common/http';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.scss']
})
export class AdddetailsComponent implements OnInit {

  addBudgetForm: FormGroup;
  formattedAmount;
  authToken: any;
  projName: any;
  selectedValue: string;

  get startDate(){
    return this.addBudgetForm.get("startDate")
  }

  get endDate(){
    return this.addBudgetForm.get("endDate")
  }

  get projectCost(){
    return this.addBudgetForm.get("projectCost")
  }

  get projectName(){
    return this.addBudgetForm.get("projectName")
  }

  projects = [
    {value: '1', name: 'Test Project 1'},
    {value: '2', name: 'Test Project 2'},
    {value: '3', name: 'Test Project 3'}
  ];

  constructor(private fb: FormBuilder, private router: Router, private addbudget: AddbudgetService) { }

  ngOnInit() {
    this.addBudgetForm = this.fb.group({
      startDate: ['', Validators.required],
      projectCost: ['', Validators.required],
      endDate: ['', Validators.required],
      projectName:['', Validators.required]
    })
  }

  changeProject(projectName){
    console.log("inside change project" + projectName)
    this.projName = projectName.name;
  }

  onSubmit(){
    console.log("inside submit")
    var swal: any = Swal.mixin({
      toast: true,
      width: '400px',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000
    });
    

    this.addBudgetForm.value.projectName = this.projName;    
    this.addbudget.add(this.addBudgetForm.value).pipe(first()).subscribe(add => {

      swal.fire({
        type: 'success',
        title: add.message
        })
      
    })
  }

  /* transformAmount(event){
    console.log("inside transform amount")
     this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, 'Rs.')
    event.target.value = this.formattedAmount; 
  } */
}
