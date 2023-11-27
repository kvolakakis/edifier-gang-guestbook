import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private hostURL: string = environment.host + 'api/users/';
  constructor(private http: HttpClient) { }

  // Get all users
  getAllUsers(){
    return this.http.get(this.hostURL);
  }

  // Get user by id
  getUserById(id: string){
    return this.http.get(this.hostURL + id);
  }

  // Create user
  createUser(user: any){
    return this.http.post(this.hostURL, user);
  }

  // Update user
  updateUser(user: any){
    return this.http.put(this.hostURL + user._id, user);
  }

  // Delete user
  deleteUser(id: string){
    return this.http.delete(this.hostURL + id);
  }
}
