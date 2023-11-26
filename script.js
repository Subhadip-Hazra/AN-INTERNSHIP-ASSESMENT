// Get the toggleDark button and the body element
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

// Add a click event listener to the toggleDark button
toggle.addEventListener('click', function(){
    // Toggle between classes to change the icon
    this.classList.toggle('bi-moon');

    // Check the current class and toggle the color scheme accordingly
    if(this.classList.toggle('bi-brightness-high-fill')){
        // Apply the first color scheme for night mode
        body.style.setProperty('--primary-color','#f10a0a');
        body.style.setProperty('--secondary-color','#39099881');
        body.style.setProperty('--background-color', '#030327fb');
        body.style.setProperty('--text-color-light','#f7f3f3');
        body.style.setProperty('--box-shadow-color','#f1ecfd');
        body.style.transition = '2s'; // Apply transition
    } else {
        // Apply the second color scheme for the day mode
        body.style.setProperty('--primary-color','#7103d3');
        body.style.setProperty('--secondary-color','#00fffb88');
        body.style.setProperty('--background-color', '#c5f2f7');
        body.style.setProperty('--text-color-light','#000000');
        body.style.setProperty('--box-shadow-color','#14005e');
        body.style.transition = '2s'; // Apply transition
    }
});
