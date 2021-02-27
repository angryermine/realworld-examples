import React, {memo} from 'react';

import {useStartFx} from 'hooks/use-start-fx';

import {pageLoaded} from '../../models';
import {Articles} from '../articles';

export const Page = memo(function Page() {
    useStartFx(pageLoaded);

    return (
        <div>
            <div>Articles</div>
            <Articles />
        </div>
    );
});
