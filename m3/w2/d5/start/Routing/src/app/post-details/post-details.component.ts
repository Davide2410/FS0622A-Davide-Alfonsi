import { Component, OnInit} from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  d: Post[] = [];

  constructor(private postSRV:PostService) { }

  ngOnInit(): void {
    let dettaglio = this.postSRV.getDetails();   
    this.d = dettaglio;
    console.log(this.d);
  }
}


