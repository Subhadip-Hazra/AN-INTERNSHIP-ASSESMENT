function filterFeatures() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const features = document.querySelectorAll('.features .feature');
    let found = false;

    features.forEach(feature => {
        const featureTitle = feature.querySelector('h2').innerText.toLowerCase();
        if (featureTitle.includes(input) || featureTitle.indexOf(input) !== -1) {
            feature.style.display = 'block';
            found = true;
        } else {
            feature.style.display = 'none';
        }
    });

    const noResultMsg = document.getElementById('noResultMsg');
    if (!found) {
        noResultMsg.style.display = 'block';
    } else {
        noResultMsg.style.display = 'none';
    }
}
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.setProperty('--primary-color','#f10a0a');
        body.style.setProperty('--secondary-color','#39099881');
        body.style.setProperty('--background-color', '#030327fb');
        body.style.setProperty('--next-background-color','#fffff');
        body.style.setProperty('--text-color-light','#f7f3f3');
        body.style.setProperty('--text-color-dark','#0000009f;');
        body.style.setProperty('--accent-color','#fffff;');
        body.style.setProperty('--box-shadow-color','#f1ecfd');
        body.style.transition = '2s';
    }else{
        body.style.setProperty('--primary-color','#7103d3');
        body.style.setProperty('--secondary-color','#00fffb88');
        body.style.setProperty('--background-color', '#c5f2f7');
        body.style.setProperty('--next-background-color','#2c7bfe');
        body.style.setProperty('--text-color-light','#000000');
        body.style.setProperty('--text-color-dark','#fcfafa9f;');
        body.style.setProperty('--box-shadow-color','#14005e');
        body.style.transition = '2s';
    }
});
