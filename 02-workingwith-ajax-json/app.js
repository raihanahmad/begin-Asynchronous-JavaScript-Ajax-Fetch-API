// FOR 1 CUSTOMER
document.getElementById('btn-customer').addEventListener('click', loadCustomer);

// FOR SOME CUSTOMERS
document.getElementById('btn-customers').addEventListener('click', loadCustomers);

// LOAD CUSTOMER FUNCTION
function loadCustomer(e) {
  // CREATE A NEW OBJECT
  const xhr = new XMLHttpRequest();

  // FETCH THE CUSTOMER FROM LOCAL FILE
  xhr.open('GET', 'customer.json', true);

  // ONLOAD DATA AND WORK ON IT
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const customerObject = `
        <ul>
          <li>Serial: ${customer.num}</li>
          <li>Name: ${customer.name}</li>
          <li>Number: ${customer.number}</li>
          <li>Home: ${customer.home}</li>
          <li>Passion: ${customer.passion}</li>
        </ul>
      `;

      document.getElementById('customer').innerHTML = customerObject;
    }
  }

  // SEND
  xhr.send();
}



// LOAD CUSTOMERs FUNCTION
function loadCustomers() {
  // CREATE A NEW OBJECT
  const xhr = new XMLHttpRequest();

  // FETCH THE CUSTOMER FROM LOCAL FILE
  xhr.open('GET', 'customers.json', true);

  // ONLOAD DATA AND WORK ON IT
  xhr.onload = function () {

    if (this.status === 200) {

      const customers = JSON.parse(this.responseText);

      let customerObject = '';

      customers.forEach(function (customer) {
        customerObject += `
        <ul>
          <li>Serial: ${customer.num}</li>
          <li>Name: ${customer.name}</li>
          <li>Number: ${customer.number}</li>
          <li>Home: ${customer.home}</li>
          <li>Passion: ${customer.passion}</li>
        </ul>
      `;

      });

      document.getElementById('customers').innerHTML = customerObject;
    }
  }

  // SEND
  xhr.send();
}