import { FileModel } from "./file.model";

export class PostModel{
  _id: string;
  title: string;
  description: string;
  createdBy: string;
  files: FileModel[];
  likes: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(){
    this._id = '';
    this.title = '';
    this.description = '';
    this.createdBy = '';
    this.files = [];
    this.likes = [];
    // this.comments = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
