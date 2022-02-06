import { PaymentFrequency } from "../../gen";
import l, { Localisation } from "../../localisation";
let $l: Localisation;
l.subscribe(v => $l = v);

export function getEuro(integer: number): string {
  if(integer) {
      let temp = integer.toString()
      temp = temp.substring(0, temp.length-2) + ',' + temp.substring(temp.length-2, temp.length)
      return temp + '€';
  }
  return '';
}

export function getFrequency(frequency: PaymentFrequency): string {
  if(frequency) {
    switch(frequency) {
      case PaymentFrequency.MONTHLY:
        return $l.payment.monthly;
      case PaymentFrequency.QUARTERLY:
        return $l.payment.quarterly;
      case PaymentFrequency.YEARLY:
        return $l.payment.yearly;
    }
  }
  return '';
}