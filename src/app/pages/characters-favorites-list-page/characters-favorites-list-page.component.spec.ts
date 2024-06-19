import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFavoritesListPageComponent } from './characters-favorites-list-page.component';

describe('CharactersFavoritesListPageComponent', () => {
  let component: CharactersFavoritesListPageComponent;
  let fixture: ComponentFixture<CharactersFavoritesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersFavoritesListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersFavoritesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
