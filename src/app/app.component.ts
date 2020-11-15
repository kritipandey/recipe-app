import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'receipe';

  onNavigate(feature:string){
    this.loadedFeature = feature;

  }


  // serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test'}];

  // onServerAdded(serverData: {serverName: string, serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBlueprintAdded(blueprintData: {serverName: string, serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }

  // OnChangeFirst(){
  //   this.serverElements[2].name = "Changed!";
  // }

  // OnDestroyFirst(){
  //   this.serverElements.splice(0,1);   // It will destroy array element 0,1,2
  // }
}