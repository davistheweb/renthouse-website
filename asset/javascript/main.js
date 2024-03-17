//START!//

// Change title when user switches tab

const getTitle = document.title
    window.addEventListener('blur',  () => {
        document.title = "Back to Rent home"
        console.log("Tab is on blur")
    })

    window.addEventListener('focus', () =>{
        document.title = getTitle
        console.log("Tab is on focus")
    })

    // PRELOADER JAVASCRIPT!


    /* const loader = document.getElementById('preloader')

    setTimeout( () => {
        loader.style.display = "none";
    },2600) */

    const loader = document.getElementById('preloader');

// Function to hide the loader after a specified delay
function hideLoader() {
    loader.style.display = "none";
}

// Check if the navigator.connection API is supported
if (navigator.connection) {
    const connection = navigator.connection;

    // Check the type of network connection
    if (connection.effectiveType === '4g') {
        // If the user is on 4G, reduce the timeout
        setTimeout(hideLoader, 2000); // Adjust the timeout as needed
    } else {
        // For other network types, use the default timeout
        setTimeout(hideLoader, 2600);
    }
} else {
    // If navigator.connection API is not supported, use default timeout
    setTimeout(hideLoader, 2600);
}


/* SHOW HEADER BOX SHADOW*/
    
    function headerScroll(){
        
        const header = document.querySelector('.header');
        header = (this.scrollY >= 50)? document.body.classList.add('show-header-box')
        : document.body.classList.remove('show-header-box');
    }

    window.onscroll = headerScroll;

 

    // NAVIGATION BAR! */

    const openMenu = document.getElementById('menu'),
        openIcon = document.getElementById('menu-toggle')

     openMenu.addEventListener('click', () => {
            document.body.classList.toggle('open')
        });

    openIcon.addEventListener('click', () => {
        document.body.classList.toggle('open-icon')
    })


    const closeNav = doucment.querySelectorAll('.nav-links')

    close.foreach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('open')
        })
    })
    
//END!//