import { TestBed } from '@angular/core/testing';

import { SaveMovieRatingService } from './save-movie-rating.service';

describe('SaveMovieRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveMovieRatingService = TestBed.get(SaveMovieRatingService);
    expect(service).toBeTruthy();
  });
});
