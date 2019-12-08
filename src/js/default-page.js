console.log('Default Page loaded!');

const hash = window.location.hash.split('?')[0];
const title = hash.replace('#', '').split('-').join(' ');
const page = window.location.hash.split('?')[1].split('=')[1];
// const body = document.querySelector('body');

const h2 = document.querySelector('.default-page .call-to-action__title');
h2.innerHTML = title;
const pageCopy = document.querySelector('.default-page .page__copy');
pageCopy.innerHTML = '';

// window.onload = () => {
//   console.log('window loaded');
//   debugger;
// };

const buildPayPalBtnString = () => {
  const payPalContainer = document.createElement('div');
  payPalContainer.id = 'paypal-button-container';
  const payPalSrcScript = document.createElement('script');
  payPalSrcScript.src = 'https://www.paypal.com/sdk/js?client-id=AUDV8H40Tek4B5fjdvmKObyYRD_pdGVmP-3ZQ3Eg5C2chOVfz6Bkh5KEGont_y7bH2FdpKkL9_DTWwRz&amp;currency=USD';
  payPalSrcScript.setAttribute('data-sdk-integration-source', 'button-factory');
  const payPalScript = document.createElement('script');
  payPalScript.innerHTML = `
    paypal.Buttons({
      style: {
          shape: 'pill',
          color: 'blue',
          layout: 'vertical',
          label: 'paypal',
      },
      createOrder: function(data, actions) {
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '2000'
                  }
              }]
          });
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
              alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
      }
    }).render('#paypal-button-container');
  `;
  // const frag = document.createRange().createContextualFragment(script);
  setTimeout(() => {
    // body.appendChild(payPalContainer);
    // setTimeout(() => {
    //   debugger
    //   body.appendChild(payPalSrcScript);
    // }, 0);
    setTimeout(() => {
      pageCopy.appendChild(payPalScript);
    }, 1000);
  }, 0);
};

fetch(`http://wp.infinityspine.com/wp-json/wp/v2/pages/${page}`)
  .then(response => response.json())
  .then((res) => {
    // pageCopy.innerHTML = res.content.rendered;
    const frag = document.createRange().createContextualFragment(res.content.rendered);
    pageCopy.innerHTML = '';
    pageCopy.appendChild(frag);
    buildPayPalBtnString();
  });
