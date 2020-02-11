import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListPanelComponent } from './grid-list-panel.component';

describe('GridListPanelComponent', () => {
  let component: GridListPanelComponent;
  let fixture: ComponentFixture<GridListPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
