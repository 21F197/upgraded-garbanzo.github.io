import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprkiComponent } from './sprki.component';

describe('SprkiComponent', () => {
  let component: SprkiComponent;
  let fixture: ComponentFixture<SprkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprkiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
