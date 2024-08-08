import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';
import { CreateCustomerDto } from './create-customer.dto';

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

  create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    customer.name = createCustomerDto.name;
    customer.email = createCustomerDto.email;
    customer.phone = createCustomerDto.phone;
    return this.customersRepository.save(customer);
  }

  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
