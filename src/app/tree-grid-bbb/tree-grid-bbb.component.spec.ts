import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridBBBComponent } from './tree-grid-bbb.component';

describe('TreeGridBBBComponent', () => {
  let component: TreeGridBBBComponent;
  let fixture: ComponentFixture<TreeGridBBBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridBBBComponent]
    });
    fixture = TestBed.createComponent(TreeGridBBBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
