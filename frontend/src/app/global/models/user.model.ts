export class UserModel{
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(){
    this._id = '';
    this.username = '';
    this.password = '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
