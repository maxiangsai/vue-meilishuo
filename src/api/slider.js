/**
 * Created by maxiangsai on 2017/9/7.
 */
import jsonp from 'common/js/jsonp'
import { commonParam, option } from './config'

/**
 * 获取index banner
 */
export function getSliderBanner() {
  const url = 'http://mce.mogujie.com/jsonp/multiget/3'
  const data = Object.assign({}, commonParam, {
    pids: 43542
  })
  return jsonp(url, data, option)
}

/**
 * 获取slide box类别
 */
export function getSlideList() {
  const url = 'http://mce.mogujie.com/jsonp/multiget/3'
  const data = Object.assign({}, commonParam, {
    pids: [5868,6348,13730,59540,42287]
  })
  return jsonp(url, data, option)
}

/**
 * 推荐精选
 */
export function getRecommend() {
  const url = 'http://list.meilishuo.com/search'
  const data = Object.assign({}, commonParam, {
    frame: 1,
    page: 1,
    cKey: 'wap-index',
    tag: '',
    maxPrice: '',
    minPrice: '',
    fcid: '',
    _mgjuuid: '38b87828-5f5c-47c8-b1cb-77cca97197ea',
    sort: 'pop',
    _: 1504775271406
  })
  return jsonp(url, data, option)
}
