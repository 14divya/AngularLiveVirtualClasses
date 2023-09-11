import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MevnComponent } from './mevn.component';

describe('MevnComponent', () => {
  let component: MevnComponent;
  let fixture: ComponentFixture<MevnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MevnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MevnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
