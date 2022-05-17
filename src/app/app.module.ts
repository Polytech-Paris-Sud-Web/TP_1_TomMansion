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

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    TopBarComponent,
    ArticleReadComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'create', component: ArticleCreationComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'articles/:id', component: ArticleReadComponent },
      { path: '', component: ArticlesComponent }
    ]),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
