import { Time } from "@angular/common";
import { Suppiler } from "./suppliersList";

export class RFQ {
    RFQreference: string;
    RFQname: string;
    RFQCategory : string;
    RFQsupplier : Suppiler[];
    RFQstartDate : string;
    RFQendDate : string;
    RFQvalidity  :string;
    DeliveryDateAndTime : string ;
    // DeliveryTime:string;
    Deliveryplace :string;
    PaymentsTerms : string;
    RoundName: string;
    items : string[]
    // itemDescription : string;
    // itemQuantity:string;
    // itemUnit : string;
    emailSubject : string;
    emailText : string;
    sendingDate:string;
    notes:string;
    // file?: File | File[];
    //  //   uploadfiles:File;
    files : string[]

constructor(
    RFQreference: string,
    RFQname: string,
    RFQCategory: string,
    RFQsupplier: Suppiler[],
    RFQstartDate: string,
    RFQendDate: string,
    RFQvalidity: string,
    DeliveryDateAndTime: string,
  //  // DeliveryTime: string,
    Deliveryplace: string,
    PaymentsTerms: string,
    RoundName: string,
    items:string[],
  //   // itemDescription: string,
  //   // itemQuantity: string,
  //   // itemUnit: string,
    emailSubject: string,
    emailText: string,
    sendingDate: string,
    notes: string,
  //   file?: File | File[]
    files : string[]

  ) {
    this.RFQreference = RFQreference;
    this.RFQname = RFQname;
    this.RFQCategory = RFQCategory;
    this.RFQsupplier = RFQsupplier;
    this.RFQstartDate = RFQstartDate;
    this.RFQendDate = RFQendDate;
    this.RFQvalidity = RFQvalidity;
      this.DeliveryDateAndTime = DeliveryDateAndTime;
    // //this.DeliveryTime = DeliveryTime;
    this.Deliveryplace = Deliveryplace;
    this.PaymentsTerms = PaymentsTerms;
    this.RoundName = RoundName;
    this.items = items ;
    // this.itemDescription = itemDescription;
    // this.itemQuantity = itemQuantity;
    // this.itemUnit = itemUnit;
    this.emailSubject = emailSubject;
    this.emailText = emailText;
    this.sendingDate = sendingDate;
    this.notes = notes;
    // this.file = file;
    this.files = files ;
  
  }
}