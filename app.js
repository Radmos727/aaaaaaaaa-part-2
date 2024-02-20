// variables
const target = "@";
const button = document.querySelector("button")
const specialSymbols = ['@', '#', '!', '$', '%']

const emailTyped = document.querySelector("#email")
const usernameTyped = document.querySelector("#username")
const passwordTyped = document.querySelector("#password")
const passwordConfirmTyped = document.querySelector("#confirm-password")

const emailError = document.querySelector("#email-error")
const usernameError = document.querySelector("#username-error")
const passwordError = document.querySelector("#password-error")
const passwordMatchError = document.querySelector("#passwordMatch-error")

// functions
function checkForAt(email) {
    for (let i = 0; i < email.length; i++) {
      if (email[i] === target) {
        return true
      }
    }
  
    return false
}

function checkForNum(username) { //am debilobas movundi 2 saati
    for (let i = 0; i < username.length; i++) {
        if (!isNaN(username[i])) {
            return true
        }
    }
    return false
}

function passwordMatch(password) {
    const currentPassword = passwordTyped.value
    const passwordConfirmed = passwordConfirmTyped.value
    if (currentPassword === passwordConfirmed) {
        return true
    } else {
        return false
    }
}

function checkForSpecial(password) {
    const currentPass = passwordTyped.value
    for (let char of specialSymbols) {
        if (typeof currentPass === "string") {
            return true
        } else {
            for (let item of currentPass) {
                for (let char of specialSymbols) {
                    if (item.includes(char)) {
                        return true
                    }
                }
            }
        }
    }
    return false
} 

function checkforCapital(str) {
    return /[A-Z]/.test(str)
}

function checkBothPassword(str) {
    return checkForSpecial(str) || checkforCapital(str)
}

button.addEventListener("click", function() {
    const email = emailTyped.value;
    const hasAt = checkForAt(email)
    const username = usernameTyped.value
    const hasNum = checkForNum(username)
    const passwordConfirm = passwordConfirmTyped.value
    const passMatch = passwordMatch(passwordConfirm)
    const password = passwordTyped.value
    const passSymbol = checkForSpecial(password)
    const passwordBoth = checkBothPassword(passSymbol, password)
    
    function registrationSuccess() {
        alert("You have successfully registered! Welcome.")
    }
    
    if(hasAt, hasNum, passMatch, passwordBoth) {
        registrationSuccess()
    }
    // css da raghaca (tavs moviklav)

    if (!hasAt) {
        emailError.innerText = ("Enter a valid email.")
        emailError.style.color = ("red")
        emailTyped.style.borderColor = ("red")
    }

    if (!hasNum) {
        usernameError.innerText = ("Include a number in your username.")
        usernameError.style.color = ("red")
        usernameTyped.style.borderColor = ("red")
    }

    if (!passMatch) {
        passwordMatchError.innerText = ("Make sure your password matches the one you put above.")
        passwordMatchError.style.color = ("red")
        passwordConfirmTyped.style.borderColor = ("red")
    }

    if (!passwordBoth) {
        passwordError.innerText = ("Make sure you include a special character and a capital letter in your password")
        passwordError.style.color = ("red")
        passwordTyped.style.borderColor = ("red")
    }
    
})