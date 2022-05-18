import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;
  @Output() creationRequest = new EventEmitter<number>();

  constructor(private fb: FormBuilder,
    private articleService: ArticleService,
    private _router: Router) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async createArticle() {
    await this.articleService.createArticle({
      title: this.articleForm.get('title').value,
      content: this.articleForm.get('content').value,
      author: this.articleForm.get('author').value,
    });
    this.creationRequest.emit();
    this._router.navigateByUrl('/articles')
  }

}
