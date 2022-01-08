import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../model/post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: number;
  post: Post;

  constructor(private route: ActivatedRoute, private router: Router, 
    private postService: PostService, private location: Location) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.post = this.postService.findPostById(this.id);
  }

  goBack() {
    //this.router.navigate(['post']);
    this.location.back();
  }
}
