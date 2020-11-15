import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  // styleUrls: ['./servers.component.css']
  styles: [`
      // Multiline styles can be added here.
  `]
})
export class ServersComponent implements OnInit {
  /********* Property Binding *********/
  // allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  // serverCreated = false;
  Servers = [' '];

  constructor() {
    // setTimeout( () => {
    //   this.allowNewServer = true;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  /********* Event Binding *********/
  OnCreatingServer() {
    // this.serverCreated = true;
    this.Servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created. Name is ' + this.serverName;
  }

  /********* Passing and using data with Event Binding *******/
  // onUpdateServerName(event: Event) {          
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}