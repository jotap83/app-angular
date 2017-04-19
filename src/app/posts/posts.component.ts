import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {

    console.log('inicio...');

    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  public open(event, item) {
    alert('Open ' + item);
  }

  public getPost(event, id) {

    console.log('component ' + id);

    // Retrieve posts from the API
    this.postsService.getPost(id).subscribe(posts => {
      this.posts = posts;
    });

  }

}
