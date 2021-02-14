import React from 'react';

import {Operation, useDI, useService} from '@iiiristram/sagun';

import {ArticlesService} from './services/articles';
import {Page} from './components/page';

export default function ArticlesPage() {
    const context = useDI();
    const service = context.createService(ArticlesService);
    context.registerService(service);

    const {operationId} = useService(service);

    return <Operation operationId={operationId}>{() => <Page />}</Operation>;
}
