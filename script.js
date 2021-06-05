var colorLight = '--main-color-light';

document.addEventListener('DOMContentLoaded', function() {

    var darkButton = document.getElementById('darkBtn')
    var lightButton = document.getElementById('lightBtn')
    var customButton = document.getElementById('customBtn')

    darkButton.addEventListener('click', ()=>{colorChange('dark')});
    lightButton.addEventListener('click', ()=>{colorChange('light')});
    customButton.addEventListener('click', ()=>{colorChange('custom')});

    function colorChange(colorTheme) {
        switch (colorTheme) {
            case 'dark':
                document.documentElement.style.setProperty('--main-color', '#000000');
                document.documentElement.style.setProperty('--main-color-bg', '#3e3636');
                document.documentElement.style.setProperty('--main-color-text', '#d72323');
                document.documentElement.style.setProperty('--sec-color-text', '#f5eded');
                break;
            case 'custom':
                document.documentElement.style.setProperty('--main-color', 'rgb(17, 0, 44)');
                document.documentElement.style.setProperty('--main-color-bg', 'rgb(38, 29, 54)');
                document.documentElement.style.setProperty('--main-color-text', 'rgb(218, 218, 218)');
                document.documentElement.style.setProperty('--sec-color-text', 'rgb(218, 218, 218)');
                break;
            case 'light':
                document.documentElement.style.setProperty('--main-color', '#faf3f3');
                document.documentElement.style.setProperty('--main-color-bg', '#e1e5ea');
                document.documentElement.style.setProperty('--main-color-text', '#a7bbc7');
                document.documentElement.style.setProperty('--sec-color-text', 'da7f8f');
                break;


        }
        
    }

});

