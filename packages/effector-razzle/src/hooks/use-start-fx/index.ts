import {useMemo, useEffect} from 'react';
import {Event} from 'effector-root';
import {useEvent} from 'effector-react/ssr';
import {useParams, useLocation} from 'react-router';

import {StartParams} from 'types';

export function useStartFx(startEvent: Event<StartParams>) {
    const params = useParams();
    const location = useLocation();
    const query = useMemo(() => Object.fromEntries(new URLSearchParams(location.search)), [location.search]);
    const start = useEvent(startEvent);

    useEffect(() => {
        start({params, query});
    }, []);
}
