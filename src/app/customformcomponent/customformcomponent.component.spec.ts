import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomformcomponentComponent } from './customformcomponent.component';

describe('CustomformcomponentComponent', () => {
  let component: CustomformcomponentComponent;
  let fixture: ComponentFixture<CustomformcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomformcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomformcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
