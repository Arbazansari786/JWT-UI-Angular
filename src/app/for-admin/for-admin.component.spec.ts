import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForAdminComponent } from './for-admin.component';

describe('ForAdminComponent', () => {
  let component: ForAdminComponent;
  let fixture: ComponentFixture<ForAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForAdminComponent]
    });
    fixture = TestBed.createComponent(ForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
