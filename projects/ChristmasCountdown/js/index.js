// var settingsButton = document.getElementById("settingsButton")
// var panel = document.getElementById("settingsPanel")

// settingsButton.onclick = function(){
//     if (panel.className = "open") {
//         //close
//     } else {
//         //open
//     }
// }

function toggleSettings() {
    document.getElementById("settingsPanel").classList.toggle("active");
}

function getSelection() {
    var selection = document.getElementById("settingsList").value;
    return selection
}

// function applySelection() {
//     var selection = getSelection()
//     var bkg = document.getElementById('particles-js')
//     if (selection === "o1") {
//         bkg.style.background=linearGradient(to bottom, rgba(99, 187, 99, 0.8),rgba(226, 96, 96, 0.8));
//     }
//     if (selection === "o2") {
//         bkg.style.background = rgba(1,0,1)
//     }
//     if (selection === "o3") {
//         var img = new Image();
//         img.src = 'pictures/ChristmasVector2.jpg'
//         bkg.style.backgroundImage=img
//     }
// }