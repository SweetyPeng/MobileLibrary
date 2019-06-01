import wepy from 'wepy';
import { isMock, isProd, domain } from 'config';
import { toast, deepCopy, loading, Debug } from 'utils';
import db from 'utils/db';
import wx from 'utils/wx';

// 请根据项目实际情况修改
let mockConfig = require('../mock/mockConfig');

const GET = (url, params = {}, showToast = false, handler = {}) => {
  return requestWithLogin('GET', url, params, showToast, handler);
};

const POST = (url, params = {}, showToast = false, handler = {}) => {
  return requestWithLogin('POST', url, params, showToast, handler);
};

const PUT = (url, params = {}, showToast = false, handler = {}) => {
  return requestWithLogin('PUT', url, params, showToast, handler);
};

const DELETE = (url, params = {}, showToast = false, handler = {}) => {
  return requestWithLogin('DELETE', url, params, showToast, handler);
};

const requestWithLogin = async (
  method,
  url,
  params = {},
  showToast = false,
  handler = {}
) => {
  let resp = {};
  resp = await request(method, url, params, showToast, handler);
  return resp;
};

const session = {
  sessionId: wx.getStorageSync('sessionId')
};
const request = (method, url, params = {}, showToast = false, handler = {}) => {
  params = deepCopy(params);

  Debug('request url:' + url);

  if (/^http(s)?/.test(url)) {
    handler.url = url;
  } else {
    handler.url = domain + url;
  }
  handler.header = {
    'sessionId': session.sessionId
  };
  handler.data = params;
  handler.method = method;
  
  if (method === 'POST') {
    handler.header['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    handler.header['accept'] = 'application/json';
  }
  if (!isProd) {
    if ( (params.isMock === undefined && isMock) || (!(params.isMock === undefined) && params.isMock)) {
      return Promise.resolve(require('../mock/' + mockConfig[handler.url]));
    }
  }
  delete params.isMock;
  toastFn(showToast)();
  return new Promise((resolve, reject) => {
    handler.success = res => {
      toastFn(showToast, false)();
      if (res.statusCode === 200) {
        Debug('response success: ' + url + ' ==============================');
        Debug(res.data);
        Debug('response end: ' + url + ' ==============================');
        resolve(res.data);
      } else {
        if (showToast) {
          toast((res.data && res.data.message) || '网络错误~', 'error');
        }
        Debug('response fail: ' + url + ' ==============================');
        Debug(res);
        Debug('response end: ' + url + ' ==============================');
        reject(res);
      }
    };
    handler.fail = err => {
      wepy.hideNavigationBarLoading();
      loading(false);
      toast('网络错误~');
      reject(err);
    };
    wx.request(handler);
  });
};

const toastFn = (showToast, open = true) => {
  if (!showToast && open) {
    return () => {
      wepy.showNavigationBarLoading();
    };
  }
  if (!showToast && !open) {
    return () => {
      wepy.hideNavigationBarLoading();
    };
  }
  if (showToast && open) {
    return () => {
      loading();
    };
  }
  if (showToast && !open) {
    return () => {
      loading(false);
    };
  }
};

export { GET, POST, PUT, DELETE, session};
