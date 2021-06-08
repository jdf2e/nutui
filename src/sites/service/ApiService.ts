import { HttpClient } from './HttpClient';
export class ApiService {
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
    return this.httpClient.request(
      '/openapi/article?pageIndex=1&pageSize=100',
      'get',
      {}
    );
  }
  /**
   * 获取nutui使用案例
   * @returns
   * @memberof ArticleApiService
   */
  getCases() {
    return this.httpClient.request(
      '/openapi/cases?pageIndex=1&pageSize=100',
      'get',
      {}
    );
  }
}
