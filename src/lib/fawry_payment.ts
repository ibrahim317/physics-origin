import { sha256 } from "js-sha256";
import axios from "axios";

function FawryPayAtFawry() {
  let merchantCode = "bc52135e5a6648209599e1533de58269";
  let merchantRefNum = "23124654641";
  let merchant_cust_prof_id = "1";
  let payment_method = "PayAtFawry";
  let amount = "580.55";
  let merchant_sec_key = "259af31fc2f74453b3a55739b21ae9ef";
  let signature_body = merchantCode.concat(
    merchantCode,
    merchantRefNum,
    merchant_cust_prof_id,
    payment_method,
    amount,
    merchant_sec_key
  );
  let hash_signature = sha256(signature_body);
  axios
    .post(
      "https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/charge",
      {
        merchantCode: merchantCode,
        merchantRefNum: merchantRefNum,
        customerName: "Ahmed Ali",
        customerMobile: "01234567891",
        customerEmail: "example@gmail.com",
        customerProfileId: "777777",
        amount: "580.55",
        paymentExpiry: "1631138400000",
        currencyCode: "EGP",
        language: "en-gb",
        chargeItems: [
          {
            itemId: "897fa8e81be26df25db592e81c31c",
            description: "Item Description",
            price: "580.55",
            quantity: "1",
          },
        ],
        signature: hash_signature,
        paymentMethod: payment_method,
        description: "example description",
      }
    )
    .then((response) => {
      // Get Response Contents
      console.log(response.data);
      let type = response.data.type;
      let paymentStatus = response.data.paymentStatus;
      //
    })
    .catch((error) => {
      console.log(error);
    });
}
FawryPayAtFawry();
