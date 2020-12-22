import Tabby from 'tabbyjs';

document.addEventListener('DOMContentLoaded', function() {

    const tabSelectors = document.querySelectorAll('[data-tabs]');

    if (tabSelectors.length) {
        for (const [i, tabs] of [...tabSelectors].entries()) {
            tabs.setAttribute(`data-tabs-${i}`, '');
            new Tabby(`[data-tabs-${i}]`);
        }
    }
});