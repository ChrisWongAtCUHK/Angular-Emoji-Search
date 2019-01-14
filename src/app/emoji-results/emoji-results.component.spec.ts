import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiResultsComponent } from './emoji-results.component';

describe('EmojiResultsComponent', () => {
  let component: EmojiResultsComponent;
  let fixture: ComponentFixture<EmojiResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
