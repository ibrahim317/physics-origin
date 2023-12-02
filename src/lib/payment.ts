import axios from "axios";
import { abusiveexperiencereport_v1 } from "googleapis";

// const auth = async() =>{}

const auth = async () => {
  try {
    const auth_token = await axios.post(
      "https://accept.paymob.com/api/auth/tokens",
      {
        api_key: process.env.NEXT_PUBLIC_PAYMOB_API,
      }
    );
    return auth_token;
  } catch (err) {
    console.log("error from auth");
    throw err;
  }
};
const order_id = async (auth_token: any) => {
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
    return order_id;
  } catch (err) {
    console.log("error from order_id");
    throw err;
  }
};
const payment_token = async (auth_token: any, order_id: any) => {
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
    return pay_api;
  } catch (err) {
    console.log("error from payment_key");
    throw err;
  }
};
const invoice = async (auth: any) => {
  const re = await axios.post(
    "https://accept.paymobsolutions.com/api/ecommerce/orders",
    {
      auth_token: auth,
      api_source: "INVOICE",
      amount_cents: "4000",
      currency: "EGP",
      shipping_data: {
        first_name: "Test",
        last_name: "Account",
        phone_number: "01010101010",
        email: "test@account.com",
      },
      integrations: [4378206],

      items: [
        {
          name: "ASC1525",
          amount_cents: "4000",
          quantity: "1",
          description: "Smart Watch",
        },
      ],

      delivery_needed: "false",
    }
  );
  return re;
};
const payment = async (price: any) => {
  const auth_token = await auth();
  const a = await invoice(auth_token.data.token);
  console.log(a.data.url);
  // const order_id_t = order_id(auth_token);
  // const pay_api = payment_token(auth_token, order_id_t);
};
export default payment;
