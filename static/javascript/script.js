//
// HAMBURGER MENU
//

const hamburgerMenu = document.querySelector("nav ul > div:last-of-type")

hamburgerMenu.querySelector("button").addEventListener("click", () => {
    hamburgerMenu.querySelector("div").classList.add("open")
})

hamburgerMenu.querySelector("div > svg").addEventListener("click", () => {
    hamburgerMenu.querySelector("div").classList.remove("open")
})

//
// DARK AND LIGHT THEME SWITCHING
//

const themeSwitch = document.querySelector("nav ul li svg")

toggleTheme = () => {
    document.body.classList.toggle("theme-light")
    console.log("toggle theme")

    if (document.body.classList.contains("theme-light")) {
        document.querySelector("nav ul li svg circle").classList.add("light")
        localStorage.setItem("theme", "light")
    } else {
        document.querySelector("nav ul li svg circle").classList.remove("light")
        localStorage.setItem("theme", "dark")
    }
}

const savedTheme = localStorage.getItem("theme")

// apply theme according to local storage
if (savedTheme === "light") {
    document.body.classList.add("theme-light")
    document.querySelector("nav ul li svg circle").classList.add("light")
} else if (savedTheme === "dark") {
    document.body.classList.remove("theme-light")
    document.querySelector("nav ul li svg circle").classList.remove("light")
    console.log("check")
} else {
    // Check the user's system preference
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches

    if (prefersDarkMode === true) {
        document.body.classList.remove("theme-light")
        document.querySelector("nav ul li svg circle").classList.remove("light")
        localStorage.setItem("theme", "dark")
    } else {
        document.body.classList.add("theme-light")
        document.querySelector("nav ul li svg circle").classList.add("light")
        localStorage.setItem("theme", "light")
    }
}

themeSwitch.addEventListener("click", toggleTheme)

//
// DUTCH TO ENGLISH LANGUAGE SWITCHING
//

const nlSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[0]
const enSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[1]

const currentURL = window.location.href

// take the letters before the #, aka the substring without the hash
const currentPageWithoutHash = currentURL.split("#")[0]

// number the last occurence of / and add 1 to the number to not add / to the actual string
const currentPage =
    currentPageWithoutHash.substring(
        currentPageWithoutHash.lastIndexOf("/") + 1
    ) || "index.html"

const URLWithoutPage = currentURL.substring(0, currentURL.lastIndexOf("/"))

// take the entire string until the last occurence of /, this way you have url without the current page file
const currentYear =
    URLWithoutPage.substring(URLWithoutPage.lastIndexOf("/") + 1) ||
    "index.html"

const currentPageFolderPath = URLWithoutPage.substring(
    0,
    URLWithoutPage.lastIndexOf("/")
)

console.log("currentPage", currentPage)
console.log("currentYear", currentYear)
console.log("currentPageFolderPath", currentPageFolderPath)

enSwitch.addEventListener("click", () => {
    // if you already on the english index.html page, don't redirect
    if (currentURL.includes("pages/en/index.html")) {
        return
    }
    if (currentPage === "index.html" || currentURL.endsWith("/")) {
        window.location.href = "pages/en/index.html"
    } else {
        // go to the current page folder path, go back twice and then navigate back to the english version. This is to avoid the path getting doubled
        window.location.href = `${currentPageFolderPath}/../../pages/en/${currentYear}/${currentPage}`
    }
})

nlSwitch.addEventListener("click", () => {
    if (currentPage === "index.html" || currentURL.endsWith("/")) {
        window.location.href = "../../index.html"
    } else {
        window.location.href = `${currentPageFolderPath}/../../pages/nl/${currentYear}/${currentPage}`
    }
})

//
// REVEAL SECTION OF PAGE WHEN SCROLLING
//

const revealSection = (selector) => {
    const revealSections = document.querySelectorAll(selector)

    // this is so that each section within the querySelectorAll variable gets iterated
    for (let i = 0; i < revealSections.length; i++) {
        const section = revealSections[i]
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // when sectionTop coodinate is smaller than windowHeight (aka section is visible), reveal the section
        if (sectionTop < windowHeight) {
            section.classList.add("reveal")
        }
    }
}

window.addEventListener("load", () => {
    revealSection("#about section")
    revealSection("#work section")
    revealSection("#work-content > article > section:first-of-type ul li")
    revealSection("#work-content > article > section")
})

window.addEventListener("scroll", () => {
    revealSection("#about section")
    revealSection("#work section")
    revealSection("#work-content > article > section:first-of-type ul li")
    revealSection("#work-content > article > section")
})
