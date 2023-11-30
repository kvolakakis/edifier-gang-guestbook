import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private hostURL = environment.host + '/api/files';
  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get(this.hostURL);
  }

  getFile(id: string) {
    return this.http.get(this.hostURL + '/' + id);
  }

  createFile(file: any) {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('filename', file.name);
    uploadData.append('filepath', "");
    return this.http.post(this.hostURL, uploadData);
  }

  updateFile(id:string, file: any) {
    return this.http.put(this.hostURL + '/' + id, file);
  }

  deleteFile(id:string) {
    return this.http.delete(this.hostURL + '/' + id);
  }

  getFileURL(filepath: string) {
    return environment.host + "/api/" + filepath;
  }
}
