import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountySettlementComponent } from './county-settlement.component';

describe('CountySettlementComponent', () => {
  let component: CountySettlementComponent;
  let fixture: ComponentFixture<CountySettlementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountySettlementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountySettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
