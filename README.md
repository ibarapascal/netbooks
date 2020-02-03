# netbooks - demo

React + Typescript + Redux + Material-UI + ESLint + Styleguidist

period: 2020/01/31 - 2020/02/02 (3 days)  

![main view](https://github.com/ibarapascal/netbooks/blob/master/src/temp/screenshot-main-view-20200202162746.jpg)

## 1. How to run this  

1.1. Serve pages  [http://localhost:3000/books](http://localhost:3000/books)

```shell
npm install
yarn install
yarn start
```

1.2. File dependencies visualization by [arkit](https://github.com/dyatko/arkit)  

```shell
yarn arkit src/ -o src/temp/vision-all-files.svg
yarn arkit src/ -o src/temp/vision-view-components.svg -e "src/reducer.tsx,src/store.tsx,src/types/BaseTypes.tsx,src/types/LocalStorage.tsx"
```

1.3. File history visualization by [gource](https://github.com/acaudwell/Gource)  

```shell
gource --seconds-per-day 10 -1920x1080 --auto-skip-seconds 0.5
```

1.4. Documents auto generated by `styleguidist`  [http://localhost:6060](http://localhost:6060)

```shell
yarn document
```

## 2. What this is doing  

2.1 Demand  

Create a simple Bookstore web app: [data source](https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json)  

- The user should be able to see a list of books titles  
- The user should be able to select and see the detail of the book.  

2.2 Functions  

- Filter display data via multiple attributes, using multiple option to match.  
- Reactive tags to select / show display data.  
- Showing data in multiple ways with responsive components.  
- OnMouseOver, click, debounce and other user evnets binding.  
- SPA with router, left preparation for furthur implements (validation, cache, common components, etc).  
- Single source constant definition, type check for almost all attributes.  
- Automatic generated document / file structure analysis.  

## 3. What we can see

File dependencies visualization at 2020/02/02 16:20  

![2020/02/02 16:20](https://github.com/ibarapascal/netbooks/blob/master/src/temp/vision-view-components.svg)

Automatic generated hot-update document at 2020/02/02 16:30  

![2020/02/02 16:30](https://github.com/ibarapascal/netbooks/blob/master/src/temp/screenshot-document-20200202162832.jpg)

File structure and commit history visualization at 2020/02/02 17:30  

![2020/02/02 17:30](https://github.com/ibarapascal/netbooks/blob/master/src/temp/screenshot-files-20200202172311.jpg)

## 4. Bug list (2020/02/03)  

1. Responsive setting not perfect (implemented under 4k resolution)  

2. Card content over-flow below icon buttons  

3. Card icon buttons coverd by footer  

## 5. Dev notes  

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

Addition: isbn also duplicated, remove them till the only one left.  

### Debounce rendering react component

Refer to react-debounce-render [repo](https://github.com/podefr/react-debounce-render)

Currently they do not have typescript support refer to this [issue](https://github.com/podefr/react-debounce-render/issues/14)  

Plan to published a typescript version of it later.  

### Performance

During shift between `Card` and `List`, thumbnails requested multiple times.  

Can be solved by hide rather than re-rendering.  

As for large set of picture, we can use page to seperate, and use front-end local cache to make optimization.  

### Responsive

Material-UI layout `Grid` and so on act as responsive.  

Notice styles adjustment may also need to match those approach.  
