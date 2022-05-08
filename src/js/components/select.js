
function toggleSelect() {
    const selectTop = document.querySelectorAll('.select__top');

    selectTop.forEach(item => {
        item.addEventListener('click', function (e) {
            let parent = this.closest('.select');
            let currentSelectContent = parent.querySelector('.select__content');
            let currentSelectTop = parent.querySelector('.select__top');
            let selectItem = parent.querySelectorAll('.select__content-item');
            let mainInput = parent.querySelector('.select__main-input');
            let mainImg = parent.querySelector('.select__main-img');


            let allSelectTop = document.querySelectorAll('.select__top');
            let allSelectContent = document.querySelectorAll('.select__content');

            allSelectTop.forEach((item, i) => {
                if (item != currentSelectTop) {
                    item.classList.remove('active');
                    allSelectContent[i].classList.remove('active');
                } else {
                    currentSelectTop.classList.toggle('active');
                    currentSelectContent.classList.toggle('active');
                }
            });


            selectItem.forEach(item => {
                item.addEventListener('click', function () {
                    let currentSelectName = this.querySelector('.select__content-name').innerText;

                    if (this.querySelector('.select__content-img')) {
                        let currentSelectImg = this.querySelector('.select__content-img').getAttribute('src');
                        mainImg.setAttribute('src', currentSelectImg);
                    }

                    mainInput.value = currentSelectName;
                    currentSelectTop.classList.remove('active');
                    currentSelectContent.classList.remove('active');
                });
            });
        });
    });
}

toggleSelect();

function closeSelect() {
    const select = document.querySelectorAll('.select');

    if (select.length != 0) {
        document.addEventListener('click', (e) => {

            select.forEach(item => {
                let withinBoundaries = e.composedPath().includes(item);

                if (!withinBoundaries) {
                    let currentSelectContent = item.querySelector('.select__content');
                    let currentSelectTop = item.querySelector('.select__top');

                    currentSelectTop.classList.remove('active');
                    currentSelectContent.classList.remove('active');
                }
            });
        });
    }
}

closeSelect();
