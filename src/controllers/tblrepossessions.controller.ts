import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Tblrepossessions} from '../models';
import {TblrepossessionsRepository} from '../repositories';

export class TblrepossessionsController {
  constructor(
    @repository(TblrepossessionsRepository)
    public tblrepossessionsRepository: TblrepossessionsRepository,
  ) { }

  @post('/nodeapi-v2/tblrepossessions')
  @response(200, {
    description: 'Tblrepossessions model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tblrepossessions)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tblrepossessions, {
            title: 'NewTblrepossessions',
            exclude: ['id'],
          }),
        },
      },
    })
    tblrepossessions: Omit<Tblrepossessions, 'id'>,
  ): Promise<Tblrepossessions> {
    return this.tblrepossessionsRepository.create(tblrepossessions);
  }

  @get('/nodeapi-v2/tblrepossessions/count')
  @response(200, {
    description: 'Tblrepossessions model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tblrepossessions) where?: Where<Tblrepossessions>,
  ): Promise<Count> {
    return this.tblrepossessionsRepository.count(where);
  }

  @get('/nodeapi-v2/tblrepossessions')
  @response(200, {
    description: 'Array of Tblrepossessions model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tblrepossessions, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tblrepossessions) filter?: Filter<Tblrepossessions>,
  ): Promise<Tblrepossessions[]> {
    return this.tblrepossessionsRepository.find(filter);
  }

  @patch('/nodeapi-v2/tblrepossessions')
  @response(200, {
    description: 'Tblrepossessions PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tblrepossessions, {partial: true}),
        },
      },
    })
    tblrepossessions: Tblrepossessions,
    @param.where(Tblrepossessions) where?: Where<Tblrepossessions>,
  ): Promise<Count> {
    return this.tblrepossessionsRepository.updateAll(tblrepossessions, where);
  }

  @get('/nodeapi-v2/tblrepossessions/{id}')
  @response(200, {
    description: 'Tblrepossessions model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tblrepossessions, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tblrepossessions, {exclude: 'where'}) filter?: FilterExcludingWhere<Tblrepossessions>
  ): Promise<Tblrepossessions> {
    return this.tblrepossessionsRepository.findById(id, filter);
  }

  @patch('/nodeapi-v2/tblrepossessions/{id}')
  @response(204, {
    description: 'Tblrepossessions PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tblrepossessions, {partial: true}),
        },
      },
    })
    tblrepossessions: Tblrepossessions,
  ): Promise<void> {
    await this.tblrepossessionsRepository.updateById(id, tblrepossessions);
  }

  @put('/nodeapi-v2/tblrepossessions/{id}')
  @response(204, {
    description: 'Tblrepossessions PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tblrepossessions: Tblrepossessions,
  ): Promise<void> {
    await this.tblrepossessionsRepository.replaceById(id, tblrepossessions);
  }

  @del('/nodeapi-v2/tblrepossessions/{id}')
  @response(204, {
    description: 'Tblrepossessions DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.tblrepossessionsRepository.deleteById(id);
  }
}
