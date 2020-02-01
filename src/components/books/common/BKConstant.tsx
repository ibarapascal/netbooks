import { ProcessService } from "../../../services/ProcessService";

export class BKConstant {

  static readonly DISPLAY_MODE_MAP = [
    {id: '1', attr: 'BigCard', value: 4},
    {id: '2', attr: 'SmallCard', value: 2},
    {id: '3', attr: 'List', value: 12}
  ] as const;

  static readonly OPTION_MODE_MAP = [
    {id: '1', attr: 'Normal', value: 'Normal Match'},
    {id: '2', attr: 'Exact', value: 'Exact Match'},
    {id: '3', attr: 'Start', value: 'Start With'}
  ] as const;

  static readonly DATA_MAP = [
    {id: '1', attr: 'title', value: 'Title'},
    {id: '2', attr: 'isbn', value: 'ISBN Number'},
    {id: '3', attr: 'pageCount', value: 'Page Count'},
    {id: '4', attr: 'publishedDate', value: 'Published Date'},
    {id: '5', attr: 'thumbnailUrl', value: 'URL'},
    {id: '6', attr: 'shortDescription', value: 'Brief'},
    {id: '7', attr: 'longDescription', value: 'Content'},
    {id: '8', attr: 'status', value: 'Status'},
    {id: '9', attr: 'authors', value: 'Author'},
    {id: '10', attr: 'categories', value: 'Category'},
  ] as const;

  static readonly FILTER_ATTR_LIST = [
    'title',
    'authors',
    'categories',
    'isbn',
    'longDescription',
    'status'
  ] as const;
  static readonly FILTER_SUBMAP = ProcessService.obtainSubList(
    BKConstant.DATA_MAP,
    BKConstant.FILTER_ATTR_LIST
  );
}

const displayModeList = BKConstant.DISPLAY_MODE_MAP.map(x => x.attr);
export type DisplayMode = typeof displayModeList[number];

const filterNameAttrList = BKConstant.FILTER_SUBMAP.map(x => x.attr);
export type FilterAttr = typeof filterNameAttrList[number];

const filterTypeAttrList = BKConstant.OPTION_MODE_MAP.map(x => x.attr);
export type FilterType = typeof filterTypeAttrList[number];