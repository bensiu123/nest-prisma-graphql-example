import { Module } from '@nestjs/common';
import { PostResolver } from './posts.resolver';
import { PostService } from './posts.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PostResolver, PostService, PrismaService],
})
export class PostModule {}
