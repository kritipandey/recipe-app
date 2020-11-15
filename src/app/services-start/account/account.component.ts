import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.services';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService, private dataservice: DataService){}

  onSetTo(status: string) {
    this.dataservice.updateStatus(this.id, status);
    // console.log('A server status changed, new status: ' + status);

    // Instead of above console, we can write:
    // this.loggingService.logStatusChange(status);                        //injected this service in dataservice
    this.dataservice.statusUpdates.emit(status);
  }
}