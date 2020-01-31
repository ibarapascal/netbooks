# netbooks - demo

React + Typescript

period: 2020/01/31 - 2020/02/02 (3 days)  

## 1. How to run this  

1.1. Serve in localhost  

```shell
npm install
yarn install
yarn start
```

1.2. File editing history visualization by `arkit`  

1.3. File dependencies visualization by `gource`  

1.4. Documents auto generated by `styleguidist`  

## 2. What this is showing  

2.1 Demand  

Create a simple Bookstore web app: [data source](https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json)  

- The user should be able to see a list of books titles  
- The user should be able to select and see the detail of the book.  

2.2 Functions  

## 3. Dev notes  

### Ways to bind styles in react classic / functional components  

1. For normal DOM element, we can import classic `.css` file.  

2. For Material-UI element in classic components, we can use `withStyle` HOC, but facing problems with `styleguidist`, we made some approach to let it became possible.  

3. For Materia-UI element in functional components, simply use `useStyles` hooks via react latest feature.  

### Data completeness  

By type check with static data given by the link above.  

Attributes below are given as optional.  

```tsx
isbn?: string;
publishedDate?: PublishedDate;
thumbnailUrl?: string;
shortDescription?: string;
longDescription?: string;
```

Since we want to use `isbn` as the unique index, we decide not to display the data which does not have `isbn` number.  
