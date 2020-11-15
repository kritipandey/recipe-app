import { Component } from '@angular/core';
import { DataService } from 'src/app/data.services';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private dataservice: DataService ){
    this.dataservice.statusUpdates.subscribe(
      (status: string) => alert('New status: ' + status)
    );
  }

  onCreateAccount(accountName: string, status: string) {
    this.dataservice.addAccount(accountName, status);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.loggingService.logStatusChange(status);                      //injected this service in dataservice  
  }
}