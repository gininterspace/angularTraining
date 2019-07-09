/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SplitSqlService } from './split-sql.service';

describe('Service: SplitSql', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplitSqlService]
    });
  });

  it('should ...', inject([SplitSqlService], (service: SplitSqlService) => {
    expect(service).toBeTruthy();
  }));
});
