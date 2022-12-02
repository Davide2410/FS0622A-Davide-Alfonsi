import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { HomeComponent } from './home/home.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserDettaglioComponent } from './user-dettaglio/user-dettaglio.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "active",
    component: ActivePostsComponent
  },
  {
    path: "active/false",
    component: InactivePostsComponent
  },
  {
    path: "active/:id",
    component: PostDetailsComponent
  },
  {
    path: "inactive/:id",
    component: PostDetailsComponent
  },
  {
    path: "user",
    component: UsersComponent,
    children: [
      {
        path: "user/:id",
        component: UserDettaglioComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
