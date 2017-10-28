/**
 *  create by dd on 2017.10.28
 **/
import config from '../utils/config';
import request from '../utils/request';
import { STORAGETOKENKEY } from '../utils/constant';

const { api } = config;
const { userInfo } = api;

/**
 * 获取用户列表
 * @param page
 * @param page_rows
 * @param type
 * @param key_word
 * @returns {Promise.<Object>}
 * @constructor
 */
export async function UserInfo({ page, page_rows, type, key_word }) {
  return request(userInfo, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json; charset=utf-8',
      authorization: window.localStorage.getItem(STORAGETOKENKEY),
    }),
    body: JSON.stringify({
      page, page_rows, type, key_word,
    }),
  });
}
