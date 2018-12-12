import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'as-header-nav',
	templateUrl: './header-nav.component.html',
	styleUrls: ['./header-nav.component.scss']
})

export class HeaderNavComponent implements OnInit {
  public firstName: string;
  public lastName: string;

  constructor() {}

  public ngOnInit(): void {
    this.firstName = 'Andrew';
    this.lastName = 'Shortall';
  }

}
