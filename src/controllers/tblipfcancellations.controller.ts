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
import {TblIpfCancellations} from '../models';
import {TblIpfCancellationsRepository} from '../repositories';

export class TblipfcancellationsController {
  constructor(
    @repository(TblIpfCancellationsRepository)
    public tblIpfCancellationsRepository: TblIpfCancellationsRepository,
  ) { }

  @post('/nodeapi-v2/tbl-ipf-cancellations')
  @response(200, {
    description: 'TblIpfCancellations model instance',
    content: {'application/json': {schema: getModelSchemaRef(TblIpfCancellations)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblIpfCancellations, {
            title: 'NewTblIpfCancellations',

          }),
        },
      },
    })
    tblIpfCancellations: TblIpfCancellations,
  ): Promise<TblIpfCancellations> {
    return this.tblIpfCancellationsRepository.create(tblIpfCancellations);
  }

  @get('/nodeapi-v2/tbl-ipf-cancellations/count')
  @response(200, {
    description: 'TblIpfCancellations model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TblIpfCancellations) where?: Where<TblIpfCancellations>,
  ): Promise<Count> {
    return this.tblIpfCancellationsRepository.count(where);
  }

  @get('/nodeapi-v2/tbl-ipf-cancellations')
  @response(200, {
    description: 'Array of TblIpfCancellations model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TblIpfCancellations, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TblIpfCancellations) filter?: Filter<TblIpfCancellations>,
  ): Promise<TblIpfCancellations[]> {
    return this.tblIpfCancellationsRepository.find(filter);
  }

  @patch('/nodeapi-v2/tbl-ipf-cancellations')
  @response(200, {
    description: 'TblIpfCancellations PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblIpfCancellations, {partial: true}),
        },
      },
    })
    tblIpfCancellations: TblIpfCancellations,
    @param.where(TblIpfCancellations) where?: Where<TblIpfCancellations>,
  ): Promise<Count> {
    return this.tblIpfCancellationsRepository.updateAll(tblIpfCancellations, where);
  }

  @get('/nodeapi-v2/tbl-ipf-cancellations/{id}')
  @response(200, {
    description: 'TblIpfCancellations model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TblIpfCancellations, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TblIpfCancellations, {exclude: 'where'}) filter?: FilterExcludingWhere<TblIpfCancellations>
  ): Promise<TblIpfCancellations> {
    return this.tblIpfCancellationsRepository.findById(id, filter);
  }

  @patch('/nodeapi-v2/tbl-ipf-cancellations/{id}')
  @response(204, {
    description: 'TblIpfCancellations PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TblIpfCancellations, {partial: true}),
        },
      },
    })
    tblIpfCancellations: TblIpfCancellations,
  ): Promise<void> {
    await this.tblIpfCancellationsRepository.updateById(id, tblIpfCancellations);
  }

  @put('/nodeapi-v2/tbl-ipf-cancellations/{id}')
  @response(204, {
    description: 'TblIpfCancellations PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tblIpfCancellations: TblIpfCancellations,
  ): Promise<void> {
    await this.tblIpfCancellationsRepository.replaceById(id, tblIpfCancellations);
  }

  @del('/nodeapi-v2/tbl-ipf-cancellations/{id}')
  @response(204, {
    description: 'TblIpfCancellations DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tblIpfCancellationsRepository.deleteById(id);
  }
}
