import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => Int)
  authorId: number;

  @Field()
  name: string;
}
