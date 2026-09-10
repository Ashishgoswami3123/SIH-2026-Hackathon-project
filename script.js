const authPage = document.getElementById("authPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");
const switchText = document.getElementById("switchText");
const loginSwitch = document.getElementById("loginSwitch");
const userName = document.getElementById("userName");



/* =========================
   TOGGLE FUNCTIONS
========================= */

function toggleProblemOptions() {
    const subOptions = document.getElementById("problemSubOptions");
    const arrow = document.querySelector(".problem-card .card-arrow");
    
    if (subOptions.classList.contains("hidden")) {
        subOptions.classList.remove("hidden");
        arrow.textContent = "↑";
        const monitorSub = document.getElementById("monitorSubOptions");
        const monitorArrow = document.querySelector(".monitor-card .card-arrow");
        if (!monitorSub.classList.contains("hidden")) {
            monitorSub.classList.add("hidden");
            monitorArrow.textContent = "↓";
        }
    } else {
        subOptions.classList.add("hidden");
        arrow.textContent = "↓";
    }
}

function toggleMonitorOptions() {
    const subOptions = document.getElementById("monitorSubOptions");
    const arrow = document.querySelector(".monitor-card .card-arrow");
    
    if (subOptions.classList.contains("hidden")) {
        subOptions.classList.remove("hidden");
        arrow.textContent = "↑";
        const problemSub = document.getElementById("problemSubOptions");
        const problemArrow = document.querySelector(".problem-card .card-arrow");
        if (!problemSub.classList.contains("hidden")) {
            problemSub.classList.add("hidden");
            problemArrow.textContent = "↓";
        }
    } else {
        subOptions.classList.add("hidden");
        arrow.textContent = "↓";
    }
}



/* =========================
   AUTH PAGE - FULL SCREEN BG SLIDER
========================= */

let currentSlide = 0;
let slideInterval = null;
const SLIDE_DURATION = 4000;

