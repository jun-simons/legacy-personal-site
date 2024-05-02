function changeTheme() {
    var numThemes = 6;
    
    var option = Math.floor(Math.random() * numThemes);

    if (option === 0) {
        document.body.className = '';
    } else if (option === 1) {
        document.body.className = 'color2'
    } else if (option === 2) {
        document.body.className = 'color3'
    } else if (option === 3) {
        document.body.className = 'color4'
    } else if (option === 4) {
        document.body.className = 'color5'
    } else if (option === 5) {
        document.body.className = 'color6'
    }
}