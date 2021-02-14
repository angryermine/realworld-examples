import React, {PropsWithChildren} from 'react';
import {Container} from 'react-bootstrap';

export type AppLayoutProps = PropsWithChildren<{}>;

export function AppLayout({children}: AppLayoutProps) {
    return <Container>{children}</Container>;
}
