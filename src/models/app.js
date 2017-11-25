/**
 * Created by Allen on 2017/7/9.
 */
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { login, getImageCode, getInfo, getUserPer } from '../services/app';
import { STORAGETOKENKEY, NICKNAME, UID, HEADER_PATH, TITLE } from '../utils/constant';

export default {
  namespace: 'app',
  state: {
    isLogin: false,
    sessionID: '',
  },
  reducers: {
    save(state, { payload }) {
      const { data } = payload;
      return {
        ...state,
        getUserPer: data.info,
      };
    },
    authSuccess(state) {
      return {
        ...state,
        isLogin: true,
      };
    },
    hasToken(state) {
      return {
        ...state,
        isLogin: true,
      };
    },
    authFail(state) {
      return {
        ...state,
        isLogin: false,
      };
    },
  },
  effects: {
    /**
     * 用户登录
     * @param payload
     * @param call
     * @param put
     */
    *authLogin({ payload }, { call, put }) {
      const { username, password, code, session_id } = payload;
      try {
        const { data } = yield call(login, { username, password, code, session_id });
        if (data) {
          if (data.code === 1000) {
            const { uid, authorization, nickname, header_path } = data.info;
            window.localStorage.setItem(STORAGETOKENKEY, authorization);
            window.localStorage.setItem(NICKNAME, nickname);
            window.localStorage.setItem(UID, uid);
            window.localStorage.setItem(HEADER_PATH, header_path);
            window.localStorage.setItem(TITLE, '平台');
            // 登录成功后保存用户的基本信息
            yield put(routerRedux.push('/user'));
            yield put({
              type: 'authSuccess',
            });
          } else if (data.code === 1001) {
            message.error(data.message, 4);
          }
        }
      } catch (error) {
        message.error('用户名或者密码错误', 4);
      }
    },
    *enterAuth({ payload, onComplete }, { put }) {
      // get the token from local storage.
      const token = window.localStorage.getItem(STORAGETOKENKEY);
      if (token) {
        yield put({ type: 'hasToken' });
        onComplete();
      } else {
        yield put({ type: 'logout' });
      }
    },
    // 退出登录
    *logout({ payload }, { put }) {
      window.localStorage.removeItem(NICKNAME);
      window.localStorage.removeItem(UID);
      window.localStorage.removeItem(STORAGETOKENKEY);
      yield put({ type: 'authFail' });
      yield put(routerRedux.push('/login'));
    },
  },
  subscriptions: {
  },
};
