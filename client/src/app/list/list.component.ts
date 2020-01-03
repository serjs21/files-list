import { Component, OnInit } from '@angular/core';
import { FileMgmtService, FileData } from '../file-mgmt.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  providers: [ FileMgmtService ]
})

export class ListComponent implements OnInit {
  files: FileMgmtService;
  list: string[];
  selectedFile: number | null = null;
  selectedTable: number | null = null;
  fileContent: FileData | null = null;

  constructor(private filesHandler: FileMgmtService ) { }

  ngOnInit() {
    this.init();
  }

  init = async () => {
    this.list = await this.filesHandler.getList();
    this.selectedFile = null;
    this.selectedTable = null;
    this.fileContent = null;
  }

  selectFile = async (id) => {
    this.selectedFile = this.selectedFile === id ? null : id;
    this.selectedTable = null;
    this.fileContent = await this.filesHandler.getFile(this.list[id]);
  }

  selectTable = (id) => {
    this.selectedTable = this.selectedTable === id ? null : id;
  }

  objectToString(obj) {
    return JSON.stringify(obj, null, 4);
  }

  get tables() {
    return this.fileContent && this.fileContent.tables ? this.fileContent.tables : null;
  }

  get selectedTableInfo() {
    const info = Object.assign({}, this.tables[this.selectedTable]);
    delete info.title;
    return this.selectedTable !== null ? Object.entries(info) : null;
  }

   get selectedTableTitle() {
    return this.selectedTable !== null ? this.tables[this.selectedTable].title : null;
  }
}
