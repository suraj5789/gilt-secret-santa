import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantaListComponent } from './';

describe('SantaListComponent', () => {
  let component: SantaListComponent;
  let fixture: ComponentFixture<SantaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
