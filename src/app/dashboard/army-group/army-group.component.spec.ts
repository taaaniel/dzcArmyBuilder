import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyGroupComponent } from './army-group.component';

describe('ArmyGroupComponent', () => {
  let component: ArmyGroupComponent;
  let fixture: ComponentFixture<ArmyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
