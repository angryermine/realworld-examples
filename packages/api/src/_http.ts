import ky, {Options} from 'ky';

const API_ROOT = 'https://conduit.productionready.io/api';

type SearchParams = Options['searchParams'];

function prepareQuery<T extends object>(obj?: T): SearchParams {
    if (!obj) {
        return;
    }

    return Object.entries(obj).reduce<SearchParams>((acc, [key, val]) => {
        if (typeof val !== 'undefined' && val !== null) {
            acc[key] = val;
        }

        return acc;
    }, {});
}

export const http = {
    get<TQuery extends object, TRes>(url: string, query?: TQuery) {
        return ky
            .get(`${API_ROOT}/${url}`, {
                searchParams: prepareQuery(query),
            })
            .json<TRes>();
    },
    post<TReq, TRes>(url: string, body?: TReq) {
        return ky
            .post(`${API_ROOT}/${url}`, {
                body: JSON.stringify(body),
            })
            .json<TRes>();
    },
    put<TReq, TRes>(url: string, body?: TReq) {
        return ky
            .put(`${API_ROOT}/${url}`, {
                body: JSON.stringify(body),
            })
            .json<TRes>();
    },
    delete<T>(url: string) {
        return ky.delete(`${API_ROOT}/${url}`).json<T>();
    },
};
