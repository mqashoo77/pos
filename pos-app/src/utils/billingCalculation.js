

const BillingCalculation = (order) => {
   
    let subTotal = 0;
    let tax = 0;
    let total = 0;
    order.map( item =>{

        subTotal += item.productPrice * item.productCount
        tax += item.productTax * item.productCount
    } )
    total = subTotal + tax;

    let bill = [subTotal,tax,total]
    return bill
  };

export default BillingCalculation;