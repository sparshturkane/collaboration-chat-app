import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('my page not found page');
    
    meta.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);
  }

  ngOnInit() {
  }

}
