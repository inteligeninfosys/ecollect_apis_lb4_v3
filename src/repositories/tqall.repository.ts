import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {Tqall, TqallRelations} from '../models';

export class TqallRepository extends DefaultCrudRepository<
  Tqall,
  typeof Tqall.prototype.ACCNUMBER,
  TqallRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(Tqall, dataSource);
  }
}
