import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export let SheetHeader = [
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        '],
  ['        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ', '        ']
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  dataSource = new MatTableDataSource(SheetHeader);

  constructor() {}

}
