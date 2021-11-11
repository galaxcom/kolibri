import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoCosmeticoControlComponent } from './tratamiento-cosmetico-control.component';

describe('TratamientoCosmeticoControlComponent', () => {
  let component: TratamientoCosmeticoControlComponent;
  let fixture: ComponentFixture<TratamientoCosmeticoControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoCosmeticoControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoCosmeticoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
