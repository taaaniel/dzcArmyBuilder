import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmyCreatorComponent } from './army-creator.component';

describe('ArmyCreatorComponent', () => {
  let component: ArmyCreatorComponent;
  let fixture: ComponentFixture<ArmyCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmyCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
