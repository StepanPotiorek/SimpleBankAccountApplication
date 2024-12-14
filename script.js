// Logika 
class BankAccount {
    #pin 

    constructor(firstName, secondName, pin) {
        this.firstName = firstName
        this.secondName = secondName
        this.#pin = pin
        this.income = 0
        this.expense = 0
        this.movements = []
        this.currentState = 0
    }

  // Vypsání pohybů na účtu
writeOutMovements() {
    this.movements.forEach((oneMovement) => {
        account1.writeOutMovements(allMovementsResult)
        // kód, který se provede s každou položkou pole
    })
}

    // Přidává hodnotu do pole movements
    #addMovement(amount) { // upraveno
        this.movements.push(amount)
    }

    // Přidá příjem do atributu income
    createIncome(amount) {
        this.income += amount
        this.#addMovement(amount)
    }

    // Přidá výdaj do atributu expense
    createExpense(amount) {
        this.expense += amount
        this.#addMovement(amount)
    }

    // vrací stav bankovního účtu
    moneyInAccount() {
        return this.currentState = this.income + this.expense
    }

    // Kontrola, zda zadaný pin je správný
    pinChecker(userPin) {
        if (this.#pin != userPin) {
            window.location.replace("wrongpin.html")
        }
    }

    // Metoda na vypsání současného stavu
    listingCurrentState(whereToList) {
        whereToList.textContent = ""
        const newParagraph = document.createElement("p")
        newParagraph.textContent = this.moneyInAccount()
        whereToList.append(newParagraph)
    }
    // Metoda na vypsání pohybů na účtu
    writeOutMovements(whereToList) {
        whereToList.textContent = ""
        this.movements.forEach((oneMovement) => {
            const newParagraph = document.createElement("p")
            newParagraph.textContent = oneMovement
            whereToList.append(newParagraph)
        })
    }
}

// Použití
const account1 = new BankAccount("hradka", "vojta", 1234)

// Autorizace - kontrola pinu
const yourPin = parseInt(prompt("Zadejte svůj pin"))
account1.pinChecker(yourPin)

// Načtení prvků z index.html
const formMovement = document.querySelector(".form-movement form")
const movementInput = document.querySelector(".movement")
const resultSection = document.querySelector(".result")


// Formulář - pohyby na účtu
formMovement.addEventListener("submit", (event) => {
    event.preventDefault()
    const movement = parseInt(movementInput.value)

    if (movement > 0) {
        account1.createIncome(movement)
    } else {
        account1.createExpense(movement)
    }

    movementInput.value = ""
    account1.listingCurrentState(resultSection)
})

// Načtení prvků z index.html
const formMovement1 = document.querySelector(".form-movement form")
const movementInput1 = document.querySelector(".movement")
const resultSection1 = document.querySelector(".result")
const buttonMovements = document.querySelector(".btn-movements")  // přidáno
const allMovementsResult = document.querySelector(".all-movements-result")  // přidáno

// List of all movements
buttonMovements.addEventListener("click", () => {
    account1.writeOutMovements(allMovementsResult)
})

