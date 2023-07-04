/** @format */

import {Component} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    public appPages = [
        {title: 'Home', url: '/folder/home', icon: 'home'},
        {title: 'Accounts', url: '/folder/accounts', icon: 'wallet'},
        {
            title: 'Transactions',
            url: '/folder/transactions',
            icon: 'swap-horizontal',
        },
        {title: 'Bill Records', url: '/folder/bills', icon: 'document-text'},
        {title: 'Logout', url: '/logout', icon: 'log-out'},
    ];

    constructor() {}

    showSidebar(): boolean {
        if (
            window.location.pathname == '/login' ||
            window.location.pathname == '/signup'
        ) {
            return false;
        }
        return true;
    }
}
