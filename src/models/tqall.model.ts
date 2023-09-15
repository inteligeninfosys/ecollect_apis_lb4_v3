import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    oracle: {
      schema: 'ecol',
      table: "TQALL"
    }
  }
})

export class Tqall extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  ACCNUMBER: string;

  @property({
    type: 'string',
  })
  CLIENT_NAME?: string;

  @property({
    type: 'string',
  })
  CUSTNUMBER?: string;

  @property({
    type: 'string',
  })
  EMAILADDRESS?: string;

  @property({
    type: 'number',
  })
  INSTAMOUNT?: number;

  @property({
    type: 'number',
  })
  DAYSINARR?: number;

  @property({
    type: 'string',
  })
  COLOFFICER?: string;

  @property({
    type: 'string',
  })
  REVIEWDATE?: string;

  @property({
    type: 'number',
  })
  PRINCARREARS?: number;

  @property({
    type: 'string',
  })
  AROCODE?: string;

  @property({
    type: 'string',
  })
  RROCODE?: string;

  @property({
    type: 'string',
  })
  ORIGDATE?: string;

  @property({
    type: 'string',
  })
  CURRENCY?: string;

  @property({
    type: 'number',
  })
  ORIGBALANCE?: number;

  @property({
    type: 'string',
  })
  SECTION?: string;

  @property({
    type: 'string',
  })
  ADDRESSLINE1?: string;

  @property({
    type: 'string',
  })
  ADDRESSLINE2?: string;

  @property({
    type: 'string',
  })
  ADDRESSLINE3?: string;

  @property({
    type: 'string',
  })
  TOWN?: string;

  @property({
    type: 'string',
  })
  DOB?: string;

  @property({
    type: 'string',
  })
  CELNUMBER?: string;

  @property({
    type: 'string',
  })
  TELNUMBER?: string;

  @property({
    type: 'string',
  })
  NATIONID?: string;

  @property({
    type: 'string',
  })
  STREETADDRESS?: string;

  @property({
    type: 'string',
  })
  POSTCODE?: string;

  @property({
    type: 'string',
  })
  BRANCHNAME?: string;

  @property({
    type: 'string',
  })
  PRODUCTCODE?: string;

  @property({
    type: 'number',
  })
  LASTCREDAMNT?: number;

  @property({
    type: 'string',
  })
  ROUTETOSTATE?: string;

  @property({
    type: 'string',
  })
  EXCUSE?: string;

  @property({
    type: 'string',
  })
  LASTCREDDATE?: string;


  @property({
    type: 'string',
  })
  NEXTREPAYDATE?: string;


  @property({
    type: 'number',
  })
  OUSTBALANCE?: number;

  @property({
    type: 'string',
  })
  MANAGER?: string;

  @property({
    type: 'string',
  })
  FILENO?: string;

  @property({
    type: 'number',
  })
  INTRATEARR?: number;

  @property({
    type: 'number',
  })
  PENALARREARS?: number;

  @property({
    type: 'string',
  })
  DATERECEIVED?: string;

  @property({
    type: 'number',
  })
  TOTALARREARS?: number;

  @property({
    type: 'number',
  })
  INTARREARS?: number;

  @property({
    type: 'number',
  })
  DEBITACCRUEDINTRATE?: number;

  @property({
    type: 'number',
  })
  DEBITACCRUEDINTAMOUNT?: number;

  @property({
    type: 'string',
  })
  LIMITAMOUNT?: string;

  @property({
    type: 'string',
  })
  TEMPLIMIT?: string;

  @property({
    type: 'string',
  })
  TEMPLIMITEXPIRYDATE?: string;

  @property({
    type: 'string',
  })
  LIMITEXPIRYDATE?: string;

  @property({
    type: 'string',
  })
  BRANCHSTATUS?: string;

  @property({
    type: 'string',
  })
  CMDSTATUS?: string;

  @property({
    type: 'string',
  })
  REGION?: string;

  @property({
    type: 'string',
  })
  BRANCHCODE?: string;

  @property({
    type: 'string',
  })
  KBRR?: string;

  @property({
    type: 'string',
  })
  SETTLEACCBAL?: string;

  @property({
    type: 'string',
  })
  SETTLEACCNO?: string;

  @property({
    type: 'string',
  })
  BRANCHEMAIL?: string;

  @property({
    type: 'string',
  })
  LASTACTIONDATE?: string;

  @property({
    type: 'string',
  })
  REMEDIALPRODUCT?: string;

  @property({
    type: 'string',
  })
  PRODUCTCLOSUREDATE?: string;

  @property({
    type: 'string',
  })
  ARONAME?: string;

  @property({
    type: 'string',
  })
  BUCKET?: string;

  @property({
    type: 'string',
  })
  ACTIONDATE?: string;

  @property({
    type: 'string',
  })
  EXCUSE_OTHER?: string;

  @property({
    type: 'string',
  })
  LOANSTARTDATE?: string;

  @property({
    type: 'string',
  })
  FIRSTREPAYMENTDATE?: string;

  @property({
    type: 'string',
  })
  NEXTDUEDATE?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tqall>) {
    super(data);
  }
}

export interface TqallRelations {
  // describe navigational properties here
}

export type TqallWithRelations = Tqall & TqallRelations;
