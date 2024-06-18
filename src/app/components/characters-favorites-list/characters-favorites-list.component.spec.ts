import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFavoritesListComponent } from './characters-favorites-list.component';

describe('CharactersFavoritesListComponent', () => {
  let component: CharactersFavoritesListComponent;
  let fixture: ComponentFixture<CharactersFavoritesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersFavoritesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersFavoritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
