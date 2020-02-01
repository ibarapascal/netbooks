export class ProcessService {
  static acquireAttrValue(constant: readonly any[], attr: string): any {
    return constant.filter(x => x.attr === attr)[0].value;
  }
}