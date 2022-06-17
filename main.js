const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        // 計時50毫秒後，才轉成opacity = 1
        setTimeout(() => { main.style.opacity = 1 }, 50)

    }, 1000)
}

init();