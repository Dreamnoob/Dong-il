/* const tabs = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.content__item');
const tabParent = document.querySelector('.tabs__list');
const contentList = document.querySelectorAll('.content__list');

let windowWidth;

function hideTabContent() {
    tabsContent.forEach(item => {
        item.style.maxHeight = 0;
    });
    tabs.forEach(item => {
        item.classList.remove('active');
    });
}

function showTabContent(i = 0) {
    if (tabsContent.length != 0) {
        tabs[i].classList.add('active');
        tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px";
    }
}

function checkWindowWidth() {
    windowWidth = window.innerWidth;

    if (windowWidth >= 769) {
        $(tabsContent).appendTo(contentList);
    } else {
        for (let i = 0; i < tabsContent.length; i++) {
            $(tabsContent[i]).appendTo((tabs[i]));
        }
    }
}

function initTabs() {
    checkWindowWidth();

    hideTabContent();
    showTabContent();
}


initTabs();

if (tabParent != null) {
    tabParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabs__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

window.addEventListener('resize', () => {
    checkWindowWidth();

    tabs.forEach((item, i) => {
        if (item.classList.contains('active')) {
            tabsContent[i].style.maxHeight = tabsContent[i].scrollHeight + "px";
        }
    });
});


 */