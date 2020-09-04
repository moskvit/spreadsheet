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

  deleteColumn(cindex) {

    // keep the length of columns to loop the data with later
    const columnsLength = this.displayedColumns.length;

    // prevent deleting all headers.
    if ( this.displayedColumns.length === 1 ) {
      console.log('Cannot delete all headers.');
      return;
    }

    // delete specific header
    this.displayedColumns.splice(cindex + 1, 1);

    // adjust header's names.
    for ( let i = 0; i < this.displayedColumns.length - 1; i++ ) {
      this.displayedColumns[i + 1] = String.fromCharCode(65 + i);
    }

    let newRow = [];
    const newDataSource = [];
    // loop dataSource and copy every value exept the one in deleted column
    for (let i = 0; i < this.dataSource.data.length; i++) {
      for (let j = 0; j < columnsLength; j++) {
        if (j !== cindex) { // if doesn't equal the deleted header than copy
          newRow.push(this.dataSource.data[i][j]);
        }
      }
      newDataSource.push(newRow);
      newRow = [];
    }

    this.dataSource.data = newDataSource;
  }

  addColumn(cindex) {

    // add header to displayedColumn
    if ( cindex !== 0 ) {
      this.displayedColumns.splice(cindex, 0, undefined);
    } else { // if first header then we need to make sure we don't delete the header with rows number
      this.displayedColumns.splice(cindex + 1, 0, undefined);
    }

    // adjust header.
    for ( let i = 0; i < this.displayedColumns.length - 1; i++ ) {
      this.displayedColumns[i + 1] = String.fromCharCode(65 + i);
    }

    // insert rows for new header
    let tempColArray = new Array();
    let dataSourceTemp = new Array();
    for (let r = 0; r < this.dataSource.data.length; r++) {
      for (let c = 0; c < this.displayedColumns.length - 1; c++) {
        if (cindex === c) { // if equal new header index then add new cell too
          tempColArray.push('        ');
          tempColArray.push(this.dataSource.data[r][c]);
        } else {
          tempColArray.push(this.dataSource.data[r][c]);
        }
      }
      dataSourceTemp.push(tempColArray);
      tempColArray = new Array();
    }
    this.dataSource.data = dataSourceTemp;
  }

  deleteRow(rIndex) {
    // prevent user from deleting all rows
    if ( this.dataSource.data.length === 1 ) {
      console.log('Cannot delete all rows.' );
      return;
    }

    const tempDataSource = new Array();
    // insert empty cells for new row
    // look for the right row to edit
    for (let i = 0; i < this.dataSource.data.length; i++) {
      if (rIndex !== i) { // when not the index if deleted row then copy
        tempDataSource.push(this.dataSource.data[i]);
      }
    }
    this.dataSource.data = tempDataSource;
  }

  addRow(rIndex) {

    const newArr = new Array(this.displayedColumns.length);

    let tempDataSource = new Array()

    // insert empty cells for new row
    // look for the right row to edit
    for (let i = 0; i < this.dataSource.data.length; i++) {
      if (rIndex === i) { // if row index equal the index of clicked add button then add new header
        tempDataSource.push(this.dataSource.data[i]);
        tempDataSource.push(newArr);
      } else {
        tempDataSource.push(this.dataSource.data[i]);
      }
    }
    this.dataSource.data = tempDataSource;

  }

}
