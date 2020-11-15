import { Component } from '@angular/core';

@Component({
    selector: 'app-success',
    template: `
    <p>You have Successfully completed!!</p>
    <div app-warning></div>
    `,
    styleUrls: ['./successalert.component.css']
})
export class SuccessAlert {

}