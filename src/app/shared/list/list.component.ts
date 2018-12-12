import { Component, Input } from '@angular/core';
import { ListItemModel } from './list-item/list-item';

@Component({
	selector: 'as-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})

/**
 *  A component that displays a given list of items
 */
export class ListComponent {
  @Input() public list: ListItemModel[];
}