function showSlide(index) {
    const slides = document.querySelectorAll(".bg-slider .bg-slide");
    const dots = document.querySelectorAll(".bg-slider .slider-dots .dot");

    if (slides.length === 0) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach(function(slide, i) {
        slide.classList.toggle("active", i === index);
    });

    dots.forEach(function(dot, i) {
        dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function goToSlide(index) {
    showSlide(index);
    restartSlider();
}

function startSlider() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, SLIDE_DURATION);
}

function restartSlider() {
    startSlider();
}



/* =========================
   WELCOME SECTION - FULL BG IMAGE SLIDER (DASHBOARD)
========================= */

let welcomeCurrentSlide = 0;
let welcomeSlideInterval = null;
const WELCOME_SLIDE_DURATION = 3500;

function showWelcomeSlide(index) {
    const slides = document.querySelectorAll(".welcome-slider .welcome-slide");

    if (slides.length === 0) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach(function(slide, i) {
        slide.classList.toggle("active", i === index);
    });

    welcomeCurrentSlide = index;
}

function nextWelcomeSlide() {
    showWelcomeSlide(welcomeCurrentSlide + 1);
}

function startWelcomeSlider() {
    if (welcomeSlideInterval) clearInterval(welcomeSlideInterval);
    welcomeSlideInterval = setInterval(nextWelcomeSlide, WELCOME_SLIDE_DURATION);
}

function initWelcomeSlider() {
    const slides = document.querySelectorAll(".welcome-slider .welcome-slide");
    if (slides.length === 0) return;
    showWelcomeSlide(0);
    startWelcomeSlider();
}



/* =========================
   DASHBOARD BACKGROUND SLIDER (BLURRED)
========================= */

let dashBgCurrentSlide = 0;
let dashBgSlideInterval = null;
const DASH_BG_SLIDE_DURATION = 5000;

function showDashBgSlide(index) {
    const slides = document.querySelectorAll(".dashboard-bg-slider .dashboard-bg-slide");

    if (slides.length === 0) return;

    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    slides.forEach(function(slide, i) {
        slide.classList.toggle("active", i === index);
    });

    dashBgCurrentSlide = index;
}

function nextDashBgSlide() {
    showDashBgSlide(dashBgCurrentSlide + 1);
}

function startDashBgSlider() {
    if (dashBgSlideInterval) clearInterval(dashBgSlideInterval);
    dashBgSlideInterval = setInterval(nextDashBgSlide, DASH_BG_SLIDE_DURATION);
}

function initDashBgSlider() {
    const slides = document.querySelectorAll(".dashboard-bg-slider .dashboard-bg-slide");
    if (slides.length === 0) return;
    showDashBgSlide(0);
    startDashBgSlider();
}



/* =========================
   LANGUAGE DATA
========================= */

const languages = {

    en: {

        userRole: "Farmer",
        logout: "Logout",

        welcomeSmall: "Welcome to AgriShield 🌱",
        welcomeTitle: "How can we help<br>your farm today?",
        welcomeDescription: "Choose what you need help with and let's take care of your crops together.",

        choiceTitle: "What brings you here?",
        choiceSubtitle: "Select an option to get started",

        problemLabel: "NEED HELP?",
        problemTitle: "My Crop / Plant Has a Problem",
        problemDescription: "Something is wrong with your wheat, plant or crop? Tell us what's happening and we'll help identify the problem.",

        wheat: "🌾 Wheat",
        plant: "🌱 Plant",
        pest: "🐛 Pest",
        disease: "🦠 Disease",

        subPlantProblem: "Plant Problem",
        subPlantProblemDesc: "Leaves, growth, or disease",
        subFarmingProblem: "Farming Problem",
        subFarmingProblemDesc: "Soil, water, or crop issues",

        monitorLabel: "START FROM BEGINNING",
        monitorTitle: "Start Farm Monitoring",
        monitorDescription: "Starting a new crop or farming on your land? We'll monitor your crop from the beginning and help you track its growth.",

        newCrop: "🌱 New Crop",
        growth: "📅 Growth",
        weather: "🌦 Weather",
        monitoring: "💧 Monitoring",

        subPlantMonitor: "Plant Monitoring",
        subPlantMonitorDesc: "Track plant growth & health",
        subFarmingMonitor: "Farming Monitoring",
        subFarmingMonitorDesc: "Track farm & crop progress",

        historyTitle: "Track Progress",
        historySubtitle: "View your crop problems and farm monitoring history.",
        emptyHistoryTitle: "No activity yet",
        emptyHistoryText: "Your crop problem and farm monitoring activities will appear here."
    },


    hi: {

        userRole: "किसान",
        logout: "लॉग आउट",

        welcomeSmall: "AgriShield में आपका स्वागत है 🌱",
        welcomeTitle: "आज हम आपके<br>खेत की कैसे मदद करें?",
        welcomeDescription: "आपको जिस मदद की जरूरत है उसे चुनें और अपनी फसल की बेहतर देखभाल करें।",

        choiceTitle: "आप यहां क्यों आए हैं?",
        choiceSubtitle: "शुरू करने के लिए एक विकल्प चुनें",

        problemLabel: "मदद चाहिए?",
        problemTitle: "मेरी फसल / पौधे में समस्या है",
        problemDescription: "गेहूं, पौधे या फसल में कुछ समस्या है? हमें बताएं कि क्या हो रहा है और हम समस्या पहचानने में आपकी मदद करेंगे।",

        wheat: "🌾 गेहूं",
        plant: "🌱 पौधा",
        pest: "🐛 कीट",
        disease: "🦠 रोग",

        subPlantProblem: "पौधे की समस्या",
        subPlantProblemDesc: "पत्तियां, वृद्धि, या रोग",
        subFarmingProblem: "खेती की समस्या",
        subFarmingProblemDesc: "मिट्टी, पानी, या फसल की समस्याएं",

        monitorLabel: "शुरुआत से निगरानी",
        monitorTitle: "फार्म मॉनिटरिंग शुरू करें",
        monitorDescription: "नई फसल उगा रहे हैं या जमीन पर खेती शुरू कर रहे हैं? हम शुरुआत से आपकी फसल की निगरानी करने और उसकी वृद्धि को ट्रैक करने में मदद करेंगे।",

        newCrop: "🌱 नई फसल",
        growth: "📅 वृद्धि",
        weather: "🌦 मौसम",
        monitoring: "💧 निगरानी",

        subPlantMonitor: "पौधे की निगरानी",
        subPlantMonitorDesc: "पौधे की वृद्धि और स्वास्थ्य ट्रैक करें",
        subFarmingMonitor: "खेती की निगरानी",
        subFarmingMonitorDesc: "खेत और फसल की प्रगति ट्रैक करें",

        historyTitle: "प्रगति ट्रैक करें",
        historySubtitle: "अपनी फसल की समस्याओं और फार्म मॉनिटरिंग का इतिहास देखें।",
        emptyHistoryTitle: "अभी कोई गतिविधि नहीं",
        emptyHistoryText: "आपकी फसल की समस्या और फार्म मॉनिटरिंग की गतिविधियां यहां दिखाई देंगी।"
    },


    mr: {

        userRole: "शेतकरी",
        logout: "लॉग आउट",

        welcomeSmall: "AgriShield मध्ये आपले स्वागत आहे 🌱",
        welcomeTitle: "आज आम्ही तुमच्या<br>शेतीसाठी कशी मदत करू?",
        welcomeDescription: "तुम्हाला आवश्यक असलेली मदत निवडा आणि तुमच्या पिकांची चांगली काळजी घ्या.",

        choiceTitle: "तुम्ही येथे का आला आहात?",
        choiceSubtitle: "सुरुवात करण्यासाठी एक पर्याय निवडा",

        problemLabel: "मदत हवी आहे?",
        problemTitle: "माझ्या पिकामध्ये / झाडामध्ये समस्या आहे",
        problemDescription: "गहू, झाड किंवा पिकामध्ये काही समस्या आहे का? काय होत आहे ते आम्हाला सांगा आणि समस्या ओळखण्यात आम्ही तुम्हाला मदत करू.",

        wheat: "🌾 गहू",
        plant: "🌱 झाड",
        pest: "🐛 कीड",
        disease: "🦠 रोग",

        subPlantProblem: "झाडाची समस्या",
        subPlantProblemDesc: "पाने, वाढ, किंवा रोग",
        subFarmingProblem: "शेतीची समस्या",
        subFarmingProblemDesc: "माती, पाणी, किंवा पिकाच्या समस्या",

        monitorLabel: "सुरुवातीपासून निरीक्षण",
        monitorTitle: "शेतीचे निरीक्षण सुरू करा",
        monitorDescription: "नवीन पीक घेत आहात किंवा जमिनीवर शेती सुरू करत आहात? आम्ही सुरुवातीपासून तुमच्या पिकाचे निरीक्षण करू आणि त्याची वाढ ट्रॅक करण्यात मदत करू.",

        newCrop: "🌱 नवीन पीक",
        growth: "📅 वाढ",
        weather: "🌦 हवामान",
        monitoring: "💧 निरीक्षण",

        subPlantMonitor: "झाडाचे निरीक्षण",
        subPlantMonitorDesc: "झाडाची वाढ आणि आरोग्य ट्रॅक करा",
        subFarmingMonitor: "शेतीचे निरीक्षण",
        subFarmingMonitorDesc: "शेत आणि पिकाची प्रगती ट्रॅक करा",

        historyTitle: "प्रगती ट्रॅक करा",
        historySubtitle: "तुमच्या पिकांच्या समस्या आणि शेती निरीक्षणाचा इतिहास पहा.",
        emptyHistoryTitle: "अजून कोणतीही गतिविधी नाही",
        emptyHistoryText: "तुमच्या पिकांच्या समस्या आणि शेती निरीक्षणाच्या गतिविधी येथे दिसतील."
    }

};



/* =========================
   CHANGE LANGUAGE
========================= */

function changeLanguage() {

    const language = document.getElementById("languageSelect").value;
    const text = languages[language];

    document.getElementById("userRole").textContent = text.userRole;
    document.getElementById("logoutText").textContent = text.logout;

    document.getElementById("welcomeSmall").textContent = text.welcomeSmall;
    document.getElementById("welcomeTitle").innerHTML = text.welcomeTitle;
    document.getElementById("welcomeDescription").textContent = text.welcomeDescription;

    document.getElementById("choiceTitle").textContent = text.choiceTitle;
    document.getElementById("choiceSubtitle").textContent = text.choiceSubtitle;

    document.getElementById("problemLabel").textContent = text.problemLabel;
    document.getElementById("problemTitle").textContent = text.problemTitle;
    document.getElementById("problemDescription").textContent = text.problemDescription;
    document.getElementById("tagWheat").textContent = text.wheat;
    document.getElementById("tagPlant").textContent = text.plant;
    document.getElementById("tagPest").textContent = text.pest;
    document.getElementById("tagDisease").textContent = text.disease;

    document.getElementById("subPlantProblem").textContent = text.subPlantProblem;
    document.getElementById("subPlantProblemDesc").textContent = text.subPlantProblemDesc;
    document.getElementById("subFarmingProblem").textContent = text.subFarmingProblem;
    document.getElementById("subFarmingProblemDesc").textContent = text.subFarmingProblemDesc;

    document.getElementById("monitorLabel").textContent = text.monitorLabel;
    document.getElementById("monitorTitle").textContent = text.monitorTitle;
    document.getElementById("monitorDescription").textContent = text.monitorDescription;
    document.getElementById("tagNewCrop").textContent = text.newCrop;
    document.getElementById("tagGrowth").textContent = text.growth;
    document.getElementById("tagWeather").textContent = text.weather;
    document.getElementById("tagMonitoring").textContent = text.monitoring;

    document.getElementById("subPlantMonitor").textContent = text.subPlantMonitor;
    document.getElementById("subPlantMonitorDesc").textContent = text.subPlantMonitorDesc;
    document.getElementById("subFarmingMonitor").textContent = text.subFarmingMonitor;
    document.getElementById("subFarmingMonitorDesc").textContent = text.subFarmingMonitorDesc;

    document.getElementById("historyTitle").textContent = text.historyTitle;
    document.getElementById("historySubtitle").textContent = text.historySubtitle;
    document.getElementById("emptyHistoryTitle").textContent = text.emptyHistoryTitle;
    document.getElementById("emptyHistoryText").textContent = text.emptyHistoryText;

    localStorage.setItem("agriShieldLanguage", language);
    renderHistory();
}



/* =========================
   HISTORY
========================= */

function getHistory() {
    const history = localStorage.getItem("agriShieldHistory");
    if (!history) {
        return [];
    }
    return JSON.parse(history);
}


function saveHistory(type, subType, formData) {
    const history = getHistory();
    
    let displayName = "";
    let icon = "";
    
    if (type === "problem") {
        if (subType === "plant") {
            displayName = "🌱 Plant Problem Report";
            icon = "🔍";
        } else if (subType === "farming") {
            displayName = "🌾 Farming Problem Report";
            icon = "🔍";
        } else {
            displayName = "🔍 Crop / Plant Problem";
            icon = "🔍";
        }
    } else if (type === "monitoring") {
        if (subType === "plant") {
            displayName = "🌱 Plant Monitoring Report";
            icon = "📊";
        } else if (subType === "farming") {
            displayName = "🌾 Farming Monitoring Report";
            icon = "📊";
        } else {
            displayName = "📊 Farm Monitoring";
            icon = "📊";
        }
    }

    const item = {
        id: Date.now(),
        type: type,
        subType: subType || "general",
        displayName: displayName,
        icon: icon,
        date: new Date().toLocaleString(),
        status: formData && typeof formData === "object" && Object.keys(formData).length > 1 ? "Completed" : "Started",
        details: formData || false
    };

    history.unshift(item);
    localStorage.setItem("agriShieldHistory", JSON.stringify(history));
    renderHistory();
}



function renderHistory() {
    const history = getHistory();
    const historyList = document.getElementById("historyList");
    const emptyHistory = document.getElementById("emptyHistory");

    historyList.innerHTML = "";

    if (history.length === 0) {
        emptyHistory.classList.remove("hidden");
        return;
    }

    emptyHistory.classList.add("hidden");

    history.forEach(function(item) {
        const div = document.createElement("div");
        div.className = "history-item";

        const isProblem = item.type === "problem";
        const icon = item.icon || (isProblem ? "🔍" : "📊");
        const displayName = item.displayName || (isProblem ? "Crop / Plant Problem" : "Farm Monitoring");

        let detailsText = "";
        if (item.details && typeof item.details === "object") {
            detailsText = "📋 " + Object.keys(item.details).length + " fields filled";
        } else if (item.details && typeof item.details === "string") {
            detailsText = "📝 " + item.details.substring(0, 30) + "...";
        }

        div.innerHTML = `
            <div class="history-item-icon ${isProblem ? "history-problem" : "history-monitor"}">
                ${icon}
            </div>
            <div class="history-item-content">
                <h3>${displayName}</h3>
                <p>${item.date}</p>
                ${detailsText ? `<p style="font-size: 10px; color: #65a94f; margin-top: 2px;">${detailsText}</p>` : ''}
            </div>
            <span class="history-status">${item.status}</span>
        `;

        div.onclick = function() {
            openHistoryDetails(item);
        };

        historyList.appendChild(div);
    });
}



/* =========================
   HISTORY DETAILS
========================= */

function openHistoryDetails(item) {
    const type = item.displayName || (item.type === "problem" ? "Crop / Plant Problem" : "Farm Monitoring");

    let message = `📋 ${type}\n\n`;
    
    if (item.details && typeof item.details === "object") {
        const fields = Object.keys(item.details);
        fields.forEach(function(key) {
            message += `${key}: ${item.details[key]}\n`;
        });
        alert(message);
    } else if (item.details && typeof item.details === "string") {
        alert(`📋 ${type}\n\nDetails: ${item.details}`);
    } else {
        const answer = prompt(`Enter additional details for ${type}:`);
        if (answer !== null && answer.trim() !== "") {
            const history = getHistory();
            const index = history.findIndex(function(historyItem) {
                return historyItem.id === item.id;
            });
            if (index !== -1) {
                history[index].details = answer;
                history[index].status = "Updated";
                localStorage.setItem("agriShieldHistory", JSON.stringify(history));
                renderHistory();
                alert("Details saved successfully.");
            }
        }
    }
}



/* =========================
   LOGIN / REGISTER
========================= */

function showRegister() {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
    formTitle.textContent = "Create Account";
    formSubtitle.textContent = "Join AgriShield and manage your crops better";
    switchText.classList.add("hidden");
    loginSwitch.classList.remove("hidden");
}


function showLogin() {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.textContent = "Welcome Back";
    formSubtitle.textContent = "Login to continue to AgriShield";
    loginSwitch.classList.add("hidden");
    switchText.classList.remove("hidden");
}



/* =========================
   PASSWORD
========================= */

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        button.textContent = "🙈";
    } else {
        input.type = "password";
        button.textContent = "👁";
    }
}



