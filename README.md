# EmojiSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Reference

### Emoji Search(ReactJS)
This is inspired by  from Andrew Farmer.
[Emoji Search](https://github.com/ahfarmer/emoji-search)

### [Angular 2 change event on every keypress](https://stackoverflow.com/questions/35359358/angular-2-change-event-on-every-keypress)
```html
<input type="text" class="form-control" (input)="onSearchChange($event.target.value)">
```

```ts
onSearchChange(searchValue : string ) {  
console.log(searchValue);}
```

### [How to detect when an @Input() value changes in Angular?](https://stackoverflow.com/questions/38571812/how-to-detect-when-an-input-value-changes-in-angular)
```ts
private _categoryId: string;

@Input() set categoryId(value: string) {

    this._categoryId = value;
    this.doSomething(this._categoryId);

}

get categoryId(): string {

    return this._categoryId;

}
```
### [Angular 7 — Share Component Data with Other Components](https://medium.com/datadriveninvestor/angular-7-share-component-data-with-other-components-1b91d6f0b93f)
