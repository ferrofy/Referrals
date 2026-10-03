let Grass_Link = document.getElementById("Grass_Link")
let GoSats_Link = document.getElementById("GoSats_Link")
let BixBerry_Link = document.getElementById("BixBerry_Link")
let Copy_Button = `<i class="fa-regular fa-copy"></i>`
let Tick_Button = `<i class="fa-solid fa-check"></i>`

let Grass
let GoSats
let BixBerry

fetch("https://raw.githubusercontent.com/ferrofy/Referrals/main/Data/Links.json")
    .catch(() => {
        return fetch("../Data/Links.json")
    })
    .then(Data => Data.json())
    .then(Links => {
        Grass = Links.Grass
        GoSats = Links.GoSats
        BixBerry = Links.BixBerry

        Grass_Link.innerHTML = Grass + Copy_Button
        GoSats_Link.innerHTML = GoSats + Copy_Button
        BixBerry_Link.innerHTML = BixBerry + Copy_Button
    })

function Copy(Link) {
    if (Link == "Grass") {

        navigator.clipboard.writeText(Grass)
        Grass_Link.innerHTML = Grass + Tick_Button
        setTimeout(() => {
            Grass_Link.innerHTML = Grass + Copy_Button
        }, 1000)

    } else if (Link == "GoSats") {

        navigator.clipboard.writeText(GoSats)
        GoSats_Link.innerHTML = GoSats + Tick_Button
        setTimeout(() => {
            GoSats_Link.innerHTML = GoSats + Copy_Button
        }, 1000)

    } else if (Link == "BixBerry") {

        navigator.clipboard.writeText(BixBerry)
        BixBerry_Link.innerHTML = BixBerry + Tick_Button
        setTimeout(() => {
            BixBerry_Link.innerHTML = BixBerry + Copy_Button
        }, 1000)

    }
}