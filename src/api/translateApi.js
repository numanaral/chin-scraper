import { server, parse } from './rest';

const TRANSLATE_ROUTE = 'translate';

const translate = (
	text,
	params = {
		from: 'zh-CN',
		to: 'en',
		extended: true,
	}
) => parse(server.get(TRANSLATE_ROUTE, { ...params, text }));

export default translate;
