import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiResultsRowComponent } from './emoji-results-row.component';

describe('EmojiResultsRowComponent', () => {
  let component: EmojiResultsRowComponent;
  let fixture: ComponentFixture<EmojiResultsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiResultsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiResultsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
