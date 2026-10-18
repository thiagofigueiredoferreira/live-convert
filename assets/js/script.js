//Cotação de moedas do dia.
const USD = 5.07
const EUR = 5.69
const GBP = 6.73

// Obtendo os elementos dos formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer ")

// Manipulando o input amount para receber somente números. 
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "") // Pega o valor digitado e retorna somente numeros.
})

// Capturando o evento de submit (enviar) do formuário.
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€") 
            break
        case "GBP": 
        convertCurrency(amount.value, GBP, "£")  
            break
    }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol){
try {
    //Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result")
    
} catch (error) {
    // Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
}

}