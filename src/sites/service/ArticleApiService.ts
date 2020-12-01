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
    return this.httpClient.request('/devServer/server/api/document/search', 'get', {
      keyword: 'nutui',
      page: 1,
      per_page: 100,
      order: 'time',
      field: '""'
    });
  }
}
