import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
    this.articles = await this.articleService.getArticles();
  }

  async delete(id: number): Promise<void> {
    await this.articleService.deleteArticle(id);
    this.articles = await this.articleService.getArticles();
  }

  async updateArticles(): Promise<void> {
    this.articles = await this.articleService.getArticles();
  }
}
