import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_service/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:any;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit() {
    //console.log("inside submit")
    this.authenticationService.login(this.loginForm.value).pipe(first())
      .subscribe(
        data => {
          if (data.error === undefined) {
            this.router.navigate(['/home']);
          }
        }
      )

      /* this.user = {"accessToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMSIsImlhdCI6MTU3NjU4NzU5MywiZXhwIjoxNTc3MTkyMzkzfQ.Sas4ktYib6aMJDJP-AnK8f4aPbA3s2B3BZdOvlt4IJS7MHSfjzDQnzpLCzKlFXWUBrEsDWw4lFEYKQkifDizCQ","tokenType":"Bearer"};
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/home']); */
  }

}
