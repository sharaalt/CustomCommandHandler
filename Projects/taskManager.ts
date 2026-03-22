import * as iostream from "node:fs"

function openReadFile() {
    iostream.readFile('./taskManager.json' ,'utf-8', (err, data) => {
        console.log(data)
    });
}
openReadFile()