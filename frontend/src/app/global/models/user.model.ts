export class UserModel{
  _id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(){
    this._id = '';
    this.username = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
