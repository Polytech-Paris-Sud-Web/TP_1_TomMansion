import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author: string;
  articles: Article[];
  about: string;

  constructor(
    private articleService: ArticleService,
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute
    ) {

    // get the author name from path
    this.author = this.activatedRoute.snapshot.params.name;

    // Load his articles
    this.getArticles();

    // Get his history
    this.getHistory();
  }

  ngOnInit() {
  }

  async getArticles(): Promise<void> {
    this.articles = await this.articleService.getAuthorArticles(this.author);
  }

  async getHistory(): Promise<void> {
    this.about = await this.authorService.getAuthorAbout(this.author);
  }
}
