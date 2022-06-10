const langArr = {
    "screen-title": {
        "ru": "Безплатная психологическая поддержка украинцев",
        "ua": "Безкоштовна психологічна підтримка українців",
    },
    "screen-text": {
        "ru": "Война - это тяжило. Позволь помочь тебе хотя бы ментально.",
        "ua": "Війна — це тяжко. Дозволь тобі допомогти хоча б ментально.",
    },
    "consult-text": {
        "ru": "тип памяти",
        "ua": "Залиш заявку на безкоштовну психологічну підтримку вже зараз. Наш спеціаліст вам зателефонує та надасть психологічну допомогу.",
    },
    "consult-btn": {
        "ru": "тип системы охлаждения",
        "ua": "Отримати консультацію",
    },
}
const select = document.querySelector('.footer__language-select');
const allLang = ['ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value
    location.href = window.location.pathname + "#" + lang
    location.reload()
}
function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substring(1)
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + "#ua"
        select.value = "ua"
        location.reload()
    }
    else {
        select.value = hash
    }
    document.querySelector('title').innerHTML = langArr['screen-title'][hash]
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }

    }
}

changeLanguage()