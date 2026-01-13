import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroInput } from './primeiro-input';

describe('PrimeiroInput', () => {
  let component: PrimeiroInput;
  let fixture: ComponentFixture<PrimeiroInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeiroInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeiroInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
