export class FileModel{
  filename: string;
  filepath: string;
  createdBy: string;

  constructor(filename: string, filepath: string, createdBy: string){
    this.filename = filename;
    this.filepath = filepath;
    this.createdBy = createdBy;
  }
}