/* =========================
   FORGOT PASSWORD
========================= */

function forgotPassword() {
    alert("Password reset will be connected with the backend later.");
}



/* =========================
   LOGIN
========================= */

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        return;
    }

    let savedName = localStorage.getItem("agriShieldUserName");
    if (!savedName) {
        savedName = "Farmer";
    }

    userName.textContent = savedName;

    authPage.classList.add("hidden");
    dashboardPage.classList.remove("hidden");

    /* Start dashboard sliders */
    initWelcomeSlider();
    initDashBgSlider();

    const savedLanguage = localStorage.getItem("agriShieldLanguage") || "en";
    document.getElementById("languageSelect").value = savedLanguage;

    changeLanguage();
    renderHistory();
});



/* =========================
   REGISTER
========================= */

registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("agriShieldUserName", name);
    alert("Account created successfully!");
    showLogin();
    document.getElementById("loginEmail").value = email;
});



/* =========================
   PLANT REPORT - OPEN/CLOSE
========================= */

function openPlantReport() {
    saveHistory("problem", "plant", { status: "Form Opened" });
    document.getElementById("plantReportPage").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("problemSubOptions").classList.add("hidden");
    document.querySelector(".problem-card .card-arrow").textContent = "↓";
}

function closePlantReport() {
    document.getElementById("plantReportPage").classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("plantReportForm").reset();
    document.getElementById("plantPhotoPreview").classList.add("hidden");
    document.getElementById("plantPreviewImage").src = "#";
}

