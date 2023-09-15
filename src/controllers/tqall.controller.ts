import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Tqall} from '../models';
import {TqallRepository} from '../repositories';

export class TqallController {
  constructor(
    @repository(TqallRepository)
    public tqallRepository: TqallRepository,
  ) { }

  @post('/nodeapi-v2/tqall')
  @response(200, {
    description: 'Tqall model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tqall)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {
            title: 'NewTqall',

          }),
        },
      },
    })
    tqall: Tqall,
  ): Promise<Tqall> {
    return this.tqallRepository.create(tqall);
  }

  @get('/nodeapi-v2/tqall/count')
  @response(200, {
    description: 'Tqall model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tqall) where?: Where<Tqall>,
  ): Promise<Count> {
    return this.tqallRepository.count(where);
  }

  @get('/nodeapi-v2/tqall')
  @response(200, {
    description: 'Array of Tqall model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tqall, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tqall) filter?: Filter<Tqall>,
  ): Promise<Tqall[]> {
    return this.tqallRepository.find(filter);
  }

  @patch('/nodeapi-v2/tqall')
  @response(200, {
    description: 'Tqall PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {partial: true}),
        },
      },
    })
    tqall: Tqall,
    @param.where(Tqall) where?: Where<Tqall>,
  ): Promise<Count> {
    return this.tqallRepository.updateAll(tqall, where);
  }

  @get('/nodeapi-v2/tqall/{id}')
  @response(200, {
    description: 'Tqall model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tqall, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tqall, {exclude: 'where'}) filter?: FilterExcludingWhere<Tqall>
  ): Promise<Tqall> {
    return this.tqallRepository.findById(id, filter);
  }

  @patch('/nodeapi-v2/tqall/{id}')
  @response(204, {
    description: 'Tqall PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tqall, {partial: true}),
        },
      },
    })
    tqall: Tqall,
  ): Promise<void> {
    await this.tqallRepository.updateById(id, tqall);
  }

  @put('/nodeapi-v2/tqall/{id}')
  @response(204, {
    description: 'Tqall PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tqall: Tqall,
  ): Promise<void> {
    await this.tqallRepository.replaceById(id, tqall);
  }

  @del('/nodeapi-v2/tqall/{id}')
  @response(204, {
    description: 'Tqall DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tqallRepository.deleteById(id);
  }
}
