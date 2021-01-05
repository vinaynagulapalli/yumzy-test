import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { User} from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dataService:DataService, public router: Router) { }

  token:any;
  ngOnInit() {
  }

   user = new User()

   authenticationdetails(){
     this.dataService.userAuthentication(this.user).subscribe((data:any)=>{
      this.token = data.headers.get('x-access-token');
        localStorage.setItem('webtoken',this.token);
        this.router.navigate(['home'])
     })
   }
} 
