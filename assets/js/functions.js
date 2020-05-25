function openSlideMenu() {
    document.getElementById('side-menu').style.width='250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width='0';
}   

function clearContents(element) {
    element.value = "";
}

function removeOpacity(element) {
    element.style.opacity = "1";
    element.style.color = "#000";
}

function showRightOption() {
    var emailDiv = document.getElementById('emailDiv');
    var phoneDiv = document.getElementById('phoneDiv');
    var emailBox = document.getElementById('email');
    var phoneBox = document.getElementById('phone');


    if (document.forms[0].optionContact.options[document.forms[0].optionContact.selectedIndex].value == "email") {
        phoneDiv.style.color ="#D3D3D3";
        phoneBox.value =""; 
        phoneBox.style.background = "#F0F3F8";
        phoneBox.style.opacity = "0.5";
        phoneBox.readOnly = true;

        emailBox.readOnly = false;
        emailBox.style.background = "#fff";
        emailBox.style.opacity = 1;
        emailDiv.style.color = "#000";

    }
    else if (document.forms[0].optionContact.options[document.forms[0].optionContact.selectedIndex].value == "phone") {
        emailDiv.style.color ="#D3D3D3";
        emailBox.value ="";
        emailBox.style.background = "#F0F3F8";
        emailBox.style.opacity = "0.5";
        emailBox.readOnly = true;

        phoneBox.readOnly = false;
        phoneBox.style.background = "#fff";
        phoneBox.style.opacity = 1;
        phoneDiv.style.color = "#000";
    }

    else if (document.forms[0].optionContact.options[document.forms[0].optionContact.selectedIndex].value == "email_phone") {
        emailBox.readOnly = false;
        emailBox.style.background = "#fff";
        emailBox.style.opacity = 1;
        emailDiv.style.color = "#000";

        phoneBox.readOnly = false;
        phoneBox.style.background = "#fff";
        phoneBox.style.opacity = 1;
        phoneDiv.style.color = "#000";
    }
    
    else {
        emailDiv.style.color ="#D3D3D3";
        emailBox.readOnly = true;
        emailBox.value ="";
        emailBox.style.background = "#F0F3F8";
        emailBox.style.opacity = "0.5";

        phoneDiv.style.color ="#D3D3D3";
        phoneBox.readOnly = true;
        phoneBox.value =""; 
        phoneBox.style.background = "#F0F3F8";
        phoneBox.style.opacity = "0.5";
    }
}