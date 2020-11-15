import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()                           // It is added here as we have injected a service into this service.
export class DataService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    //Emitting event from here, triggering in account.ts and listenening in new-account.ts
    statusUpdates = new EventEmitter<string>();

    //Injecting below service into DataService.
    constructor(private loggingService: LoggingService){}

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string ){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}