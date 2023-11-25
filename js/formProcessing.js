//var proceedButton = document.getElementById("proceedButton");
//proceedButton.addEventListener("click", updateTotal());


function updateTotal() {
    var subtotal = 0;
    var discount = 0;
    var taxRate = 0.07;
    var taxes = 0;
    var total = 0;
    var itemOne = document.getElementById("item1");
    var itemTwo = document.getElementById("item2");
    var itemThree = document.getElementById("item3");
    var deliveryMethod = document.getElementById("shippingType");
    if (itemOne.checked) {
        subtotal += 250.00;
    }
    if (itemTwo.checked) {
        subtotal += 150.99;
    }
    if (itemThree.checked) {
        subtotal += 437.50;
    }

    
    
    if (subtotal != 0)
    {

        switch (deliveryMethod.selectedIndex) {
            case (1):
                {
                    subtotal += 2.99
                    break;;
                }
                case (2):
                    {
                        subtotal += 8.99
                        break;
                    }
                    default:
                    }
    }
    
        
    document.getElementById("subTotal").value = USDollar.format(subtotal);
    document.getElementById("discount").value = USDollar.format(discount);
    taxes = subtotal * taxRate;
    document.getElementById("taxes").value = USDollar.format(taxes);
    total = taxes + subtotal;

    document.getElementById("total").value = USDollar.format(total);

}

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});