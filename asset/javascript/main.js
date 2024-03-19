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
        onscroll = (this.scrollY >= 50)? document.body.classList.add('show-header-box')
        : document.body.classList.remove('show-header-box');
    }

    window.addEventListener('scroll', headerScroll);

  

    // NAVIGATION BAR! */

    const openMenu = document.getElementById('menu'),
        openIcon = document.getElementById('menu-toggle')

     openMenu.addEventListener('click', () => {
            document.body.classList.toggle('open')
        });

    openIcon.addEventListener('click', () => {
        document.body.classList.toggle('open-icon')
    })


/*     const closeNav = document.querySelectorAll('.nav-links')

    close.foreach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('open')
        })
    }) */


    /* THEME TOGGLE */

    

    const themeToggle = document.getElementById('theme-toggle'),
            themeIcon = document.getElementById('theme-icon');

   
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle("letDark-theme-toggle");
        });

        themeIcon.addEventListener('click', () => {
            document.body.classList.toggle("change-theme-icon");
        });
    


        /* BUILDER LIINK */
        
        const myLink = document.querySelector(".builder-social")
        function myTwitter() {
            myLink.addEventListener('click', () => {
            window.location.href = 'https://twitter.com/davistheweb'
            })
        }

        myTwitter()
    

       /*  const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'vertical',
            loop: true,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          }); */
//END!//