import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementInfoComponent } from './settlement-info.component';

describe('SettlementInfoComponent', () => {
  let component: SettlementInfoComponent;
  let fixture: ComponentFixture<SettlementInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettlementInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettlementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
