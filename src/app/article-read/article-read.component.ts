import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  id: number;
  article: Article = {
    id: null,
    title: '',
    content: '',
    author: '',
  };

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    // Load the article id from route params
    this.id = this.activatedRoute.snapshot.params.id;

    // Load the article from the article service
    this.getArticle();
  }

  async getArticle(): Promise<void> {
    this.article = await this.articleService.getArticle(this.id);
  }

  async deleteArticle(): Promise<void> {
    await this.articleService.deleteArticle(this.id);
    // Redirect to the article list
    this.router.navigateByUrl('/articles');
  }

  ngOnInit() {

  }

}
