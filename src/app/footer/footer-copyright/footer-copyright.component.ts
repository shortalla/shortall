import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-footer-copyright',
  templateUrl: './footer-copyright.component.html',
  styleUrls: ['./footer-copyright.component.scss']
})

export class FooterCopyrightComponent implements OnInit {
  public name: string;
  public year: number;

  constructor() {}

  public ngOnInit(): void {
    this.name = 'Andrew Shortall';
    const date = new Date();
    this.year = date.getFullYear();
  }
}
