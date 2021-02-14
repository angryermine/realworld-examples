import React, {PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
    isLoading: boolean;
}>;

export function AsyncContent({isLoading, children}: Props) {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
}
