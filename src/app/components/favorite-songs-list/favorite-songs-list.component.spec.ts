import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSongsListComponent } from './favorite-songs-list.component';

describe('FavoriteSongsListComponent', () => {
  let component: FavoriteSongsListComponent;
  let fixture: ComponentFixture<FavoriteSongsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteSongsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSongsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
