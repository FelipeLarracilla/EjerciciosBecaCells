const listId = document.querySelectorAll("li");


listId.forEach(element => {
    element.addEventListener("click", () => {
        const countryId = element.getAttribute('id');
        const countryCode = element.getAttribute('data-id');
        const dialCode = element.getAttribute('data-dial-code');
        alert(`ID elemento: ${countryId}\nISO ID: ${countryCode}\nDial Code: ${dialCode}`);

    });
});


