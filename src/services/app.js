/**
 * Created by DD on 2017/10/28.
 */
import request from '../utils/request';
import { STORAGETOKENKEY } from '../utils/config';

/**
 * 登录
 * @param username
 * @param password
 * @returns {Promise.<Object>}
 */
export async function login({ username, password, code, session_id }) {
  return request('/admin/Login/login', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
    }),
    body: JSON.stringify({
      username, password, code, session_id,
    }),
  });
}
