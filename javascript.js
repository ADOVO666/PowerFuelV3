document.getElementById("signIn").addEventListener("click", function() {
    alert("Функция входа на сайт ещё в разработке");
});



function handleScrollAnimation() {
    const animatedItems = document.querySelectorAll('.group-image, .group-text');
    
    animatedItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight - 100) {
            if (item.classList.contains('group-image')) {
                item.classList.add('animate__fadeInLeft');
            } else if (item.classList.contains('group-text')) {
                item.classList.add('animate__fadeInRight');
            }
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
