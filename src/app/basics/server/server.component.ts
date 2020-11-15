import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: #fff;
        }
    `]
})
export class ServerComponent {
    /************ String Interpolation ***********/
    serverId: number = 10;
    serverStatus: string = 'online';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    }

    // Return server status in a method:
    getServerStatus() {
        return this.serverId;
    }
    // All method does is return string in the end or something which can be converted to string.

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';               // ternary expression
    }
}