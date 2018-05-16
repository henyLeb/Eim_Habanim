import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTreatmentComponent } from './remove-treatment.component';

describe('RemoveTreatmentComponent', () => {
  let component: RemoveTreatmentComponent;
  let fixture: ComponentFixture<RemoveTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
