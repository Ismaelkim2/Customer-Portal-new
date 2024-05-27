import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimHistoryComponent } from './claim-history.component';

describe('ClaimHistoryComponent', () => {
  let component: ClaimHistoryComponent;
  let fixture: ComponentFixture<ClaimHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
