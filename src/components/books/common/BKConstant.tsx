import React from "react";
import { ProcessService } from "../../../services/ProcessService";
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';

export class BKConstant {

  static readonly DISPLAY_MODE_MAP = [
    {id: '1', attr: 'BigCard', value: 'Large', icon: <ViewCompactIcon />},
    {id: '2', attr: 'SmallCard', value: 'Small', icon: <ViewComfyIcon />},
    {id: '3', attr: 'List', value: 'List', icon: <ViewHeadlineIcon />}
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

  /**
   * Books filter options attributes
   */
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
  /**
   * Books sort options attributes
   */
  static readonly SORT_ATTR_LIST = [
    'title',
    'pageCount',
  ] as const;
  static readonly SORT_SUBMAP = ProcessService.obtainSubList(
    BKConstant.DATA_MAP,
    BKConstant.SORT_ATTR_LIST
  );
  /**
   * OnMouseOver display info attributes
   */
  static readonly TOOLTIP_ATTR_LIST = [
    'title',
    'isbn',
    'pageCount',
    'publishedDate',
    'status',
    'authors',
    'categories',
  ] as const;
  static readonly TOOLTIP_SUBMAP = ProcessService.obtainSubList(
    BKConstant.DATA_MAP,
    BKConstant.TOOLTIP_ATTR_LIST
  );
  /**
   * Debounce display details info attributes
   */
  static readonly DETAIL_ATTR_LIST = [
    'title',
    'shortDescription',
    'longDescription',
  ] as const;
  static readonly DETAILS_SUBMAP = ProcessService.obtainSubList(
    BKConstant.DATA_MAP,
    BKConstant.DETAIL_ATTR_LIST
  );
}

const displayModeList = BKConstant.DISPLAY_MODE_MAP.map(x => x.attr);
export type DisplayMode = typeof displayModeList[number];

const filterTypeAttrList = BKConstant.OPTION_MODE_MAP.map(x => x.attr);
export type FilterType = typeof filterTypeAttrList[number];

const dataAttrList = BKConstant.DATA_MAP.map(x => x.attr);
export type DataAttr = typeof dataAttrList[number];

const filterNameAttrList = BKConstant.FILTER_ATTR_LIST;
export type FilterAttr = typeof filterNameAttrList[number];

const sortNameAttrList = BKConstant.SORT_ATTR_LIST;
export type SortAttr = typeof sortNameAttrList[number];

const tooltipAttrList = BKConstant.TOOLTIP_ATTR_LIST;
export type TooltipAttr = typeof tooltipAttrList[number];

const detailsAttrList = BKConstant.DETAIL_ATTR_LIST;
export type DetailsAttr = typeof detailsAttrList[number];