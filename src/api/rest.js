import axios from 'axios';

const post = (url, body = {}, instance = axios) => instance.post(url, body);

const get = (url, params = {}, instance = axios) => {
	return instance.get(url, {
		params,
	});
};

const put = (url, body, instance = axios) => instance.put(url, body);

const remove = (url, instance = axios) => instance.delete(url);

// https://github.com/axios/axios#response-schema
const parse = async res => {
	const { data } = await res;
	return data;
};

// Set config defaults when creating the instance
const serverInstance = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URI,
});

const server = {
	post: (...props) => post(...props, serverInstance),
	get: (...props) => get(...props, serverInstance),
	put: (...props) => put(...props, serverInstance),
	delete: (...props) => remove(...props, serverInstance),
};

export { post, get, put, remove as delete, parse, server };
