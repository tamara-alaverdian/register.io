document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault()
    let form = document.getElementById("myForm");
    form.style.display = "none";
    let formData = new FormData(form)
    const name = formData.get("name");
    let showName = document.getElementById("nameShow");
    showName.innerHTML = "Անուն" + " " + name;


    const lastName = formData.get("lastName");
    let showLastName = document.getElementById("lastNameShow");
    showLastName.innerHTML = "Ազգանուն" + "  " + lastName;

    const emailAdr = formData.get("email");
    let showEmail = document.getElementById("emailShow");
    showEmail.innerHTML = "Էլ․ հասցե" + "" + emailAdr;

    const number = formData.get("tel")
    let showTel = document.getElementById("numShow");
    showTel.innerHTML = "Հեռ․" + " " + number;


    let fileInput = formData.get("file");
    const url = URL.createObjectURL(fileInput)
    const showImage = document.getElementById("imageShow")
    showImage.src = url

    const birthDate = formData.get("birthDate")
    let showDate = document.getElementById("dateShow");
    showDate.innerHTML = "Ծննդ․" + " " + birthDate;


    const gender = formData.get("gen")
    let showGen = document.getElementById("genShow");
    showGen.innerHTML = "Սեռը" + " " + gender;

    const address = formData.get("add")
    let showAdd = document.getElementById("addressShow");
    showAdd.innerHTML = "Հասցե" + " " + address;

    const city = formData.get("city")
    let showCity = document.getElementById("cityShow");
    showCity.innerHTML = "Քաղաք" + " " + city;

    const country = formData.get("country")
    let showCountry = document.getElementById("countryShow");
    showCountry.innerHTML = "Երկիր" + " " + country;

})

