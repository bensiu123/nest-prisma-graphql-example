import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './posts.service';
import { NewPost, UpdatePost } from 'src/graphql.schema';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query('posts')
  async posts() {
    return this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return this.postService.post(args);
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postService.deletePost(args);
  }
}
