Вариант верстки с использование [шаблонизатора Jade](http://jade-lang.com/)

## О структуре и сборке

Страничка сверстана на независимых блоках с использованием **grunt.js** в качестве сборщика проекта, **jade** в качестве шаблонизатора, а также **stylus**, который помогает писать стили выразительнее и эффективнее, аналогичные задачи решает **coffeescript** в случае с джаваскриптом.

Существует две версии проекта — *dev* и *build*, которые лежат в соответствующих папках

**grunt.js** преобразует структуру проекта для работы в браузере, для этого используются следующие таски:

* *jade* накладывает данные на шаблоны, возвращает разметку
* *stylus* компилирует стилус в ЦСС
* *coffee* компилирует кофескрипт в джаваскрипт
* *uglify* используется в билдовой версии для минификации джаваскрипта
* *cssmin* сжимает ЦСС
* *copy* копирует картинки блоков в билдовую версию
* *concat* склеивает джаваскриптовые jquery-плагины, которые, возможно, нужны блокам, в один файл
* *watch* «следит» за изменениями необходимых файлов, пересобирает проект автоматически

В билдовой версии ХТМЛ, стили и джаваскрипт, которые попадают в браузер минифицируются. Если у блоков были картинки, то они копируются с сохранением структуры в папке блоков (чтобы пути до картинок были верными), все остальное удаляется.

В данном случае, единственная картинка — фон страницы, я закодировал в base64 и подключил через data-uri, таким образом картинки и папка b в билдовой версии не нужны.

Чтобы собрать проект, нужно установить все зависимости через npm, а после выполнить

		$ grunt

Грантовый конфиг и идея стека технологий — [html-scaffold](https://github.com/oleggromov/html-scaffold)

## Описание основных моментов

В папке *tpl* 2 шаблона — *layout* определяет раскладку страницы, а *index* саму страницу, второй шаблон экстендит первый (подтягивается шапка и футер). 

В jade вставлять блоки в другие блоки можно с помощью ключевого слова *block*, примерно таким образом:

		mixin button
			.button
				//- разметка блока
				...
				block

Далее в клиентском коде я могу вызвать миксин и вложить текст кнопки или любой другой html-контент:
		
		...
		+button
			| Привет, я кнопка!




На проекте всего 4 блока:

* layout
* form
* button
* text

#### layout

Определяет раскладку страницы, сюда относятся шапка и футер.

Определены миксины **+layout__header** и **+layout__footer**, чтобы инкапсулировать содержимое шапки и футера страницы.

#### form

Реализует форму.

Определены миксины **+form__question** — один «строка» с вопросом, **+form__checkbox** — чекбокс рядом с подписью

#### button

Реализует кнопки страницы, которые используются в форме

#### text

Текстовый блок, внутри которого застилизованы элементы p, b, i, blockquote и т.д. (без классов, с использованием каскада).
