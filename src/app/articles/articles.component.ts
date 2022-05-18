import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles!: Article[];
  @Output() updateRequest = new EventEmitter<void>();

  articlesDisplay: Article[];
  filters: string = "";

  constructor(private articleService: ArticleService) {
  }

  async ngOnInit() {
    this.updateArticles();
  }

  async delete(id: number): Promise<void> {
    await this.articleService.deleteArticle(id);
    // Tell parent to update list
    this.updateRequest.emit();
  }

  filter(filterValue: string) {
    this.filters = filterValue;
    this.updateArticles()
  }

  updateArticles(): void {
    if (this.filters.length > 0) {
      this.articlesDisplay = this.articles.filter((a: Article) => {
        return a.title.toLowerCase().includes(this.filters.toLowerCase())
         || a.content.toLowerCase().includes(this.filters.toLowerCase())
      })
    } else {
      this.articlesDisplay = this.articles;
    }
  }
  ngOnChanges() {
    this.updateArticles();
  }
}

