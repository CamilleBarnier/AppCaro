import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassCalcPercentPage } from './mass-calc-percent.page';

describe('MassCalcPercentPage', () => {
  let component: MassCalcPercentPage;
  let fixture: ComponentFixture<MassCalcPercentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassCalcPercentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassCalcPercentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
