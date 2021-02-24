import React, {PropsWithChildren} from 'react';
import Box from '@material-ui/core/Box';

export type AppLayoutProps = PropsWithChildren<{}>;

export function AppLayout({children}: AppLayoutProps) {
    return <Box>{children}</Box>;
}
