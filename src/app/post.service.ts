import { Injectable } from '@angular/core';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPosts(): Post[] {
    let posts = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' }
    ];
    return posts;
  }

  findPostById(id: number): Post {
    let posts = this.getAllPosts();
    return posts.find(post => post.id == id);
  }
}
