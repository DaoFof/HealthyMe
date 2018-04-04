import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHosptitalComponent } from './grid-hosptital.component';

describe('GridHosptitalComponent', () => {
  let component: GridHosptitalComponent;
  let fixture: ComponentFixture<GridHosptitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHosptitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHosptitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
