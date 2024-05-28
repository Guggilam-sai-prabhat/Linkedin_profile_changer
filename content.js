console.log("Content script loaded on LinkedIn.");

const newImageUrl = 'https://freelogopng.com/images/all_img/1656994883linkedin-logo-transparent.png'; // Ensure this URL is correct

function replaceProfileImages() {
    const images = document.querySelectorAll('img.ivm-view-attr__img--centered'); // Adjust selector as needed
    console.log(`Replacing ${images.length} images.`);

    images.forEach(img => {
        img.src = newImageUrl;
        if (img.srcset) {
            img.srcset = newImageUrl;
        }
    });
}

window.addEventListener('load', replaceProfileImages);
