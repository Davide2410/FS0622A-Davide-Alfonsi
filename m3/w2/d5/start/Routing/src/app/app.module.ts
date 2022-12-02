import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaiuscoloPipe } from './piper/maiuscolo.pipe';
import { EvidenziaDirective } from './directives/evidenzia.directive';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UsersComponent } from './users/users.component';
import { UserDettaglioComponent } from './user-dettaglio/user-dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostCardComponent,
    MaiuscoloPipe,
    EvidenziaDirective,
    PostDetailsComponent,
    UsersComponent,
    UserDettaglioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
