import * as iostream from "node:fs"
import * as readline from "node:readline"

const options: Record<string, () => void> = {
    "1": addToFile,
    "2": removeFromFile,
}

const pathToList = './taskManager.txt'
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function addToFile() {
    rl.question("What would you like to add to the task list?\n", (answer) => {
        const strAnswer = String(answer).trim() + '\n'

        iostream.appendFile(pathToList, strAnswer, (err) => {
            if (err) {
                console.log("There has been an error with appending the data to the file: ", err)
                return
            }
            
            console.log(`"${strAnswer}" has been added to the file!`)
            rl.close()
            return
        })
    })
}

function removeFromFile() {
    rl.question("What task would you like to remove from the list?\n", (answer) => {
        const strAnswer = String(answer)

        iostream.readFile(pathToList, "utf8", (err, data) => {
            if (err) {
                console.log("There has been an error with accessing file data: ", err)
                return
            }

            const splitData = data.split('\n')
            const filteredData = splitData.filter(task => task.trim() !== strAnswer)

            console.log(splitData)
            console.log(filteredData)
            
            iostream.writeFile(pathToList, filteredData.join('\n'), (err) => {
                if (err) {
                    console.log("There has been an error with appending the data to the file: ", err)
                    return
                }
                console.log(`"${strAnswer}" has been removed from the file!`)
                rl.close()
                return
            })
        })
    })
}

function startTaskManager() {
    rl.question("Welcome to the task manager! To begin please select a process:\n1. Add to list\n2. Remove from list\n", (answer) => {
        const strAnswer = String(answer)
        const input = options[strAnswer]

        if (input) {
            input()
        } else {
            console.log(`${strAnswer} is not a valid input please try again.`)
            startTaskManager()
        }
    })
}

startTaskManager()