import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts:Post[] = [];
  d:Post[] = [];

  constructor() { }

  fetchData() {    
    fetch("http://localhost:3000/posts").then(res=>res.json()).then(res=>{
      this.posts = res
    })
  }

  getPostsFiltrati(a:boolean) {
    return this.posts.filter(p=>p.active==a)
  }

  private toggleServicePost(id:number) {    
    this.posts = this.posts.map((e)=>{
      if(e.id == id) { 
        console.log(e, e.active);
        e.active = !e.active
      }
      return e
    })
  }

  toggleDbPost(id:number) {
    //QUA USO LO SPREAD OPERATOR PERCHÈ VOGLIO UNA COPIA DELL'ELEMENTO TROVATO E NON DIRETTAMENTE QUELLO DELL'ARRAY
    //IL METODO .FIND() RESTITUISCE L'OGGETTO DELL'ARRAY, MODIFICARE postDiArray MODIFICA L'ELEMENTO INTERNO A THIS.POSTS
    let postDiArray = this.posts.find(p=>p.id==id)
    let postClone = {...postDiArray}
    if(postDiArray == undefined) {
      throw new Error("Elemento non trovato")
    }
    //SE FACESSIMO QUESTA OPERAZIONOE SU postDiArray AVREMMO GIÀ MODIFICATO L'ARRAY THIS.POSTS SENZA PERÒ ESSERE SICURI DI AVER AVUTO UN SUCCESSO CON IL FETCH
    //QUINDI USO LA VARIABILE "CLONE" DELL'ELEMENTO TROVATO COSÌ CHE LA MODIFICA VENGA FATTA DAL METODO toggleServicePost COME ABBIAMO VISTO INSIEME
    postClone.active = !postClone.active
    //QUESTA MODIFICA SERVE PER PASSARE IL POST MODIFICATO AL FETCH PER MODIFICARE IL DB, SOLO AL COMPLETAMENTO CI VA BENE MODIFICARE THIS.POSTS
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postClone)
    }).then((res)=>{
      if(res.ok) {
        this.toggleServicePost(id)
      } else {
        console.log("err");
      }
      return res
    })
  }

  deleteDb(id:number) {
    return fetch("http://localhost:3000/posts/"+id, {
      method:"DELETE"
    }).then(res=>{
      if(res.ok) {
        this.deleteService(id)
      }
      return res
    })
  }

  private deleteService(id:number) {
    this.posts = this.posts.filter(e=>e.id != id)    
  }

  dettaglio(id: number){
    let postDet = this.posts.findIndex((post) => {
      return post.id == id;
    })
    this.d = [];
    
    return this.d.push(this.posts[postDet]);
  }

  getDetails(){
    return this.d;
  }

}
