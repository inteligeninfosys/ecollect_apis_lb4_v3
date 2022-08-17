import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    strict: true,
    oracle: {
      schema: 'ecol',
      table: "TBLREPOSSESSIONS"
    }
  }
})
export class Tblrepossessions extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  repoid?: string;

  @property({
    type: 'string',
  })
  custnumber?: string;

  @property({
    type: 'string',
  })
  accnumber?: string;

  @property({
    type: 'string',
  })
  custname?: string;

  @property({
    type: 'string',
  })
  emailaddress?: string;

  @property({
    type: 'string',
  })
  celnumber?: string;

  @property({
    type: 'string',
  })
  postaladdress?: string;

  @property({
    type: 'string',
  })
  place?: string;

  @property({
    type: 'string',
  })
  arocode?: string;

  @property({
    type: 'string',
  })
  rrocode?: string;

  @property({
    type: 'string',
  })
  branchcode?: string;

  @property({
    type: 'string',
  })
  branchname?: string;

  @property({
    type: 'string',
  })
  region?: string;

  @property({
    type: 'number',
  })
  daysinarr?: number;

  @property({
    type: 'number',
  })
  assetfinancebalance?: number;

  @property({
    type: 'number',
  })
  ipfbalance?: number;

  @property({
    type: 'number',
  })
  odbalance?: number;

  @property({
    type: 'number',
  })
  otherbalances?: number;

  @property({
    type: 'number',
  })
  totalamount?: number;

  @property({
    type: 'number',
  })
  nextscheduleamount?: number;

  @property({
    type: 'string',
  })
  nextscheduledate?: string;

  @property({
    type: 'string',
  })
  trackingcompany?: string;

  @property({
    type: 'string',
  })
  nationalid?: string;

  @property({
    type: 'string',
  })
  purposeofvehicle?: string;

  @property({
    type: 'string',
  })
  vehiclemake?: string;

  @property({
    type: 'string',
  })
  vehiclemodel?: string;

  @property({
    type: 'string',
  })
  dateofrequest?: string;

  @property({
    type: 'string',
  })
  chassisnumber?: string;

  @property({
    type: 'string',
  })
  engineno?: string;

  @property({
    type: 'string',
  })
  vehicleregno?: string;

  @property({
    type: 'string',
  })
  typeofbusiness?: string;

  @property({
    type: 'string',
  })
  guarantors?: string;

  @property({
    type: 'string',
  })
  guarantorsaddress?: string;

  @property({
    type: 'string',
  })
  anyotherinfo?: string;

  @property({
    type: 'string',
  })
  approval?: string;

  @property({
    type: 'string',
  })
  dateofapproval?: string;

  @property({
    type: 'string',
  })
  approvedby?: string;

  @property({
    type: 'string',
  })
  approvalcomment?: string;

  @property({
    type: 'string',
  })
  auctioneercontact?: string;

  @property({
    type: 'string',
  })
  auctioneeremail?: string;

  @property({
    type: 'string',
  })
  auctioneername?: string;

  @property({
    type: 'string',
  })
  auctioneertel?: string;

  @property({
    type: 'string',
  })
  daterepoissued?: string;

  @property({
    type: 'string',
  })
  expirydate?: string;

  @property({
    type: 'string',
  })
  repossessionorderform?: string;

  @property({
    type: 'string',
  })
  ext?: string;

  @property({
    type: 'string',
  })
  extdate?: string;

  @property({
    type: 'number',
  })
  noofdaysext?: number;

  @property({
    type: 'string',
  })
  owner?: string;

  @property({
    type: 'date',
  })
  stagedate?: Date;

  @property({
    type: 'string',
  })
  repostatus?: string;

  @property({
    type: 'string',
  })
  repostatus2?: string;

  @property({
    type: 'string',
  })
  serviceprovider?: string;

  @property({
    type: 'string',
  })
  daterepossessed?: string;

  @property({
    type: 'string',
  })
  datecancelled?: string;

  @property({
    type: 'string',
  })
  cancelcomment?: string;

  @property({
    type: 'string',
  })
  yardname?: string;

  @property({
    type: 'string',
  })
  yardentrydate?: string;

  @property({
    type: 'string',
  })
  yardexitdate?: string;

  @property({
    type: 'string',
  })
  yardbookingform?: string;

  @property({
    type: 'number',
  })
  yardcharges?: number;

  @property({
    type: 'string',
  })
  iscaseactive?: string;

  @property({
    type: 'string',
  })
  demand?: string;

  @property({
    type: 'string',
  })
  datebookedinyard?: string;

  @property({
    type: 'string',
  })
  bookingform?: string;

  @property({
    type: 'string',
  })
  storageyard?: string;

  @property({
    type: 'string',
  })
  vehiclereleased?: string;

  @property({
    type: 'string',
  })
  datereleased?: string;

  @property({
    type: 'string',
  })
  followupcomment?: string;

  @property({
    type: 'string',
  })
  releaseform?: string;

  @property({
    type: 'string',
  })
  valuation_status?: string;

  @property({
    type: 'string',
  })
  valuation_sp?: string;

  @property({
    type: 'string',
  })
  valuation_dateassigned?: string;

  @property({
    type: 'string',
  })
  valuation_duedate?: string;

  @property({
    type: 'string',
  })
  valuation_followup?: string;

  @property({
    type: 'string',
  })
  valuation_report?: string;

  @property({
    type: 'number',
  })
  valuation_omv?: number;

  @property({
    type: 'number',
  })
  valuation_fsv?: number;

  @property({
    type: 'boolean',
  })
  valuation_complete?: boolean;

  @property({
    type: 'string',
  })
  marketer_status?: string;

  @property({
    type: 'string',
  })
  marketer_sp?: string;

  @property({
    type: 'string',
  })
  marketer_datecompleted?: string;

  @property({
    type: 'string',
  })
  marketer_dateassigned?: string;

  @property({
    type: 'boolean',
  })
  marketer_complete?: boolean;

  @property({
    type: 'string',
  })
  yard_status?: string;

  @property({
    type: 'string',
  })
  yard_followup?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tblrepossessions>) {
    super(data);
  }
}

export interface TblrepossessionsRelations {
  // describe navigational properties here
}

export type TblrepossessionsWithRelations = Tblrepossessions & TblrepossessionsRelations;
