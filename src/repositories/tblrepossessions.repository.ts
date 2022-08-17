import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {Tblrepossessions, TblrepossessionsRelations} from '../models';

export class TblrepossessionsRepository extends DefaultCrudRepository<
  Tblrepossessions,
  typeof Tblrepossessions.prototype.id,
  TblrepossessionsRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(Tblrepossessions, dataSource);
  }
}
