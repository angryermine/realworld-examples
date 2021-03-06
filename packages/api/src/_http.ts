import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

type SearchParams = Record<string, unknown>;

function prepareQuery<T extends SearchParams>(obj?: T): SearchParams {
    if (!obj) {
        return {};
    }

    return Object.entries(obj).reduce<SearchParams>((acc, [key, val]) => {
        if (typeof val !== 'undefined' && val !== null) {
            acc[key] = val;
        }

        return acc;
    }, {});
}

const DEFAULT_CONFIG: AxiosRequestConfig = {
    baseURL: 'https://conduit.productionready.io/api',
    xsrfHeaderName: 'X-CSRF-TOKEN',
    xsrfCookieName: 'CSRF-TOKEN',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

export const http = {
    get<TQuery extends Record<string, unknown>, TRes>(url: string, query?: TQuery): Promise<TRes> {
        const cfg = {
            ...DEFAULT_CONFIG,
            params: prepareQuery(query),
        };

        return axios
            .get<TQuery, AxiosResponse<TRes>>(url, {
                ...cfg,
                params: prepareQuery(query),
            })
            .then(({data}) => data);
    },
    post<TReq, TRes>(url: string, body?: TReq): Promise<TRes> {
        return axios.post<TReq, AxiosResponse<TRes>>(url, body, DEFAULT_CONFIG).then(({data}) => data);
    },
    put<TReq, TRes>(url: string, body?: TReq): Promise<TRes> {
        return axios.put<TReq, AxiosResponse<TRes>>(url, body, DEFAULT_CONFIG).then(({data}) => data);
    },
    delete<TRes>(url: string): Promise<TRes> {
        return axios.delete<never, AxiosResponse<TRes>>(url, DEFAULT_CONFIG).then(({data}) => data);
    },
};
