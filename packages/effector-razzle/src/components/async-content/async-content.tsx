import React, {PropsWithChildren} from 'react';

import {Spinner} from '@project/ui';

type Props = PropsWithChildren<{
    isLoading: boolean;
}>;

export function AsyncContent({isLoading, children}: Props) {
    if (isLoading) {
        return <Spinner />;
    }

    return <>{children}</>;
}
