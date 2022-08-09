import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    oracle: {
      schema: 'ecol',
      table: "TBL_IPF_CANCELLATIONS"
    }
  }
})
export class TblIpfCancellations extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  accnumber: string;

  @property({
    type: 'string',
    required: true,
  })
  custnumber: string;

  @property({
    type: 'string',
  })
  custname?: string;

  @property({
    type: 'string',
  })
  celnumber?: string;

  @property({
    type: 'string',
  })
  telnumber?: string;

  @property({
    type: 'number',
  })
  oustbalance?: number;

  @property({
    type: 'number',
  })
  arrearsamount?: number;

  @property({
    type: 'number',
  })
  daysinarr?: number;

  @property({
    type: 'number',
  })
  scheduleamount?: number;

  @property({
    type: 'string',
  })
  scheduledate?: string;

  @property({
    type: 'string',
  })
  insuranceco?: string;

  @property({
    type: 'string',
  })
  insuranceemail?: string;

  @property({
    type: 'string',
  })
  insuranceaddress?: string;

  @property({
    type: 'string',
  })
  withassetfinance?: string;

  @property({
    type: 'string',
  })
  cancelipf?: string;

  @property({
    type: 'number',
  })
  daysutilized?: number;

  @property({
    type: 'number',
  })
  daysunutilized?: number;

  @property({
    type: 'number',
  })
  refundamount?: number;

  @property({
    type: 'string',
  })
  broker?: string;

  @property({
    type: 'string',
  })
  policynumber?: string;

  @property({
    type: 'number',
  })
  policyamount?: number;

  @property({
    type: 'string',
  })
  policystartdate?: string;

  @property({
    type: 'string',
  })
  loanstartdate?: string;

  @property({
    type: 'string',
  })
  policyenddate?: string;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
  })
  issuedby?: string;

  @property({
    type: 'string',
  })
  cancellationletter?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TblIpfCancellations>) {
    super(data);
  }
}

export interface TblIpfCancellationsRelations {
  // describe navigational properties here
}

export type TblIpfCancellationsWithRelations = TblIpfCancellations & TblIpfCancellationsRelations;
