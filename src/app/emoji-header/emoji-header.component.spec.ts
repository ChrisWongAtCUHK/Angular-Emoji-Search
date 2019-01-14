import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiHeaderComponent } from './emoji-header.component';

describe('EmojiHeaderComponent', () => {
  let component: EmojiHeaderComponent;
  let fixture: ComponentFixture<EmojiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
