class MomoPaymentAdapter {
  constructor(momoPayment) {
    this.momoPayment = momoPayment;
  }
  payWithVisa(visaPayment) {
    const convertedPayment = this.convertToVisaPayment(this.momoPayment);
    visaPayment.pay(convertedPayment);
  }
  convertToVisaPayment(momoPayment) {
    const conversionRate = 25000;
    const visaAmount = momoPayment.amount / conversionRate;
    const visaPayment = {
      cardNumber: momoPayment.cardNumber,
      expireDate: momoPayment.expireDate,
      cvv: momoPayment.cvv,
      amount: visaAmount,
    };
    return visaPayment;
  }
}

class VisaPayment {
  pay(payment) {
    console.log(`Amount: ${payment.amount}, card: ${payment.cardNumber}`);
  }
}

class MomoPayment {
  constructor(cardNumber, expireDate, cvv, visaAmount) {
    this.cardNumber = cardNumber;
    this.expireDate = expireDate;
    this.cvv = cvv;
    this.amount = visaAmount;
  }
}

const momoPayment = new MomoPayment("123456789", "12/27", "123", 250000);
const momoAdapter = new MomoPaymentAdapter(momoPayment);
const visaPayment = new VisaPayment();

momoAdapter.payWithVisa(visaPayment);
