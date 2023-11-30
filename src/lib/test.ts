import axios from "axios";
const asd = async () => {
  try {
    const auth_token = await axios.post(
      "https://accept.paymob.com/api/auth/tokens",
      {
        api_key: process.env.PAYMOB_API,
      }
    );
    try {
      const order_id = await axios.post(
        "https://accept.paymob.com/api/ecommerce/orders",
        {
          auth_token: auth_token.data.token,
          delivery_needed: "false",
          amount_cents: "100",
          currency: "EGP",
          items: [],
        }
      );

      try {
        const pay_api = await axios.post(
          "https://accept.paymob.com/api/acceptance/payment_keys",
          {
            auth_token: auth_token.data.token,
            amount_cents: "100",
            expiration: 3600,
            order_id: order_id.data.id,
            billing_data: {
              apartment: "803",
              email: "claudette09@exa.com",
              floor: "42",
              first_name: "Clifford",
              street: "Ethan Land",
              building: "8028",
              phone_number: "+86(8)9135210487",
              shipping_method: "PKG",
              postal_code: "01898",
              city: "Jaskolskiburgh",
              country: "CR",
              last_name: "Nicolas",
              state: "Utah",
            },
            currency: "EGP",
            integration_id: 4378206,
          }
        );
        console.log(pay_api.data);
        const res = await axios.post(
          "https://accept.paymob.com/api/acceptance/payments/pay",
          {
            source: {
              identifier: "01010101010",
              subtype: "WALLET",
            },
            payment_token: pay_api.data.token, // token obtained in step 3
          }
        );
        return await res.data.redirect_url;
      } catch (err) {
        console.log("Error from pay");
        throw err;
      }
    } catch (err) {
      console.log("Error from order");
      throw err;
    }
  } catch (err) {
    console.log("Error from auth");
    throw err;
  }
  // const re = await axios.post(
  //   "https://atfawry.fawrystaging.com/ECommerceWeb/api/payments/charge",
  //   {
  //     merchantCode: "1tSa6uxz2nTwlaAmt38enA==",
  //     merchantRefNum: "2312465464",
  //     customerProfileId: "777777",
  //     customerName: "example",
  //     customerMobile: "01234567891",
  //     customerEmail: "example@gmail.com",
  //     amount: 580.55,
  //     currencyCode: "EGP",
  //     language: "en-gb",
  //     chargeItems: [
  //       {
  //         itemId: "897fa8e81be26df25db592e81c31c",
  //         description: "Item Descriptoin",
  //         price: 580.55,
  //         quantity: "1",
  //       },
  //     ],
  //     signature:
  //       "2ca4c078ab0d4c50ba90e31b3b0339d4d4ae5b32f97092dd9e9c07888c7eef36",
  //     paymentMethod: "MWALLET",
  //     description: "Example Description",
  //   }
  // );
  // console.log(re);
};
export default asd;
