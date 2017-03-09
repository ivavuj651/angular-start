import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    template: `
    <div>
        <nav class='nav navbar-default'>
            <div class='containter-fluid'>
                <ul class='nav navbar-nav'>
                    <li> <a routerLink="/welcome" > Welcome </a> </li>
                    <li> <a routerLink="/products" > Products </a> </li>
                </ul>
            </div>
        </nav>
        <div class='containter'>
            <router-outlet> </router-outlet>
        </div>
    </div>
    ` ,
   
})
export class AppComponent { 
    pageTitle:string='moj naslov';

}
