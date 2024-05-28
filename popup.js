document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.getElementById('changeButton');
    const imageUrlInput = document.getElementById('imageUrl');

    changeButton.addEventListener('click', function() {
        const imageUrl = imageUrlInput.value;
        if (imageUrl.trim()) {
            chrome.tabs.executeScript({
                code: `const imgs = document.querySelectorAll('img.EntityPhoto-circle-0');
                       imgs.forEach(img => {
                           img.src = '${imageUrl}';
                           img.srcset = '${imageUrl}';
                       });`
            });
        }
    });
});
