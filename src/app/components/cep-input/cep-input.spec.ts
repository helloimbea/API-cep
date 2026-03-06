import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepInput } from './cep-input';

describe('CepInput', () => {
  let component: CepInput;
  let fixture: ComponentFixture<CepInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CepInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
