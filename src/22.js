
function displaytasks(list) {
    let i = 0
    while (list.length !== i) {
        const task = list[i]
        if (task.completed === true) console.log ("[x] " + task.todo)
        else console.log ("[ ] " + task.todo)
        i = i + 1
    }
}

const todaystasks = [
    {
        todo: "Pet the chonkster monster",
        completed: false
    },
    {
        todo: "Feed the chunky monkey",
        completed: true
    },
    {
        todo: "Play with the babanabun",
        completed: true
    }
]

const tomorrowstasks = [
    {
        todo: "Go to Lisbon",
        completed: false
    },
    {
        todo: "Eat grilled squid",
        completed: false
    }
]

displaytasks(todaystasks)
displaytasks(tomorrowstasks)

