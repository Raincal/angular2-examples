import { Component } from 'angular2/core';
import { Article } from './article';

@Component({
    selector: 'reddit-article',
    inputs: ['article'],
    host: {
        class: 'row'
    },
    templateUrl: 'app/article.component.html'
})

export class ArticleComponent {
    article: Article;

    voteUp(): boolean {
        this.article.voteUp();
        return false;

    }

    voteDown(): boolean {
        this.article.voteDown();
        return false;

    }
}