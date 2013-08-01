({
    block: 'b-page',
    title: 'Анкета-форма для поступающих в ШРИ 2013',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'css', url: 'http://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&amp;subset=latin,cyrillic' }
    ],
    content:[
        {
            block: 'layout',
            content: [
                {
                    elem: 'header',
                    content: [
                        {
                            elem: 'caption',
                            content: 'Анкета-форма для поступающих в ШРИ 2013'
                        }
                    ]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'form',
                            attrs: {
                                action: '#'
                            },
                            questions: [
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Год рождения'
                                        }
                                    ],
                                    type: 'date',
                                    validation: {
                                        required: true,
                                        min: "1920-01-01",
                                        max: "1995-09-07"
                                    }
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Город'
                                        }
                                    ],
                                    validation: {
                                        required: true
                                    },
                                    type: 'input'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Вуз, факультет, специальность, кафедра'
                                        }
                                    ],
                                    type: 'input'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Год окончания вуза'
                                        }
                                    ],
                                    validation: {
                                        required: false,
                                        max: "2014"
                                    },
                                    type: 'number'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Уровень владения английским'
                                        }
                                    ],
                                    checkboxes: ['начальный', 'средний', 'высокий'],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Чего вы хотите от участия в Школе?'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Откуда вы о нас узнали?'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Расскажите о вашем опыте разработки.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Нам будет интересно всё — как серьезный интерфейс, так и просто домашняя страничка.'
                                        }
                                    ],
                                    validation: {
                                        required: true
                                    },
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make).'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью?'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?'
                                        }
                                    ],
                                    type: 'textarea'
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа'
                                        },
                                        {
                                            elem: 'blockquote',
                                            content: '4! + 0! + 5! + 8! + 5! = 40585'
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                "В качестве ответа на вопрос пришлите ссылку на ",
                                                {
                                                    block: 'b-link',
                                                    url: 'http://jsfiddle.net/',
                                                    content: 'http://jsfiddle.net/'
                                                },
                                                " с вашим кодом или на ваш репозиторий на ",
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/',
                                                    content: 'https://github.com/'
                                                },
                                                "."
                                            ]
                                        }
                                    ],
                                    type: 'textarea',
                                    validation: {
                                        required: true
                                    }
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить.'
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                {
                                                    elem: 'b',
                                                    content: 'Задание'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.'
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                "Полное условие задачи доступно на ",
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/yandex-shri/introtask-space',
                                                    content: 'https://github.com/yandex-shri/introtask-space'
                                                },
                                                "."
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                'В качестве ответа на вопрос пришлите ссылку на ',
                                                {
                                                    block: 'b-link',
                                                    url: 'http://jsfiddle.net/',
                                                    content: 'http://jsfiddle.net/'
                                                },
                                                " с вашим кодом или на ваш репозиторий на ",
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/',
                                                    content: 'https://github.com/'
                                                },
                                                "."
                                            ]
                                        }
                                    ],
                                    type: 'textarea',
                                    validation: {
                                        required: true
                                    }
                                },
                                {
                                    text: [
                                        {
                                            elem: 'p',
                                            content: 'Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Это может быть:'
                                        },
                                        {
                                            elem: 'ul',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'проверка полноты и правильности заполнения полей (где это возможно);'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'возможность свернуть и развернуть разделы (аккордеон);'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'возможность свернуть и развернуть разделы (аккордеон);'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'индикатор заполнения анкеты;'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'что-нибудь еще.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Будет плюсом, если вы сверстаете страницу, используя БЭМ.'
                                        },
                                        {
                                            elem: 'p',
                                            content: 'Дополнительные задания:'
                                        },
                                        {
                                            elem: 'ol',
                                            content: [
                                                {
                                                    elem: 'li',
                                                    content: 'Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.'
                                                },
                                                {
                                                    elem: 'li',
                                                    content: 'Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'p',
                                            content: [
                                                "Разработку необходимо вести на ",
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/',
                                                    content: 'https://github.com/'
                                                },
                                                ". В качестве ответа на вопрос пришлите ссылку на проект."
                                            ]
                                        }
                                    ],
                                    type: 'textarea'
                                }
                            ],
                            content: [
                                {
                                    elem: 'fieldset',
                                    mods: { buttons: 'yes' },
                                    content: [
                                        {
                                            block: 'button',
                                            mods: { type: 'cancel' },
                                            attrs: { type: 'cancel' },
                                            content: 'Отмена'
                                        },
                                        {
                                            block: 'button',
                                            mods: { type: 'ok' },
                                            attrs: { type: 'ok' },
                                            type: 'submit',
                                            content: 'Сохранить'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'footer',
                    content: [
                        {
                            elem: 'copyrights',
                            about: 'Страничку сверстал #author# в 2013 году',
                            url: 'http://vitkarpov.github.io/',
                            author: 'Виктор Карпов'
                        }
                    ]
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})
