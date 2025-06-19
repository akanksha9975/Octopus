import moment from 'moment'

export default function (
   { name,
      address,
      phone,
      email,
      dueDate,
      date,
      id,
      notes,
      subTotal,
      type,
      vat,
      total,
      items,
      status,
      totalAmountReceived,
      balanceDue,
      company,
   }) {
    const today = new Date();
return `<!DOCTYPE html>
<html>
<head>
<style>

body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    width: 1000px;
    margin: 0px auto;
    }

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td, table th {
  border: 1px solid rgb(247, 247, 247);
  padding: 15px;
}

table tr:nth-child(even){background-color: #f8f8f8;}

table tr:hover {background-color: rgb(243, 243, 243);}

table th {
  padding-top: 11.9px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #FFFFFF;
  color: rgb(78, 78, 78);
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

}
.address {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    line-height: 12px;
    font-size: 15px;
    margin-top: -10px;

}

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
}

.status {
    text-align: right;
    margin-top: -200px;
}
.receipt-id {
    text-align: right;
}

.title {
    font-weight: 100px;
    text-transform: uppercase;
    color: gray;
    letter-spacing: 2px;
    font-size: 15px;
}

.summary {
    margin-top: 2px;
    margin-right: 0px;
    margin-left: 55%;
    margin-bottom: 50px;
}

img {
    width: 150px;
    padding-top: 100px;
}

</style>
</head>
<body>





<section  class="header">
        <div>
           <img src="https://i.postimg.cc/8PyXvBpC/Salesforce-com-logo-svg.png" />
        </div>
</section>
<section class="address">
    <div class="contact">




          <div>
          <h4>SALESFORCE</h4>
          <p>xyz@salesforce.com</p>
          <p>+91 123456789</p>
          <p>xyz street azamgarh</p>
          <p>U.P. India</p>
      </div>




      <div>
          <p class="title">Bill to:</p>
          <h4>Akanksha</h4>
          <p>xyz@gmail.com</p>
          <p>+91 123456789</p>
          <p>abc street gorakhpur</p>
          <p>U.P. India</p>
      </div>
    </div>

    <div class="status">
        <div class="receipt-id">
            <h1>Receipt</h1>
            <p>#009330</p>
        </div>
        <p class="title">Status</p>
        <h3>Paid</h3>
        <p class="title">Date</p>
        <p>31st May, 2025</p>
        <p class="title">Amount</p>
        <h3>Rs84.00</h3>
    </div>


</section>

<table>
  <tr>
    <th>Description</th>
    <th>Quantity</th>
    <th>Price</th>
    <th style="text-align: center">Amount</th>
  </tr>
  <tr>
    <td>hfhsjfdhskjdhfkj </td>
    <td>1</td>
    <td>84.00</td>
    <td style="text-align: center">84.00</td>
  </tr>

</table>

<section class="summary">
    <table>
        <tr>
          <th>Summary</th>
          <th></th>
        </tr>
        <tr>
          <td>Total</td>
          <td style="text-align: center">Rs.84.00</td>
        </tr>

        <tr>
            <td>Payment made</td>
            <td style="text-align: center">Rs.84.00</td>
          </tr>

        <tr>
            <td>Balance</td>
            <td ><h3 style="line-height: 5px; text-align: center">Rs.0.00</h3></td>
          </tr>
        
      </table>
</section>
<div>
    <hr>
    <h4>Note</h4>
    <p>This payment is free</p>
</div>
</body>
</html>
`
;
};