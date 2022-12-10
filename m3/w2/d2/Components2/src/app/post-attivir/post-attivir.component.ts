import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-attivir',
  templateUrl: './post-attivir.component.html',
  styleUrls: ['./post-attivir.component.css']
})
export class PostAttivirComponent implements OnInit {


  posts:Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts=[]
  }

  getPost(){
    let f = fetch("http:://localhost:3000/posts")
    let r = f.then((res):Promise<Post[]>=>{
      if(res.ok){
        return res.json()
      }
      throw new Error ("Lettura Fallita!")
    })
    r.then((res)=>{
      this.posts=res
    })
  }
}
