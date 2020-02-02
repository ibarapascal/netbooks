export class URLService {
  /**
   * 
   * @param history react-router-dom route history
   */
  static acquireEditingId(history: any): string | undefined {
    const lastElement = history.location.pathname.split('/').pop();
    return isNaN(lastElement) || lastElement === '' ? undefined : lastElement;
  }
  /**
   * 
   * @param history react-router-dom route history
   */
  static acquireCurrentPageDomain(history: any): string {
    const list = history.location.pathname.split('/');
    const lastElement = list.pop();
    const reg = /^\d+$/;
    return reg.test(lastElement) ? list.pop() : lastElement;
  }
}