function removePlantPhoto() {
    document.getElementById("plantPhoto").value = "";
    document.getElementById("plantPhotoPreview").classList.add("hidden");
    document.getElementById("plantPreviewImage").src = "#";
}



/* =========================
   PLANT REPORT - SUBMIT
========================= */

function submitPlantReport(event) {
    event.preventDefault();
    
    const photoFile = document.getElementById("plantPhoto").files[0];
    const plantName = document.getElementById("plantName").value;
    const plantWater = document.getElementById("plantWater").value;
    const plantSunlight = document.getElementById("plantSunlight").value;
    const plantAge = document.getElementById("plantAge").value;
    const plantSoil = document.getElementById("plantSoil").value;
    const plantTemp = document.getElementById("plantTemp").value;
    
    if (!plantName || !plantWater || !plantSunlight || !plantAge || !plantSoil || !plantTemp) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    if (!photoFile) {
        alert("⚠️ Please upload a photo of your plant!");
        return;
    }
    
    const formData = {
        "Plant Photo": photoFile.name + " (Uploaded)",
        "Plant Name": plantName,
        "Water (Under 7 days)": plantWater,
        "Sunlight": plantSunlight,
        "Plant Age": plantAge,
        "Soil Type": plantSoil,
        "Temperature": plantTemp
    };
    
    saveHistory("problem", "plant", formData);
    
    let summary = "✅ Plant Problem Report Submitted!\n\n";
    const keys = Object.keys(formData);
    keys.forEach(function(key) {
        summary += `${key}: ${formData[key]}\n`;
    });
    
    alert(summary);
    closePlantReport();
    renderHistory();
}



