import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'as-profile-template',
  templateUrl: './profile-template.component.html',
  styleUrls: ['./profile-template.component.scss'],
})

export class ProfileTemplateComponent implements OnInit {
  @Input() public image: SafeResourceUrl;

  constructor() {}

  public ngOnInit(): void {}
}
