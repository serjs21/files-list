import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseRoute = 'http://127.0.0.1:3000/folder/';

export interface FileData {
  tables: any[];
}

@Injectable({
  providedIn: 'root'
})
export class FileMgmtService {

  constructor(private http: HttpClient) { }

  async getList(): Promise<string[]> {
    return await this.http.get(baseRoute + 'list').toPromise() as string[];
  }

  async getFile(fileName) {
    return await this.http.get(baseRoute + 'file?name=' + fileName).toPromise() as FileData;
  }
}
