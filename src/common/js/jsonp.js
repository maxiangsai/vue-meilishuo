/**
 * Created by maxiangsai on 2017/9/6.
 */

import originJSONP from 'jsonp'

/**
 * josnp函数封装
 * @param url 基地址
 * @param data {Object}
 * @param option
 * @returns {Promise}
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * obj格式化为queryString
 * @param data {object}
 * @returns {string}
 */
function param(data) {
  let url = ''
  for (var k in data) {
    var value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
