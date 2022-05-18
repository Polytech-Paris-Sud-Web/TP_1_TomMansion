import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
    await this.updateArticles()
  }

  async updateArticles(): Promise<void> {
    // Get the 10 first articles
    this.articles = await this.articleService.getArticles();
    this.articles = this.articles.sort((a:Article, b:Article) => b.id - a .id)
    // TODO: articles filters
  }
}
