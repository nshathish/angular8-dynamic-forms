import { TestBed } from '@angular/core/testing';

import { ProfileEditorFormResolverService } from './profile-editor-form-resolver.service';

describe('ProfileEditorFormResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileEditorFormResolverService = TestBed.get(ProfileEditorFormResolverService);
    expect(service).toBeTruthy();
  });
});
