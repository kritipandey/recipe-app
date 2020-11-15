import { Component } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-inactive-service',
  templateUrl: './active-inactive-service.component.html',
  providers: [UserService]
})
export class ActiveInactiveServiceComponent {
}