/* =========================
   FARMING REPORT - OPEN/CLOSE
========================= */

function openFarmingReport() {
    saveHistory("problem", "farming", { status: "Form Opened" });
    document.getElementById("farmingReportPage").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("problemSubOptions").classList.add("hidden");
    document.querySelector(".problem-card .card-arrow").textContent = "↓";
}

function closeFarmingReport() {
    document.getElementById("farmingReportPage").classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("farmingReportForm").reset();
    document.getElementById("cropPhotoPreview").classList.add("hidden");
    document.getElementById("cropPreviewImage").src = "#";
}

function removeCropPhoto() {
    document.getElementById("cropPhoto").value = "";
    document.getElementById("cropPhotoPreview").classList.add("hidden");
    document.getElementById("cropPreviewImage").src = "#";
}



/* =========================
   FARMING REPORT - SUBMIT
========================= */

function submitFarmingReport(event) {
    event.preventDefault();
    
    const photoFile = document.getElementById("cropPhoto").files[0];
    const cropName = document.getElementById("cropName").value;
    const cropAge = document.getElementById("cropAge").value;
    const affectedArea = document.getElementById("affectedArea").value;
    const cropSymptoms = document.getElementById("cropSymptoms").value;
    const cropWater = document.getElementById("cropWater").value;
    const cropTemp = document.getElementById("cropTemp").value;
    const cropSunlight = document.getElementById("cropSunlight").value;
    const cropSoil = document.getElementById("cropSoil").value;
    const weatherCondition = document.getElementById("weatherCondition").value;
    const pestInsects = document.getElementById("pestInsects").value;
    const fertilizerUsed = document.getElementById("fertilizerUsed").value;
    
    if (!cropName || !cropAge || !affectedArea || !cropSymptoms || !cropWater || 
        !cropTemp || !cropSunlight || !cropSoil || !weatherCondition || 
        !pestInsects || !fertilizerUsed) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    if (!photoFile) {
        alert("⚠️ Please upload a photo of your crop!");
        return;
    }
    
    const formData = {
        "Crop Photo": photoFile.name + " (Uploaded)",
        "Crop Name": cropName,
        "Crop Age": cropAge,
        "Affected Area": affectedArea,
        "Crop Symptoms": cropSymptoms,
        "Water (7 days)": cropWater,
        "Temperature": cropTemp,
        "Sunlight": cropSunlight,
        "Soil Type": cropSoil,
        "Weather Condition": weatherCondition,
        "Pests / Insects": pestInsects,
        "Fertilizer Used": fertilizerUsed
    };
    
    saveHistory("problem", "farming", formData);
    
    let summary = "✅ Farming Problem Report Submitted!\n\n";
    const keys = Object.keys(formData);
    keys.forEach(function(key) {
        summary += `${key}: ${formData[key]}\n`;
    });
    
    alert(summary);
    closeFarmingReport();
    renderHistory();
}



