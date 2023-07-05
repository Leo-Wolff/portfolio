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

const nlSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[0]
const enSwitch = document.querySelectorAll(
    "nav ul div:nth-of-type(2) li:last-of-type span"
)[1]
const currentPage = window.location.href
const currentPageWithoutHash = currentPage.split("#")[0]
const currentPageFileName = currentPageWithoutHash.substring(
    currentPageWithoutHash.lastIndexOf("/") + 1
)

console.log(currentPageFileName)

enSwitch.addEventListener("click", () => {
    if (currentPage.includes("pages/en/index.html")) {
        return
    }
    if (currentPageFileName == "index.html") {
        window.location.href = `pages/en/index.html`
    } else {
        window.location.href = `../en/${currentPageFileName}`
    }
})

nlSwitch.addEventListener("click", () => {
    if (currentPageFileName == "index.html") {
        window.location.href = `../../index.html`
    } else {
        window.location.href = `../nl/${currentPageFileName}`
    }
})
