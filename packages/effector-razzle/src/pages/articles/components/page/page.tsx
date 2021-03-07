import React, {memo, useCallback} from 'react';
import {useStore} from 'effector-react';
import {useHistory} from 'react-router-dom';

import {Pagination} from '@project/ui';

import {useStartFx} from 'hooks/use-start-fx';

import {$paginationPage, $paginationCount, pageLoaded} from '../../models';
import {Articles} from '../articles';

export const Page = memo(function Page() {
    useStartFx(pageLoaded);
    const history = useHistory();

    const count = useStore($paginationCount);
    const page = useStore($paginationPage);

    const handlePageChange = useCallback((_: unknown, nextPage: number) => history.push(`/?page=${nextPage}`), []);

    return (
        <div>
            <Pagination count={count} defaultPage={page} onChange={handlePageChange} />
            <Articles />
        </div>
    );
});
