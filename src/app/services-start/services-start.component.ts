import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';

@Component({
  selector: 'app-services-start',
  templateUrl: './services-start.component.html'
})

export class ServicesStartComponent implements OnInit {
  accounts:{name: string, status: string}[]= [];

  constructor(private dataservice: DataService){}

  ngOnInit(){
    this.accounts = this.dataservice.accounts;
  }
}