import { Component, OnInit } from '@angular/core';
import { Project } from '../interface/project'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { AddbudgetService } from '../add/addbudget.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { HttpClient, HttpResponse ,HttpHeaders, HttpRequest} from '@angular/common/http';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-adddetails',
  templateUrl: './adddetails.component.html',
  styleUrls: ['./adddetails.component.scss']
})
export class AdddetailsComponent implements OnInit {

  /* addBudgetForm: FormGroup;
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

  changeProject(event: MatSelectChange){
    //console.log("inside change project" + event.value)
    this.addBudgetForm.value.projectName = event.value;
    //console.log(this.addBudgetForm.value)
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
    

    //this.addBudgetForm.value.projectName = this.projName;    
    this.addbudget.add(this.addBudgetForm.value).pipe(first()).subscribe(add => {
      swal.fire({
        type: 'success',
        title: add.message
        })
      
    })
  } */

  /* transformAmount(event){
    console.log("inside transform amount")
     this.formattedAmount = this.currencyPipe.transform(this.formattedAmount, 'Rs.')
    event.target.value = this.formattedAmount; 
  } */

  addCustomerForm : FormGroup;

  get customerName(){
    return this.addCustomerForm.get("customerName");
  }
  get selectedGender(){
    return this.addCustomerForm.get("selectedGender");
  }
  get mobileNo(){
    return this.addCustomerForm.get("mobileNo");
  }
  get emailId(){
    return this.addCustomerForm.get("emailId");
  }
  get dob(){
    return this.addCustomerForm.get("dob");
  }
  get address(){
    return this.addCustomerForm.get("address");
  }
  get selectedNationality(){
    return this.addCustomerForm.get("selectedNationality");
  }
  get zipCode(){
    return this.addCustomerForm.get("zipCode");
  }

  genders = [
    { name: 'Male', value: 1 },
    { name: 'Female', value: 2 }
  ];

  nationalities = [
    { name: 'India', value: 1 },
    { name: 'UAE', value: 2 },
    { name: 'USA', value: 3 },
    { name: 'UK', value: 4 },
    { name: 'Spain', value: 5 },
    { name: 'Italy', value: 6 },
    { name: 'Finland', value: 7 },
    { name: 'Sweden', value: 8 },
    { name: 'France', value: 9 },
    { name: 'Indonesia', value: 10 }
  ];

  constructor(private fb: FormBuilder, private router: Router, private addService: AddbudgetService){}

  ngOnInit(){
    this.addCustomerForm = this.fb.group({
      customerName: ['', Validators.required],
      selectedGender: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      selectedNationality: ['', Validators.required],
      zipCode: ['', Validators.required],
    })

  }

  onChangeGender(event){

  }

  changeNationality(event){

  }

  onSubmit(){
    console.log(this.addCustomerForm.value)

    this.addService.addCustomerDetails(this.addCustomerForm.value).pipe(first()).subscribe(add => {
      console.log("Final Reponse ::: " + add);
    })
  }

  
}
