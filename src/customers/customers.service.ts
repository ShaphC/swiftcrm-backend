import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customersRepository.findOneBy({ id });
  }

  create(customer: Customer): Promise<Customer> {
    return this.customersRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
