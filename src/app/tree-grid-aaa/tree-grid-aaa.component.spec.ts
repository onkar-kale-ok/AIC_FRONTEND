import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridAAAComponent } from './tree-grid-aaa.component';

describe('TreeGridAAAComponent', () => {
  let component: TreeGridAAAComponent;
  let fixture: ComponentFixture<TreeGridAAAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridAAAComponent]
    });
    fixture = TestBed.createComponent(TreeGridAAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
