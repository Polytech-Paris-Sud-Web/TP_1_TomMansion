import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from "./article.service";
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ArticleReadComponent } from './article-read/article-read.component';
import { HomeComponent } from './home/home.component';
import { ArticlesAllComponent } from './articles-all/articles-all.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    TopBarComponent,
    ArticleReadComponent,
    HomeComponent,
    ArticlesAllComponent,
    AuthorComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'create', component: ArticleCreationComponent },
      { path: 'articles', component: ArticlesAllComponent },
      { path: 'articles/:id', component: ArticleReadComponent },
      { path: 'authors/:name', component: AuthorComponent },
      { path: '', component: HomeComponent }
    ]),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
