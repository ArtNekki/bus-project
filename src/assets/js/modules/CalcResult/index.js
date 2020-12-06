function addScroll($el) {
    const top = $el.getBoundingClientRect().top;
    console.log('top', top);

    if (top <= 85) {
        $el.style.overflowY = 'auto';
    } else {
        $el.style.overflowY = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {

    let sidebarIsActive = false;
    let $sidebar = document.querySelector('.calc-result');
    let $details = $sidebar.querySelector('.calc-result__details')
    let $sidebarToggle = document.querySelector('.calc-result__collapse');

    $sidebarToggle.addEventListener('click', function() {
        if (sidebarIsActive) {
            $sidebar.classList.remove('active');
            document.documentElement.classList.remove('page--no-scroll');
            sidebarIsActive = false;
        } else {
            $sidebar.classList.add('active');
            document.documentElement.classList.add('page--no-scroll');
            sidebarIsActive = true;
        }

        // addScroll($details);
    });
});