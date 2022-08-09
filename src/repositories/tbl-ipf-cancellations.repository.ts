import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {OracleDataSource} from '../datasources';
import {TblIpfCancellations, TblIpfCancellationsRelations} from '../models';

export class TblIpfCancellationsRepository extends DefaultCrudRepository<
  TblIpfCancellations,
  typeof TblIpfCancellations.prototype.accnumber,
  TblIpfCancellationsRelations
> {
  constructor(
    @inject('datasources.oracle') dataSource: OracleDataSource,
  ) {
    super(TblIpfCancellations, dataSource);
  }
}
