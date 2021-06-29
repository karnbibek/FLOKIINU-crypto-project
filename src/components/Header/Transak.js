import transakSDK from '@transak/transak-sdk'
 
let transak = new transakSDK({
    apiKey: 'd31abb60-60d5-464a-a6ca-996bd56a41f3',  // Your API Key (Required)
    environment: 'STAGING', // STAGING/PRODUCTION (Required)
    defaultCryptoCurrency: 'BNB',
    walletAddress: '', // Your customer wallet address
    themeColor: '000000', // App theme color in hex
    email: '', // Your customer email address (Optional)
    redirectURL: '',
    hostURL: window.location.origin, // Required field
    widgetHeight: '550px',
    widgetWidth: '450px'
});
 
transak.init();
 
// To get all the events
transak.on(transak.ALL_EVENTS, (data) => {
        console.log(data)
});
 
// This will trigger when the user closed the widget
transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
    transak.close();
});
 
// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    console.log(orderData);
    transak.close();
});
