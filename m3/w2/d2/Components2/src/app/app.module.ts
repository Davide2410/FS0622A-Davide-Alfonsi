import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostAttivirComponent } from './post-attivir/post-attivir.component';
import { PostNonAttiviComponent } from './post-non-attivi/post-non-attivi.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [

  {
    path: "",
    component : HomeComponent
  },

  {
    path: "post-attivir",
    component : PostAttivirComponent
  },

  {
    path: "post-non-attivi",
    component : PostNonAttiviComponent
  },


]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostAttivirComponent,
    PostNonAttiviComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
