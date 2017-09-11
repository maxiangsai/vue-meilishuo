/**
 * Created by maxiangsai on 2017/9/7.
 */
import jsonp from 'common/js/jsonp'
import { commonParam, option } from './config'

/**
 * 获取index banner
 */
export function getSliderBanner() {
  const url = 'https://mce.mogujie.com/jsonp/multiget/3'
  const data = Object.assign({}, commonParam, {
    pids: 43542
  })
  return jsonp(url, data, option)
}

/**
 * 获取slide box类别
 */
export function getSlideList() {
  const url = 'https://mce.mogujie.com/jsonp/multiget/3'
  const data = Object.assign({}, commonParam, {
    pids: [5868,6348,13730,59540,42287]
  })
  return jsonp(url, data, option)
}
