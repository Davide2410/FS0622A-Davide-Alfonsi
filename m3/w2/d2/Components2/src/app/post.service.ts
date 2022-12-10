import {  Post } from "../app/models/post"

let posts: Post[] = [];

export function get(): Promise <Post[]> {
  return new Promise((res)=>{
    res(posts);
  })
}



