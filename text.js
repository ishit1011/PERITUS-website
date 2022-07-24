// 1. Change NAVBAR styles on scroll

window.addEventListener('scroll', () =>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// 2. Display and hide FAQs

const x = document.querySelectorAll('.faq');

x.forEach
(
    faq => 
    {
        faq.addEventListener(
            'click', () =>
            {
                faq.classList.toggle('open');

                // change ICON
                const icon = faq.querySelector('.faq__icon i');

                if(icon.className === 'uil uil-plus')
                    {icon.className = "uil uil-minus"
                }
                else{
                    icon.className = "uil uil-plus"
                }
            }
        )
    }
)

// 3. Display and hide NAVBAR Dropdown Menu

const menu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


//This function is used to do 3 things
// a) open the drop down menu
// b) hide the open button
// c) display the close button

openBtn.addEventListener('click', () => 
{
    menu.style.display =  "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
})

//This function is used to do 3 things
// a) close the drop down menu
// b) display the open button
// c) hide the close button

closeBtn.addEventListener('click', () => 
{
    menu.style.display =  "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
})