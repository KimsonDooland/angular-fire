import { TestBed, inject } from '@angular/core/testing';

import { FireScriptService } from './fire-script.service';

describe('FireScriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireScriptService]
    });
  });

  it('should be created', inject([FireScriptService], (service: FireScriptService) => {
    expect(service).toBeTruthy();
  }));
});
