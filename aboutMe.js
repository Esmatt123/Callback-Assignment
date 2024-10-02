

const displayMyCity = (city) => {
    
    console.log(city)
}

const displayMyAge = (age, c) => {
    const city = "Stockholm"
    console.log(age)
    console.log("3 sec...")
    setTimeout(() => {
        c(city)
    }, 1000)

}

const displayMyName = (name, b) => {
    const age = 25;
    console.log(name)
    console.log("2 sec...")
    setTimeout(() => {
        b(age, displayMyCity)
    }, 1000)

}

const myName = (a) => {
    const name = "esmatt"
    console.log("1 sec...")
    setTimeout(() => {
        a(name, displayMyAge)
    }, 1000)


}

const one = () => {
    console.log("1")
    const two = () => {
        console.log("2")
        const three = () => {
            console.log("3")
            const four = () => {
                console.log("4")
                const five = () => {
                    console.log("5")
                }
                five()
            }
            four()
        }
        three()
    }
    two()
}
one()
myName(displayMyName)
