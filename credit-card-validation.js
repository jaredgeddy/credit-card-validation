$( document ).ready(function() {

  //When review order button is pressed in guest checkout, run this script
  $('#review_order_button').click(function (event) {

    //just some console messages for testing purposes
    console.log("review was pressed.");

    //Go get the credit card type and number
    myCardNo = document.getElementById('order_cc_number').value;
    myCardType = document.getElementById('order_cc_type').value;

    //Run card number and card type against credit card validation javascript
    if (checkCreditCard (myCardNo,myCardType)) {
     //alert ("Credit card has a valid format");
      document.getElementById('cc_type_label').innerHTML = 'Card Type';
      document.getElementById('cc_number_label').innerHTML = 'Card Number';
      document.getElementById('order_cc_number').style.borderColor ='#57BE11';
      console.log("it's a card");
    } 
    else {
      //alert (ccErrors[ccErrorNo]);
      document.getElementById('cc_number_label').innerHTML = 'Card Number <strong style="color:#F90808;">(' + ccErrors[ccErrorNo] + ')</strong>'; 
      document.getElementById('order_cc_number').style.borderColor ='#F90808';
      console.log("not a card");
      event.preventDefault(); // Prevent link from following its href
    };

    //Get todays date and check it against the year of the credit card exp. date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var cardMonth = document.getElementById('order_cc_expiration_month').value;
    var cardYear = document.getElementById('order_cc_expiration_year').value;

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm+'/'+yyyy;

    if (cardYear==yyyy) {
      if (cardMonth>=mm){
        //alert("Valid Date")
        document.getElementById('cc_expiration_date_label').innerHTML = 'Expiration Date';
        document.getElementById('order_cc_expiration_month').style.borderColor ='#57BE11';
      }
      else {
        document.getElementById('cc_expiration_date_label').innerHTML = 'Expiration Date <strong style="color:#F90808;">(Invalid Expiration Date)</strong>';
        document.getElementById('order_cc_expiration_month').style.borderColor ='#F90808';
        event.preventDefault(); // Prevent link from following its href     
      }
    }
    else {
      if (cardYear>yyyy){
        //alert("Valid Date");
        document.getElementById('cc_expiration_date_label').innerHTML = 'Expiration Date';
        document.getElementById('order_cc_expiration_month').style.borderColor ='#57BE11';
      }
      else {
        document.getElementById('order_cc_expiration_year').style.borderColor ='#F90808';
        event.preventDefault(); // Prevent link from following its href
      }
    }


    console.log(today);
    console.log(cardYear); 
     
  });


});