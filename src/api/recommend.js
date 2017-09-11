/**
 * Created by maxiangsai on 2017/9/11.
 */
import jsonp from 'common/js/jsonp'
import { commonParam, option } from './config'

/**
 * 推荐精选
 */
export default function getRecommend() {
  const url = 'https://list.meilishuo.com/search'
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
