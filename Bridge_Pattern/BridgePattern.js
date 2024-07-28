class PaymentProcess {
  payment(amount) {
    console.log(`Pay ${amount} success`);
  }
}

class VisaPaymentProcess extends PaymentProcess {
  constructor(cardNumber, expireDate, cvv) {
    super();
    this.cardNumber = cardNumber;
    this.expireDate = expireDate;
    this.cvv = cvv;
  }
  pay(amount) {
    console.log(`Pay ${amount} by card: ${this.cardNumber}`);
  }
}

class MomoPaymentProcess extends PaymentProcess {
  constructor(phoneNumber) {
    super();
    this.phoneNumber = phoneNumber;
  }
  pay(amount) {
    console.log(`Pay ${amount} by card: ${this.phoneNumber}`);
  }
}

class MemberRegistration {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  register() {
    const amount = 100;
    this.paymentProcessor.pay(amount);
    console.log("Register success");
  }
}

const visaPaymentProcess = new VisaPaymentProcess("123456789", "12/27", "123");
const memberShip1 = new MemberRegistration(visaPaymentProcess);
memberShip1.register();

const momoPaymentProcess = new MomoPaymentProcess("091234567");
const memberShip2 = new MemberRegistration(momoPaymentProcess);
memberShip2.register();
