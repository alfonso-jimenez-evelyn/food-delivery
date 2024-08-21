import { Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { RegisterResponse } from './types/user.types';

@Resolver('User')
export class UsersResolver {
    constructor(
        private readonly userService: UsersService
    ){}

    @Mutation(() => RegisterResponse)
    async register(
        
    )
    
}
