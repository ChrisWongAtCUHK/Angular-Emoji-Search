import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiResultRowComponent } from './emoji-result-row.component';

describe('EmojiResultsRowComponent', () => {
  let component: EmojiResultRowComponent;
  let fixture: ComponentFixture<EmojiResultRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiResultRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
