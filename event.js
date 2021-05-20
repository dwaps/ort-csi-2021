const process = require("process")
const rdl = require("readline")

class LoadingBar {
    constructor(size) {
        this.size = size
        this.cursor = 0
        this.timer = null
    }
start() {
        for (let i = 0; i < this.size; i++) {
            process.stdout.write(".")
        }
        rdl.cursorTo(process.stdout, this.cursor, 0);
        this.timer = setInterval(() => {
            process.stdout.write("|")
            
            this.cursor++;
            if (this.cursor >= this.size) {
                clearTimeout(this.timer)
            }
        }, 80)
    }
}

module.exports = LoadingBar;