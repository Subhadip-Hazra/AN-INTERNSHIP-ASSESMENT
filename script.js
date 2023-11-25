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
        body.style.setProperty('--primary-color','#ee11d3');
        body.style.setProperty('--secondary-color','#04c1f5a9');
        body.style.setProperty('--background-color', '#030327fb');
        body.style.setProperty('--next-background-color','#2b03f43c');
        body.style.setProperty('--text-color-light','#f7f3f3');
        body.style.setProperty('--text-color-dark','#0000009f;');
        body.style.setProperty('--accent-color','#057ff2;');
        body.style.setProperty('--box-shadow-color','rgba(0, 0, 0, 0.25)');
        body.style.transition = '2s';
    }else{
        body.style.setProperty('--primary-color','#6c33d6a5');
        body.style.setProperty('--secondary-color','#f504bda9');
        body.style.setProperty('--background-color', '#c5f2f7');
        body.style.setProperty('--next-background-color','#2b03f43c');
        body.style.setProperty('--text-color-light','#000000');
        body.style.setProperty('--text-color-dark','#fcfafa9f;');
        body.style.setProperty('--accent-color','#057ff2;');
        body.style.setProperty('--box-shadow-color','rgba(5, 5, 247, 0.148);');
        body.style.transition = '2s';
        
    }
});
