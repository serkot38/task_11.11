
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;

};

