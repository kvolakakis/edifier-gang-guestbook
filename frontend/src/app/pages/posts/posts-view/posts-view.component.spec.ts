import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsViewComponent } from './posts-view.component';

describe('PostsViewComponent', () => {
  let component: PostsViewComponent;
  let fixture: ComponentFixture<PostsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
