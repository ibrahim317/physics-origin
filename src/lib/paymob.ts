import axios from "axios";

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
const invoice = async (auth: any, lecture: any) => {
  const re = await axios.post(
    "https://accept.paymobsolutions.com/api/ecommerce/orders",
    {
      auth_token: auth,
      api_source: "INVOICE",
      amount_cents: lecture.price * 100,
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
          name: lecture.name,
          amount_cents: lecture.price,
          quantity: "1",
          description: "",
        },
      ],

      delivery_needed: "false",
    }
  );
  return re;
};
const payment = async (lecture: any, user: any) => {
  const auth_token = await auth();
  const a = await invoice(auth_token.data.token, lecture);
  await axios.post("/api/buying", { lecture, user });
  window.open(a.data.url);
};
export default payment;
