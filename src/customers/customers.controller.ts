import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customers.entity';
import { CreateCustomerDto } from './create-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.create(createCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.customersService.remove(id);
  }
}
