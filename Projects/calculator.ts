import * as readline from "node:readline";

const actions: Record<string, () => void> = {
    "1": addition,
    "2": subtraction,
    "3": multiplication,
    "4": division
};

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function addition() {
        rl.question("What is your first number?\n", (answer) => {
        const num = Number(answer);

        if (isNaN(num)) {
            console.log("That is not a valid number please try again.")
            return addition()
        }
        
        rl.question("What is your second number?\n", (answer) => {
            const num2 = Number(answer);

            if (isNaN(num)) {
                console.log("That is not a valid number please try again.")
                return addition()            
            }

            let total = (num + num2)
            console.log(`${num} Added with ${num2} is equal to: ${total}`)

            rl.close()
        })
    })
}
function subtraction() {
        rl.question("What is your first number?\n", (answer) => {
        const num = Number(answer);

        if (isNaN(num)) {
            console.log("That is not a valid number please try again.")
            return subtraction()
        }
        
        rl.question("What is your second number?\n", (answer) => {
            const num2 = Number(answer);

            if (isNaN(num)) {
                console.log("That is not a valid number please try again.")
                return subtraction()            
            }

            let total = (num - num2)
            console.log(`${num} Subtracted by ${num2} is equal to: ${total}`)

            rl.close()
        })
    })
}
function multiplication() {
    rl.question("What is your first number?\n", (answer) => {
        const num = Number(answer);

        if (isNaN(num)) {
            console.log("That is not a valid number please try again.")
            return multiplication()
        }
        
        rl.question("What is your second number?\n", (answer) => {
            const num2 = Number(answer);

            if (isNaN(num)) {
                console.log("That is not a valid number please try again.")
                return multiplication()            
            }

            let total = (num * num2)
            console.log(`${num} Multiplied by ${num2} is equal to: ${total}`)

            rl.close()
        })
    })
}
function division() {
    rl.question("What is your first number?\n", (answer) => {
        const num = Number(answer);

        if (isNaN(num)) {
            console.log("That is not a valid number please try again.")
            return division()
        }
        
        rl.question("What is your second number?\n", (answer) => {
            const num2 = Number(answer);

            if (isNaN(num)) {
                console.log("That is not a valid number please try again.")
                return division()            
            }

            let total = (num / num2)
            console.log(`${num} Divided by ${num2} is equal to: ${total}`)

            rl.close()
        })
    })
}

function startCalculator() {
    rl.question("Welcome to the Calculator! To begun select a process:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n", (answer) => {
        const stringAns = String(answer)
        const input = actions[stringAns]

        if (input) {
            input()
        } else {
            console.log(`${stringAns} is not a valid input.\n`)
            return startCalculator()
        }
    })
}

startCalculator()