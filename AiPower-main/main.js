let images = document.querySelectorAll('.album');
let index = 0;

function updateAlbum() {
    // Remove the 'center' class from all images
    images.forEach(image => image.classList.remove('center'));

    // Add 'center' class to the current image
    images[index].classList.add('center');

    // Update index to the next image, looping back to the first if at the end
    index = (index + 1) % images.length;
}

// Run the updateAlbum function every 5 seconds
setInterval(updateAlbum, 5000);

// Initialize the first image as the center
updateAlbum();

function showSildebar() {
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    
}

function showBar() {
    const sidebar= document.querySelector('.secBar')
    sidebar.style.display = 'flex'
}

function hideBar() {
    const sidebar= document.querySelector('.secBar')
    sidebar.style.display = 'none'
    firstBar.style.display = 'none'
}

function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}
function toggleMenu(index) {
    let submenus = document.querySelectorAll(".subMenu");

    submenus.forEach((subMenu, i) => {
        if (i === index) {
            subMenu.classList.toggle("open");
        } else {
            subMenu.classList.remove("open");
        }
    });
}