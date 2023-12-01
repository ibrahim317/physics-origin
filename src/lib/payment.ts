import axios from "axios";
const asd = async (user: any, course: any) => {
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
          amount_cents: course.price.toString(),
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
};
export default asd;
