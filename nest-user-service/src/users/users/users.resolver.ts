import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User, { name: 'GetUser' })
  user(@Args({ name: 'id', type: () => ID }) id: number): User {
    return this.usersService.findById(id);
  }

  @Query(() => [User], { name: 'GetUsers' })
  users(): User[] {
    return this.usersService.findAll();
  }
}
