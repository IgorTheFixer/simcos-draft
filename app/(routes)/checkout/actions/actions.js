"use server";

import { Client } from "square";
import { randomUUID } from "crypto";

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
});

//Making an order to send to POS
const { ordersApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: "sandbox",
})

//template
// export async function submitOrder(){
//   try {
//     const { result } = await ordersApi.createOrder({
//       order: {
//         locationId: 'L26Y90P0YB65A',
//         lineItems: [
//           {
//             name: 'Gyro Sandwich',
//             quantity: '1',
//             itemType: 'ITEM',
//             basePriceMoney: {
//               amount: 995,
//               currency: 'USD'
//             }
//           }
//         ]
//       },
//       idempotencyKey: randomUUID()
//     });
    
//     return result.order.id
//   } catch(error) {
//     console.log(error);
//   }
// }

export async function submitOrder(lineItems){
  try {
    const { result } = await ordersApi.createOrder({
      order: {
        locationId: 'L26Y90P0YB65A',
        lineItems: lineItems,
        taxes: [
          {
            name: 'Sales Tax',
            percentage: '6.25'
          }
        ],
      },
      idempotencyKey: randomUUID()
    });
    console.log(result.order)
    return result.order.id
  } catch(error) {
    console.log(error);
  }
}

export async function submitPayment(sourceId, finalAmount, lineItems) {
  try {
    // const orderId = await createOrderForChickenSub(locationId);
    const orderId = await submitOrder(lineItems)

    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId,
      amountMoney: {
        currency: "USD",
        amount: Math.round(finalAmount)
      },
      orderId
    });
    
    return result;
  } catch (error) {
    console.log(error);
  }
}