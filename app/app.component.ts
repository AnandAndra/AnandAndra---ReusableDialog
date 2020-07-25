import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
       routerLink="/prompt">Prompted</a> |

    <a routerLinkActive="active" 
       routerLink="/confirm">Confirm</a> | 

    <a routerLinkActive="active" 
      routerLink="/alert">Alert</a> 
      
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

}

/** 
 * EXERCISE 1
 * Duration: 5/10 mins
 * 
 * Add a new route `/users` and display a text into the route component
 * 
 */

/** 
 * EXERCISE 2
 * Duration: 10/15 mins
 * 
 * Create a '<nav-bar>' component and move the menu there
 */