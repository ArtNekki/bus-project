function hideSteps(steps) {
    steps.forEach(step => {
        step.style.display="none";
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 5,
        // behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 0;

    const calcSteps = document.querySelector('.calc-steps');
    const stepPoints = document.querySelectorAll('.calc-steps__item');
    const steps = document.querySelectorAll('[data-step-content]');
    
    steps[currentStep].style.display = 'block';
    
    const nextStep = document.getElementById('nextStep');
    const backStep = document.getElementById('backStep');

    nextStep.addEventListener('click', function() {
        hideSteps(steps);
        scrollToTop(calcSteps);

        if (!stepPoints[currentStep]) return;

        stepPoints[currentStep].classList.add('done');
        stepPoints[currentStep].classList.remove('active');

        currentStep++;

        console.log('currentStep', currentStep);

        if (currentStep >= 1) {
            backStep.style.display = 'flex';
        }

        if (stepPoints[currentStep]) {
            stepPoints[currentStep].classList.add('active');
        }

        if (steps[currentStep]) {
            steps[currentStep].style.display = 'block';
        }
    });

    backStep.addEventListener('click', function() {
        hideSteps(steps);
        scrollToTop(calcSteps);

        if (stepPoints[currentStep]) {
            stepPoints[currentStep].classList.remove('done');
            stepPoints[currentStep].classList.remove('active');
        }

        if (currentStep <= 1) {
            this.style.display = 'none';
        }

        currentStep--;

        if (stepPoints[currentStep]) {
            stepPoints[currentStep].classList.remove('done');
            stepPoints[currentStep].classList.add('active');
        }

        if (steps[currentStep]) {
            steps[currentStep].style.display = 'block';
        } else {
            steps[0].style.display = 'block';
        }
    });
});