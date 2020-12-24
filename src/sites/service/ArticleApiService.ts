import { HttpClient } from './HttpClient';
export class ArticleApiService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }
  /**
   * 获取nutui文章
   * @returns
   * @memberof ArticleApiService
   */
  getArticle() {
    return this.httpClient.request('/article/list', 'get', {});
  }
  /**
   * 保存用户访问数据
   * @returns
   */
  saveUserInfo(parmas) {
    return this.httpClient.request('/user/saveVisitInfo', 'post', parmas);
  }
}
