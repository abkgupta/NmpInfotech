import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcontainerComponent } from './appcontainer.component';

describe('AppcontainerComponent', () => {
  let component: AppcontainerComponent;
  let fixture: ComponentFixture<AppcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
