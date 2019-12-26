import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveMovieRatingService } from '../rating/save-movie-rating.service';
import { MatSelectChange } from '@angular/material';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  /* addMovieAndRatingForm: FormGroup;
  url: any = "http://10.100.9.187:8087/ratingsdata/"
  selectedMovie:any;
  selectedRating:any;
  movieValue:any;

  movieNames = [
    { value: '1', name: 'Movie Name 1' },
    { value: '2', name: 'Movie Name 2' },
    { value: '3', name: 'Movie Name 3' }
  ];

  ratings = [
    { value: '1', name: 'Excellent' },
    { value: '2', name: 'Good' },
    { value: '3', name: 'Not Good' }
  ];


  constructor(private fb: FormBuilder, private router: Router, 
    private saveRating: SaveMovieRatingService, 
    private _http: HttpClient) {
     }

  ngOnInit() {
    this.addMovieAndRatingForm = this.fb.group({
      movie: ['', Validators.required],
      rating: ['', Validators.required],
      movieValue:['']
    })
  }

  onSubmit() {

    var swal: any = Swal.mixin({
      toast: true,
      width: '400px',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000
    });

    if(this.selectedMovie != null && this.selectedMovie != undefined){
      for(let movie of this.movieNames){
        if(movie.name == this.selectedMovie){
          this.movieValue = movie.value;
          //console.log("Movie Value ::: " + this.movieValue)
        }
      }
    }

    this.addMovieAndRatingForm.value.movie = this.selectedMovie;
    this.addMovieAndRatingForm.value.rating = this.selectedRating;
    this.addMovieAndRatingForm.value.movieValue = this.movieValue;
    //console.log(this.addMovieAndRatingForm.value)

    this.saveRating.add(this.addMovieAndRatingForm.value).pipe(first()).subscribe(add => {
      swal.fire({
        type: 'success',
        title: add.message
        })
      
    })

  } */

  addPolicyDetailsForm: FormGroup;

  get policyNo(){
    return this.addPolicyDetailsForm.get("policyNo")
  }
  get planName(){
    return this.addPolicyDetailsForm.get("planName")
  }
  get policyTerm(){
    return this.addPolicyDetailsForm.get("policyTerm")
  }
  get startDate(){
    return this.addPolicyDetailsForm.get("startDate")
  }
  get endDate(){
    return this.addPolicyDetailsForm.get("endDate")
  }
  get sumAssured(){
    return this.addPolicyDetailsForm.get("sumAssured")
  }
  get amountDue(){
    return this.addPolicyDetailsForm.get("amountDue")
  }
  get premiumMode(){
    return this.addPolicyDetailsForm.get("premiumMode")
  }

  policyTerms = [
    { name: '5 Years', value: 1 },
    { name: '10 Years', value: 2 },
    { name: '15 Years', value: 3 },
    { name: '20 Years', value: 4 }
  ];

  premiumModes = [
    { name: 'Monthly', value: 1 },
    { name: 'Half Yearly', value: 2 },
    { name: 'Yearly', value: 3 }
  ];

  constructor(private fb: FormBuilder, private router: Router, private addService: SaveMovieRatingService){

  }

  ngOnInit(){
    this.addPolicyDetailsForm = this.fb.group({
      policyNo: ['', Validators.required],
      planName: ['', Validators.required],
      policyTerm: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      sumAssured: ['', Validators.required],
      amountDue: ['', Validators.required],
      premiumMode: ['', Validators.required]
    })

  }

  onChangePolicyTerm(event){

  }

  onChangeMode(event){

  }

  onSubmit(){
      console.log(this.addPolicyDetailsForm.value)

      this.addService.addPolicyDetails(this.addPolicyDetailsForm.value).pipe(first()).subscribe(add => {
        console.log("Final Reponse ::: " + add);
      })
  }

}
