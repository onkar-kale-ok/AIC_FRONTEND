import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridDDDComponent } from './tree-grid-ddd.component';

describe('TreeGridDDDComponent', () => {
  let component: TreeGridDDDComponent;
  let fixture: ComponentFixture<TreeGridDDDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridDDDComponent]
    });
    fixture = TestBed.createComponent(TreeGridDDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
