export class BKConstant {

  static readonly DISPLAY_MODE_MAP = [
    {id: '1', attr: 'BigCard', value: 4},
    {id: '2', attr: 'SmallCard', value: 2},
    {id: '3', attr: 'List', value: 12}
  ] as const;

}

const displayModeList = BKConstant.DISPLAY_MODE_MAP.map(x => x.attr);
export type DisplayMode = typeof displayModeList[number];

