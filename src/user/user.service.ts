// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async createUser(dto: CreateUserDto) {
    return this.userRepo.create(dto);
  }

  async getUsers() {
    return this.userRepo.findAll();
  }

  async getUserById(id: number) {
    const user = await this.userRepo.findById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateUser(id: number, dto: UpdateUserDto) {
    await this.getUserById(id); // ensure exists
    return this.userRepo.update(id, dto);
  }

  async deleteUser(id: number) {
    await this.getUserById(id);
    return this.userRepo.delete(id);
  }
}