//var proceedButton = document.getElementById("proceedButton");
//proceedButton.addEventListener("click", updateTotal());


function updateTotal() {
    var subtotal = 0;
    var discount = 0;
    var taxRate = 0.07;
    var taxes = 0;
    var total = 0;
    var itemsSelected = 0;
    var itemOne = document.getElementById("item1");
    var itemTwo = document.getElementById("item2");
    var itemThree = document.getElementById("item3");
    var deliveryMethod = document.getElementById("shippingType");
    if (itemOne.checked) {
        subtotal += 250.00;
        itemsSelected += 1;
    }
    if (itemTwo.checked) {
        subtotal += 150.99;
        itemsSelected += 1;
    }
    if (itemThree.checked) {
        subtotal += 437.50;
        itemsSelected += 1;
    }

    // if (subtotal == 0) {
    //     alert("Please select an item before updating cart.");
    //     return;
    // }
    if (itemsSelected == 2) {
        discount = subtotal * .10;
    }
    else if (itemsSelected == 3) {
        discount = subtotal * .25;
    }
    subtotal -= discount;
    taxes = subtotal * taxRate;
    total = subtotal + taxes;
    if (subtotal != 0) {

        switch (deliveryMethod.selectedIndex) {
            case (1):
                {
                    total += 2.99
                    break;;
                }
            case (2):
                {
                    total += 8.99
                    break;
                }
            default:
        }
    }

    // Calculate discount //
    resultCell = document.getElementById("discountPercent");
    if (itemsSelected == 2)
    {

        resultCell.innerText = "Recieve 10% off!!";
    }
    else if (itemsSelected == 3)
    {
        resultCell.innerText = "Recieve 25% off!!";
    }
    else
    {
        resultCell.innerText = "";
    }
    
    document.getElementById("discount").value = USDollar.format(discount);
    document.getElementById("subTotal").value = USDollar.format(subtotal);
    document.getElementById("taxes").value = USDollar.format(taxes);
    document.getElementById("total").value = USDollar.format(total);

}

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});



var navOpen = false;

function toggleNav(){
    if (!navOpen)
        openNav();
    else
        closeNav()
}


/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "15%";
    document.getElementById("myMenu").style.marginLeft = "15%";
    document.getElementById("myMain").style.marginLeft = "15%";
    navOpen = true;
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myMenu").style.marginLeft = "0";
    document.getElementById("myMain").style.marginLeft = "0%";
    navOpen = false;
  }