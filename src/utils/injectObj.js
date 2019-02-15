import wepy from 'wepy';
import {
  back,
  link,
  redirect,
  reLaunch,
  toast,
  modal,
  loading,
  getSystemInfo,
  Debug
} from 'utils';
import db from 'utils/db';
import Bus from 'utils/bus';
wepy.$bus = new Bus();

Object.assign(wepy.component.prototype, {
  $back: back,
  $toast: toast,
  $modal: modal,
  $loading: loading,
  $d: Debug,
  $debug: Debug,
  $db: db,
  $link: link,
  $redirect: redirect,
  $reLaunch: reLaunch
});
Object.assign(wepy.app.prototype, {
  $db: db,
  $d: Debug,
  $debug: Debug
});
