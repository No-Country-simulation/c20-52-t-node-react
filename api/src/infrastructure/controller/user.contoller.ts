import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Inject,
    Query,
    BadRequestException,
  } from '@nestjs/common';
  import { CreateUserDto } from 'src/domain/dto/user/create-user.dto';
  import { UpdateUserDto } from 'src/domain/dto/user/update-user.dto';
  import {
    CREATE_USER_USE_CASE,
    CreateUserUseCase,
  } from 'src/domain/usecase/user/create-user.usecase';
  import {
    DELETE_USER_USE_CASE,
    DeleteUserUseCase,
  } from 'src/domain/usecase/user/delete-user.usecase';
  import {
    FETCH_USER_USE_CASE,
    FetchUserUseCase,
  } from 'src/domain/usecase/user/fetch-user.usecase';
  import {
    UPDATE_USER_USE_CASE,
    UpdateUserUseCase,
  } from 'src/domain/usecase/user/update-user.usecase';
  
  @Controller('user')
  export class UserController {
    constructor(
      @Inject(CREATE_USER_USE_CASE)
      private readonly createUser: CreateUserUseCase,
      @Inject(FETCH_USER_USE_CASE)
      private readonly fetchUser: FetchUserUseCase,
      @Inject(UPDATE_USER_USE_CASE)
      private readonly updateUserUseCase: UpdateUserUseCase,
      @Inject(DELETE_USER_USE_CASE)
      private readonly deleteUserUseCase: DeleteUserUseCase,
    ) {}
  
    @Post()
async create(@Body() createUserDto: CreateUserDto) {
  try {
    return await this.createUser.execute(createUserDto);
  } catch (error) {
    console.error('Error creating user:', error);  // Log the error for debugging
    
    if (error.message === 'USER_ALREADY_EXIST') {
      throw new BadRequestException('User Already Exists', error);
    }
    
    throw new BadRequestException('An error occurred while creating the user', {
      cause: error,
      description: error.message,  // Provide the actual error message
    });
  }
}
  
    @Get()
    async fetch(@Query() filter: any) {
      return await this.fetchUser.execute(filter);
    }
  
    @Patch(':id')
    async update(
      @Body() updateUser: UpdateUserDto,
      @Param('id') userId: string,
    ) {
      return await this.updateUserUseCase.execute(userId, updateUser);
    }
  
    @Delete(':id')
    async delete(@Param('id') userId: string) {
      return await this.deleteUserUseCase.execute(userId);
    }
  }
  