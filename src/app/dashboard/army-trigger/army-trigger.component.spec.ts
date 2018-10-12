import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyTriggerComponent } from './army-trigger.component';

describe('ArmyTriggerComponent', () => {
  let component: ArmyTriggerComponent;
  let fixture: ComponentFixture<ArmyTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
