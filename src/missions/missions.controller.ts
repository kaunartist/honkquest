import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { CreateMissionCategoryDto } from './dto/create-category.dto';

@Controller('missions')
export class MissionsController {
  constructor(private readonly missionsService: MissionsService) {}

  @Post()
  create(@Body() createMissionDto: CreateMissionDto) {
    return this.missionsService.create(createMissionDto);
  }

  @Post('/categories')
  createCategory(@Body() createMissionCategoryDto: CreateMissionCategoryDto) {
    return this.missionsService.createCategory(createMissionCategoryDto);
  }

  @Get('/game/:id')
  findMissions(@Param('id') id: string) {
    return this.missionsService.findByGame(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.missionsService.findOne(+id);
  }
}
