const countryCode = document.getElementById("country-code")
const phoneNumber = document.getElementById("number")

const handleChat = () => {
    window.location.href = `https://api.whatsapp.com/send?phone=${countryCode.value+phoneNumber.value}`
}
