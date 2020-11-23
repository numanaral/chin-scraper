import { server, parse } from './rest';

const PROXY_ROUTE = 'proxy/';

const proxy = (url, params) => parse(server.get(PROXY_ROUTE + url, params));

export default proxy;
