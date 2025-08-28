

window.onload = () => {

    









   

    function validateCardDetails() {

        


        var CardNumber = document.getElementById("Card Number").value;
        var ExpirationDate = document.getElementById("Expiration Date").value;
        var CVVNumber = document.getElementById("CVV Number").value;

        if (CardNumber ==="" || ExpirationDate ==="" || CVVNumber ==="") {
            alert("Please enter all the required fields!");
            return false;            
        }
        else if (!/^\d{16}$/.test(CardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return false;
        }
        else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(ExpirationDate)) {
            alert("Please enter a valid expiration date in the format DD/MM/YYYY.");
            return false;      

    }
    else if (!/^\d{3,4}$/.test(CVVNumber)) {
        alert("Please enter a valid CVV code.");
        return false;
    }

    return true; 









    }

    

    
        
}