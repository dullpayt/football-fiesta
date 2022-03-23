import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftpoolComponent } from './draftpool.component';

describe('DraftpoolComponent', () => {
  let component: DraftpoolComponent;
  let fixture: ComponentFixture<DraftpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
