// DARK AND LIGHT THEME SWITCHING

const themeSwitch = document.querySelector(
    "nav ul div:nth-of-type(2) li:nth-of-type(5)"
)

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("theme-light")

    if (document.body.classList.contains("theme-light")) {
        document.querySelector(
            "nav ul div:nth-of-type(2) li:nth-of-type(5) img"
        ).src = "../../static/img/icon-theme.svg"
    } else {
        document.querySelector(
            "nav ul div:nth-of-type(2) li:nth-of-type(5) img"
        ).src = "../../static/img/icon-themefilled.svg"
    }
})

// DUTCH TO ENGLISH LANGUAGE SWITCHING

const nlSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[0]
const enSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[1]
const currentPage = window.location.href
// check
const currentPageWithoutHash = currentPage.split("#")[0]
const currentPageFileName =
    currentPageWithoutHash.substring(
        currentPageWithoutHash.lastIndexOf("/") + 1
    ) || "index.html"
const currentPageFolderPath = currentPage.substring(
    0,
    currentPage.lastIndexOf("/")
)

console.log(currentPageFileName)

enSwitch.addEventListener("click", () => {
    if (currentPage.includes("pages/en/index.html")) {
        return
    }

    if (currentPageFileName === "index.html" || currentPage.endsWith("/")) {
        window.location.href = "pages/en/index.html"
    } else {
        window.location.href = `${currentPageFolderPath}/../../pages/en/${currentPageFileName}`
    }
})

nlSwitch.addEventListener("click", () => {
    if (currentPageFileName === "index.html" || currentPage.endsWith("/")) {
        window.location.href = "../../index.html"
    } else {
        window.location.href = `${currentPageFolderPath}/../../pages/nl/${currentPageFileName}`
    }
})

// REVEAL SECTION OF PAGE WHEN SCROLLING

function revealSection(selector) {
    const revealSections = document.querySelectorAll(selector)

    for (let i = 0; i < revealSections.length; i++) {
        const section = revealSections[i]
        const sectionTop = section.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (sectionTop < windowHeight) {
            section.classList.add("reveal")
        }
    }
}

// Call revealSection when the page is loaded and when scrolling
window.addEventListener("load", function () {
    revealSection("#about section")
    revealSection("#work section")
})

window.addEventListener("scroll", function () {
    revealSection("#about section")
    revealSection("#work section")
})
