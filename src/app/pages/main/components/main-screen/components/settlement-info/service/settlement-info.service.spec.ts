import { TestBed } from '@angular/core/testing';

import { SettlementInfoService } from './settlement-info.service';

describe('SettlementInfoService', () => {
  let service: SettlementInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettlementInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
