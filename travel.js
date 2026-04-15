// ================= LOGIN POPUP =================
let user = document.getElementById("user");
let loginPage = document.querySelector(".loginpage");

user.addEventListener("click", function() {
    loginPage.classList.toggle("active1");
});

// ================= LOGIN SYSTEM =================
let loginbtn = document.getElementById("loginbtn");

loginbtn.addEventListener("click", function() {
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if (email.value.trim() === "" || pass.value.trim() === "") {
        alert("Please fill all details ❌");
    } else {
        alert("Login successful ✅");
        loginPage.classList.remove("active1");
    }
});

// ================= FORM VALIDATION =================
let place = document.getElementById("placename");
let members = document.getElementById("members");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let submitBtn = document.getElementById("submit");

// initially disable
submitBtn.disabled = true;

function checkForm() {
    if (
        place.value.trim() !== "" &&
        members.value !== "" &&
        startDate.value !== "" &&
        endDate.value !== "" &&
        endDate.value >= startDate.value
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// events
place.addEventListener("input", checkForm);
members.addEventListener("input", checkForm);
startDate.addEventListener("change", checkForm);
endDate.addEventListener("change", checkForm);

// ================= BOOKING SUBMIT =================
submitBtn.addEventListener("click", function() {
    if (endDate.value < startDate.value) {
        alert("End date cannot be before start date ❌");
        return;
    }

    alert(
        "🎉 Booking Confirmed!\n\n" +
        "Place: " + place.value +
        "\nMembers: " + members.value +
        "\nFrom: " + startDate.value +
        "\nTo: " + endDate.value
    );

    // reset form
    place.value = "";
    members.value = "";
    startDate.value = "";
    endDate.value = "";
    submitBtn.disabled = true;
});

// ================= RESPONSIVE MENU (optional future use) =================
let bar = document.getElementById("bar");
let menu = document.querySelector("ul");

if (bar) {
    bar.addEventListener("click", function() {
        menu.classList.toggle("showMenu");
    });
}

// ================= CLICK OUTSIDE TO CLOSE LOGIN =================
document.addEventListener("click", function(e) {
    if (!loginPage.contains(e.target) && e.target !== user) {
        loginPage.classList.remove("active1");
    }
}); // ================= CONTACT FORM =================
let contactBtn = document.querySelector(".contactform button");
let contactName = document.querySelector(".contactform input[type='text']");
let contactEmail = document.getElementById("contactEmail"); // contact wala email

contactBtn.addEventListener("click", function() {
    if (contactName.value.trim() === "" || contactEmail.value.trim() === "") {
        alert("Please fill all details ❌");
    } else {
        alert("Thank you " + contactName.value + " 😊\nWe will contact you soon!");

        // reset form
        contactName.value = "";
        contactEmail.value = "";
    }
});
document.querySelector(".maintext button").addEventListener("click", function() {
    let section = document.getElementById("place");
    section.scrollIntoView({ behavior: "smooth" });
    section.style.backgroundColor = "#e3d2c3";

    setTimeout(() => {
        section.style.backgroundColor = "";
    }, 2000);
});


let allCards = document.querySelectorAll(".card, .placecard");

allCards.forEach(card => {
    card.addEventListener("click", function() {
        let placeName = this.querySelector("h3").innerText;

        document.getElementById("placename").value = placeName;

        document.getElementById("book").scrollIntoView({
            behavior: "smooth"
        });
    });
});