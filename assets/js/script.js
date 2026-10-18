const amount = document.getElementById("amount")

// Manipulando o input amount para receber somente números. 
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "") // Pega o valor digitado e retorna somente numeros.
})
