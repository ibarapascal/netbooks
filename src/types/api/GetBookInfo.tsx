export class BookInfoReq {
}

export class BookInfoRes extends Array<BookUnit>{
}

class BookUnit {
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate?: PublishedDate;
  thumbnailUrl?: string;
  shortDescription?: string;
  longDescription?: string;
  status: string;
  authors: Array<string>;
  categories: Array<string>;
  constructor() {
    this.title = '';
    this.pageCount = 0;
    this.status = '';
    this.authors = Array<string>();
    this.categories = Array<string>();
  }
}

class PublishedDate {
  $date: string;
  constructor() {
    this.$date = '';
  }
}
