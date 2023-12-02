import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private hostURL = environment.host + '/api/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.hostURL);
  }

  getPost(id:string) {
    return this.http.get(this.hostURL + '/' + id);
  }

  createPost(post: any) {
    return this.http.post(this.hostURL, post);
  }

  updatePost(post: any) {
    return this.http.put(this.hostURL + '/' + post._id, post);
  }

  deletePost(id:string) {
    return this.http.delete(this.hostURL + '/' + id);
  }

  getTopPosts() {
    return this.http.get(this.hostURL + '/top');
  }

  // likePost(id:string) {
  //   return this.http.post(this.hostURL + '/like/' + id, {});
  // }

  // unlikePost(id:string) {
  //   return this.http.post(this.hostURL + '/unlike/' + id, {});
  // }

  // commentPost(id:string, comment: any) {
  //   return this.http.post(this.hostURL + '/comment/' + id, comment);
  // }




}