/* =========================
   PLANT MONITORING - OPEN/CLOSE
========================= */

function openPlantMonitoring() {
    saveHistory("monitoring", "plant", { status: "Form Opened" });
    document.getElementById("plantMonitoringPage").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("monitorSubOptions").classList.add("hidden");
    document.querySelector(".monitor-card .card-arrow").textContent = "↓";
}

function closePlantMonitoring() {
    document.getElementById("plantMonitoringPage").classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("plantMonitoringForm").reset();
    document.getElementById("monitorPlantPhotoPreview").classList.add("hidden");
    document.getElementById("monitorPlantPreviewImage").src = "#";
}

function removeMonitorPlantPhoto() {
    document.getElementById("monitorPlantPhoto").value = "";
    document.getElementById("monitorPlantPhotoPreview").classList.add("hidden");
    document.getElementById("monitorPlantPreviewImage").src = "#";
}



/* =========================
   PLANT MONITORING - SUBMIT
========================= */

function submitPlantMonitoring(event) {
    event.preventDefault();
    
    const photoFile = document.getElementById("monitorPlantPhoto").files[0];
    const plantName = document.getElementById("monitorPlantName").value;
    const plantHeight = document.getElementById("plantHeight").value;
    const leafCondition = document.getElementById("leafCondition").value;
    const plantGrowthStage = document.getElementById("plantGrowthStage").value;
    const plantSunlight = document.getElementById("plantSunlightMonitor").value;
    const soilMoisture = document.getElementById("soilMoisture").value;
    const soilCondition = document.getElementById("soilConditionMonitor").value;
    const plantHealth = document.getElementById("plantHealth").value;
    const plantTemp = document.getElementById("plantTempMonitor").value;
    
    if (!plantName || !plantHeight || !leafCondition || !plantGrowthStage || 
        !plantSunlight || !soilMoisture || !soilCondition || !plantHealth || !plantTemp) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    if (!photoFile) {
        alert("⚠️ Please upload a photo of your plant!");
        return;
    }
    
    const formData = {
        "Plant Photo": photoFile.name + " (Uploaded)",
        "Plant Name": plantName,
        "Plant Height": plantHeight,
        "Leaf Condition": leafCondition,
        "Growth Stage": plantGrowthStage,
        "Sunlight": plantSunlight,
        "Soil Moisture": soilMoisture,
        "Soil Condition": soilCondition,
        "Plant Health": plantHealth,
        "Temperature": plantTemp
    };
    
    saveHistory("monitoring", "plant", formData);
    
    let summary = "✅ Plant Monitoring Report Submitted!\n\n";
    const keys = Object.keys(formData);
    keys.forEach(function(key) {
        summary += `${key}: ${formData[key]}\n`;
    });
    
    alert(summary);
    closePlantMonitoring();
    renderHistory();
}



