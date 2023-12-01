import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsWallComponent } from './posts-wall.component';

describe('PostsWallComponent', () => {
  let component: PostsWallComponent;
  let fixture: ComponentFixture<PostsWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsWallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
