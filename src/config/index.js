export let env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const domains = {
  apiUrl: 'http://douban.uieee.com/v2/book/', // 代理豆瓣Api
  dev: 'https://example.dev.cn', // 测试api接口
  prod: 'https://example.prod.cn' // 正式api接口
};
// 小程序本地存储key的前缀
const dbPrefixes = {
  dev: 'dev.',
  prod: 'prod.',
  apiUrl: 'apiUrl.'
};

env = 'apiUrl';

export const isPord = env === 'prod';
export const isDev = env === 'dev';
export const isMock = false;
export const isDebug = true;
export const domain = domains[env];
export const dbPrefix = dbPrefixes[env];
export const appTitle = '漂流吧图书酱';
export const appId = 'wxcf070f835a792170';
