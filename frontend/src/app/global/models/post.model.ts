export class PostModel{
  _id: string;
  title: string;
  description: string;
  user: string;
  files: string[];
  likes: string[];
  // comments: string[];
  createdAt: Date;
  updatedAt: Date;

  constructor(){
    this._id = '';
    this.title = '';
    this.description = '';
    this.user = '';
    this.files = [];
    this.likes = [];
    // this.comments = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
