import React, {Suspense, useEffect} from 'react';
import {useServiceConsumer} from '@iiiristram/sagun';

import {Spinner} from '@project/ui';

import {ArticlesService} from '../../services/articles';
import {Articles} from '../articles';

export function Page() {
    const {actions} = useServiceConsumer(ArticlesService);

    useEffect(() => {
        actions.loadArticles();
    }, [actions]);

    return (
        <div>
            <div>Articles</div>
            <Suspense fallback={<Spinner />}>
                <Articles />
            </Suspense>
        </div>
    );
}
