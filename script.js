// Ждем, пока вся страница загрузится
document.addEventListener('DOMContentLoaded', function() {

    const btnTour = document.getElementById('btnTour');
    const tourModal = document.getElementById('tourModal');
    const closeTourModal = document.getElementById('closeTourModal');
    const tourVideoStage = document.getElementById('tourVideoStage');
    const tourLocationsStage = document.getElementById('tourLocationsStage');
    const tourIntroVideo = document.getElementById('tourIntroVideo');
    const skipTourVideo = document.getElementById('skipTourVideo');
    const tourChoiceButtons = document.querySelectorAll('.tour-choice-btn');

    function showTourLocations() {
        if (tourIntroVideo) {
            tourIntroVideo.pause();
        }
        if (tourVideoStage) {
            tourVideoStage.style.display = 'none';
        }
        if (tourLocationsStage) {
            tourLocationsStage.classList.add('visible');
        }
    }

    function openTourModal() {
        if (!tourModal) return;

        if (tourVideoStage) {
            tourVideoStage.style.display = 'flex';
        }
        if (tourLocationsStage) {
            tourLocationsStage.classList.remove('visible');
        }

        tourModal.classList.add('active');

        if (tourIntroVideo) {
            tourIntroVideo.currentTime = 0;
            const playPromise = tourIntroVideo.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(function() {
                    // Если видео не загрузилось или автовоспроизведение заблокировано,
                    // пользователь всё равно может нажать кнопку пропуска или перейти по ссылке
                });
            }
        }
    }

    function closeTourModalFn() {
        if (!tourModal) return;
        tourModal.classList.remove('active');
        if (tourIntroVideo) {
            tourIntroVideo.pause();
            tourIntroVideo.currentTime = 0;
        }
    }

    // 1. Кнопка "Виртуальный 360°-тур"
    if (btnTour) {
        btnTour.addEventListener('click', function() {
            openTourModal();
        });
    }

    if (closeTourModal) {
        closeTourModal.addEventListener('click', closeTourModalFn);
    }

    if (tourModal) {
        tourModal.addEventListener('click', function(event) {
            if (event.target === tourModal) {
                closeTourModalFn();
            }
        });
    }

    if (skipTourVideo) {
        skipTourVideo.addEventListener('click', showTourLocations);
    }

    if (tourIntroVideo) {
        // Автоматически показываем 3 кнопки по окончании видео (или ровно через 7 сек на случай метаданных)
        tourIntroVideo.addEventListener('ended', showTourLocations);
        tourIntroVideo.addEventListener('timeupdate', function() {
            if (tourIntroVideo.currentTime >= 7) {
                showTourLocations();
            }
        });
        tourIntroVideo.addEventListener('error', showTourLocations);
    }

    tourChoiceButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const url = button.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

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
