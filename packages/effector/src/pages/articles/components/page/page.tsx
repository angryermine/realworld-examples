import React, {memo} from 'react';
import {useGate} from 'effector-react';

import {PageGate} from '../../models';
import {Articles} from '../articles';

export const Page = memo(function Page() {
    useGate(PageGate);

    return (
        <div>
            <div>Articles</div>
            <Articles />
        </div>
    );
});
