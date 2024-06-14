import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersListItemPreviewComponent } from './characters-list-item-preview.component';

describe('CharactersListItemPreviewComponent', () => {
  let component: CharactersListItemPreviewComponent;
  let fixture: ComponentFixture<CharactersListItemPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersListItemPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersListItemPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
