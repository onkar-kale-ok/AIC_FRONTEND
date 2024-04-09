import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridCCCComponent } from './tree-grid-ccc.component';

describe('TreeGridCCCComponent', () => {
  let component: TreeGridCCCComponent;
  let fixture: ComponentFixture<TreeGridCCCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridCCCComponent]
    });
    fixture = TestBed.createComponent(TreeGridCCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
