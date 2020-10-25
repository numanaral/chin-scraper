export const REGEX_CHINESE = /\p{Script=Han}/u;
//const REGEX_CHINESE = /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\u{20000}-\u{2a6df}]|[\u{2a700}-\u{2b73f}]|[\u{2b740}-\u{2b81f}]|[\u{2b820}-\u{2ceaf}]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]|[\u{2f800}-\u{2fa1f}]/u;
export const REGEX_PINYIN = /<td class="hanzi5-article-hanzi-info-td2">(.*)<\/td>/;
export const CORS_BYPASS_URL = 'https://cors-anywhere-numan.herokuapp.com/';
export const GIF_URL_PREFIX = 'https://www.hanzi5.com/assets/bishun/animation/';
export const GIF_URL_POSTFIX = '-bishun.gif';
export const PINYIN_URL_PREFIX = 'https://www.hanzi5.com/bishun/';
export const PINYIN_URL_POSTFIX = '.html';
export const PUPPETEER_URL = 'https://backend-dot-try-puppeteer.appspot.com/run';