import {daemon, operation, Service} from '@iiiristram/sagun';
import {call} from 'typed-redux-saga';

import {articles} from '@project/api';

import {OPERATIONS} from '../consts';

export class ArticlesService extends Service {
    public toString() {
        return 'ArticlesService';
    }

    @daemon()
    @operation(OPERATIONS.LOAD_ARTICLES)
    public *loadArticles() {
        return yield* call(articles.list, {offset: 0, limit: 50});
    }
}
