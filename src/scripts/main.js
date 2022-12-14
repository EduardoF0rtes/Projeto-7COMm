function errorAlert() {
    let alertError = document.querySelector('.alert-error');
    alertError.style.visibility = 'visible'

    // Definindo uma animação no alert
    alertError.classList.toggle('animate__animated');
    alertError.classList.toggle('animate__fadeIn');
    
    setTimeout(() => {
        alertError.classList.toggle('animate__fadeOut');
    }, 3000);
}

// Função para retornar um card de sucesso!
function successAlert() {
    // Alert de sucesso
    let alert = document.querySelector('.alert-success');
    alert.style.visibility = 'visible'

    // Definindo uma animação no alert
    alert.classList.toggle('animate__animated');
    alert.classList.toggle('animate__fadeIn');

    setTimeout(() => {
        alert.classList.toggle('animate__fadeOut');
    }, 3000);
}

// Função para criar a conta!
function validateForm() {
    // Pegando o valor de todos os campos
    let firstName = document.getElementById('first_name');
    let lastName  = document.getElementById('last_name');
    let email     = document.getElementById('email');
    let company   = document.getElementById('company');
    let city     = document.getElementById('city');
    let state      = document.getElementById('state');
    
    // Inserindo esses valores dentro de um obj
    const person = {
        firstName: firstName.value,
        lastName : lastName.value,
        email    : email.value,
        company  : company.value,
        city     : city.value,
        state    : state.value,
    }; // console.log(person)

    console.log(person.estado)
    
    // Validando se os campos estão preenchidos
    if(person.firstName.length == 0 ||
       person.lastName.length  == 0 ||
       person.email.length     == 0 ||
       person.company.length   == 0 ||
       person.city.length      == 0 ||
       person.state.length     == 0){
        errorAlert(); // Executa um alert negativo
        return false // Não cadastra e não recarrega a pagina!
    } else {
        successAlert(); // Executando um alert positivo
        
        return true
    }
}