# EmojiSearch


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

## GitHub page deploy
```cmd
ng build --prod --base-href https://ChrisWongAtCUHK.github.io/Angular-Emoji-Search/ 
ngh --no-silent --dir dist/emoji-search
```
