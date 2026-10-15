// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', function() {

    // 1. Кнопка "Виртуальный 360°-тур"
    const btnTour = document.getElementById('btnTour');
    if (btnTour) {
        btnTour.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://realty.yandex.ru/d3-embedded/player/1b64cc52-f595-4d30-9ecb-f7eafd748ceb', '_blank');
        });
    }

    // 2. Кнопка "Начать тест-драйв"
    const btnTestDrive = document.getElementById('btnTestDrive');
    if (btnTestDrive) {
        btnTestDrive.addEventListener('click', function() {
            // Переходим на новую страницу в той же вкладке
            window.location.href = 'testdrive.html';
        });
    }

    // 3. Кнопка "Узнать больше"
    const btnMore = document.getElementById('btnMore');
    if (btnMore) {
        btnMore.addEventListener('click', function() {
            // Открываем ссылку в новой вкладке
            window.open('https://www.abit.bgut.by/', '_blank');
        });
    }

});
