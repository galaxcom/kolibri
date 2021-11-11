import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntecedentesFormComponent } from './antecedentes-form.component';

describe('AntecedentesFormComponent', () => {
  let component: AntecedentesFormComponent;
  let fixture: ComponentFixture<AntecedentesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntecedentesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntecedentesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
