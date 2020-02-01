export class ProcessService {
  /**
   * Get position index number list for each attribute
   * @param baseList check base list
   * @param attrList check items list
   */
  static obtainIdxList(baseList: readonly any[], attrList: readonly string[]): Array<number> {
    return Array.from(Array(attrList.length).keys()).map((v, idx) =>
      baseList.findIndex((x: {attr: string}) => x.attr === attrList[idx])
    );
  }
  /**
   * Get sub list for each attribute
   * @param baseList check base list
   * @param attrList check items list
   */
  static obtainSubList<T>(baseList: readonly T[], attrList: readonly string[]): Array<T> {
    return baseList.filter((v, idx) =>
      this.obtainIdxList(baseList, attrList).includes(idx)
    );
  }
  /**
   * 
   * @param constant 
   * @param attr 
   */
  static acquireAttrValue(constant: readonly any[], attr: string): any {
    return constant.filter(x => x.attr === attr)[0].value;
  }

}