/**
 * create by didi on 2017.10.28
 */
import { message } from 'antd';
import { UserInfo } from '../services/user';

export default {
  namespace: 'user',
  state: {
    userData: { list: [] },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    /**
     * 获取用户列表
     * @param payload
     * @param call
     * @param put
     */
    *getUserInfo({ payload }, { call, put }) {
      const { page, page_rows, type, key_word } = payload;
      const { data } = yield call(UserInfo, { page, page_rows, type, key_word });
      console.log(data, 'data');
      if (data.code === 1000) {
        yield put({ type: 'save', payload: { userData: data.info } });
      } else {
        message.error(data.message);
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/user') {
          dispatch({
            type: 'getUserInfo',
            payload: { page_rows: 6 },
          });
        }
      });
    },
  },
};
