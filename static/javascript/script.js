const themeSwitchButton = document.querySelector(
    "nav ul div:nth-of-type(2) li:nth-of-type(5)"
)

themeSwitchButton.addEventListener("click", () => {
    document.body.classList.toggle("theme-light")

    if (document.body.classList.contains("theme-light")) {
        document.querySelector(
            "nav ul div:nth-of-type(2) li:nth-of-type(5) img"
        ).src = "../static/img/icon-theme.svg"
    } else {
        document.querySelector(
            "nav ul div:nth-of-type(2) li:nth-of-type(5) img"
        ).src = "../static/img/icon-themefilled.svg"
    }
})
