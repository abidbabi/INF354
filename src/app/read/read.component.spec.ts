import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { READComponent } from './read.component';

describe('READComponent', () => {
  let component: READComponent;
  let fixture: ComponentFixture<READComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ READComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(READComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
