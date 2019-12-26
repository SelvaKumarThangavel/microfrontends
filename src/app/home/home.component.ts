import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  param1: string;
  param2: string;
  isSLATrackerApplication: boolean = false;
  isTestApplication:boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.param1 = params['ApplicationName'];
      this.param2 = this.param1;
      //console.log(this.param1)
      if(this.param1 === 'SLATracker'){
        //this.isSLATrackerApplication = true;
        this.router.navigate(["home", this.param1]);
      }else if(this.param2 === 'CustomerPolicyDetails'){
        //this.isTestApplication = true;
        this.router.navigate(["home/test", this.param1]);
      }
  });
  
  }

}
