import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http: HttpClient, public dataService: DataService) { }
  detailedOrderDetails: any;

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.dataService.getUserOrderDetails().subscribe((res: any) => {
      if (res.type == "success") {
        this.detailedOrderDetails = res.data;
        console.log(res.data)
      }
      else{
        this.detailedOrderDetails = null;
      }
    })
  }


}
