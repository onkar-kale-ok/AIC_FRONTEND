import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridEEEComponent } from './tree-grid-eee.component';

describe('TreeGridEEEComponent', () => {
  let component: TreeGridEEEComponent;
  let fixture: ComponentFixture<TreeGridEEEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeGridEEEComponent]
    });
    fixture = TestBed.createComponent(TreeGridEEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
