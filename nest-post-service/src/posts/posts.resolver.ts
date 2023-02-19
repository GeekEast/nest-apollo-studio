import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import Post from './models/post.model';
import { PostsService } from './posts.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => Post, { name: 'GetPost' })
  post(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query(() => [Post], { name: 'GetPosts' })
  posts(): Post[] {
    return this.postsService.findAll();
  }
}