/* =========================
   FARMING MONITORING - OPEN/CLOSE
========================= */

function openFarmingMonitoring() {
    saveHistory("monitoring", "farming", { status: "Form Opened" });
    document.getElementById("farmingMonitoringPage").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    document.getElementById("monitorSubOptions").classList.add("hidden");
    document.querySelector(".monitor-card .card-arrow").textContent = "↓";
}

function closeFarmingMonitoring() {
    document.getElementById("farmingMonitoringPage").classList.add("hidden");
    document.body.style.overflow = "auto";
    document.getElementById("farmingMonitoringForm").reset();
    document.getElementById("monitorCropPhotoPreview").classList.add("hidden");
    document.getElementById("monitorCropPreviewImage").src = "#";
}

function removeMonitorCropPhoto() {
    document.getElementById("monitorCropPhoto").value = "";
    document.getElementById("monitorCropPhotoPreview").classList.add("hidden");
    document.getElementById("monitorCropPreviewImage").src = "#";
}



/* =========================
   FARMING MONITORING - SUBMIT (Crop Height Removed)
========================= */

function submitFarmingMonitoring(event) {
    event.preventDefault();
    
    const photoFile = document.getElementById("monitorCropPhoto").files[0];
    const cropName = document.getElementById("monitorCropName").value;
    const cropGrowthStage = document.getElementById("cropGrowthStage").value;
    const fieldCondition = document.getElementById("fieldCondition").value;
    const soilQuality = document.getElementById("soilQuality").value;
    const soilMoisture = document.getElementById("soilMoistureMonitor").value;
    const irrigationType = document.getElementById("irrigationType").value;
    const rainfall = document.getElementById("rainfall").value;
    const weather = document.getElementById("weatherMonitor").value;
    const cropHealth = document.getElementById("cropHealth").value;
    const cropTemp = document.getElementById("cropTempMonitor").value;
    
    if (!cropName || !cropGrowthStage || !fieldCondition || 
        !soilQuality || !soilMoisture || !irrigationType || !rainfall || 
        !weather || !cropHealth || !cropTemp) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    if (!photoFile) {
        alert("⚠️ Please upload a photo of your crop!");
        return;
    }
    
    const formData = {
        "Crop Photo": photoFile.name + " (Uploaded)",
        "Crop Name": cropName,
        "Growth Stage": cropGrowthStage,
        "Field Condition": fieldCondition,
        "Soil Quality": soilQuality,
        "Soil Moisture": soilMoisture,
        "Irrigation Type": irrigationType,
        "Rainfall (Last 7 days)": rainfall,
        "Weather Condition (Last 7 Days)": weather,
        "Crop Health": cropHealth,
        "Temperature": cropTemp
    };
    
    saveHistory("monitoring", "farming", formData);
    
    let summary = "✅ Farming Monitoring Report Submitted!\n\n";
    const keys = Object.keys(formData);
    keys.forEach(function(key) {
        summary += `${key}: ${formData[key]}\n`;
    });
    
    alert(summary);
    closeFarmingMonitoring();
    renderHistory();
}



/* =========================
   LOGOUT
========================= */

function logout() {
    dashboardPage.classList.add("hidden");
    authPage.classList.remove("hidden");
    loginForm.reset();
    showLogin();

    if (welcomeSlideInterval) {
        clearInterval(welcomeSlideInterval);
        welcomeSlideInterval = null;
    }

    if (dashBgSlideInterval) {
        clearInterval(dashBgSlideInterval);
        dashBgSlideInterval = null;
    }
}



/* =========================
   INITIAL LOAD
========================= */

window.addEventListener("load", function() {
    const savedLanguage = localStorage.getItem("agriShieldLanguage") || "en";
    const languageSelect = document.getElementById("languageSelect");
    if (languageSelect) {
        languageSelect.value = savedLanguage;
    }
    renderHistory();

    startSlider();
});
