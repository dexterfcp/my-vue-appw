<template>
    <div class="payment-form">
      <h2>Enter your credit card details</h2>
      <form @submit.prevent="submitPayment">
        <div>
          <span v-if="errors.cardNumber">{{ errors.cardNumber }}</span>
          <label for="cardNumber">Card Number</label>
          <input
            type="text"
            v-model="cardNumber"
            @input="detectCardType"
            id="cardNumber"
            required
          />
          <img v-if="cardLogo" :src="cardLogo" alt="Card Logo" class="card-logo" />
        </div>
        <div>
          <span v-if="errors.expiryDate">{{ errors.expiryDate }}</span>
          <label for="expiryDate">Expiry Date</label>
          <input type="text" v-model="expiryDate" id="expiryDate" required/>
        </div>
        <div>
          <span v-if="errors.cvv">{{ errors.cvv }}</span>
          <label for="cvv">CVV</label>
          <input type="text" v-model="cvv" id="cvv" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import visaLogo from '@/assets/visa.png';
  import mastercardLogo from '@/assets/mastercard.png';
  
  export default {
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardLogo: null,
        errors: {
          cardNumber: '',
          expiryDate: '',
          cvv: ''
        }
      };
    },
    methods: {
      submitPayment() {
        const paymentData = {
          cardNumber: this.cardNumber,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
        };
        this.validateExpiryDate();
        this.validateCardNumber();
        this.validateCvv();
        if (this.errors.cardNumber || this.errors.expiryDate || this.errors.cvv) {
          return;
        }
        this.$store.dispatch('payment/processPayment', paymentData);
        this.$router.push('/summary');
      },
      detectCardType() {
        const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
        const mastercardRegex = /^5[1-5][0-9]{14}$/;
  
        if (visaRegex.test(this.cardNumber)) {
          this.cardLogo = visaLogo;
        } else if (mastercardRegex.test(this.cardNumber)) {
          this.cardLogo = mastercardLogo;
        } else {
          this.cardLogo = null;
        }
      },
      validateCardNumber() {
        const cardNumberRegex = /^\d{16}$/;
        if (!cardNumberRegex.test(this.cardNumber)) {
          this.errors.cardNumber = 'Please enter a valid card number.';
        } else {
          this.errors.cardNumber = '';
        }
      },
      validateCvv() {
        const cvvRegex = /^\d{3}$/;
        if (!cvvRegex.test(this.cvv)) {
          this.errors.cvv = 'Please enter a valid CVV.';
        } else {
          this.errors.cvv = '';
        }
      },
      validateExpiryDate() {
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        const [month, year] = this.expiryDate.split('/');
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;

        if (!expiryDateRegex.test(this.expiryDate) || 
            (year < currentYear || (year == currentYear && month < currentMonth))) {
          this.errors.expiryDate = 'Please enter a valid expiry date.';
        } else {
          this.errors.expiryDate = '';
        }

      },
    },
  };
  </script>
  
  <style scoped>
  .payment-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
  }
  
  span {
    color: red;
    font-size: 12px;
  }
  .card-logo {
    width: 50px;
    height: auto;
    margin-top: 10px;
  }
  </style>
  