Вариант верстки с использованием шаблонизатора *bemhtml* и *bem tools*

### Описание и структура

На проекте два уровня переопределения: desktop.blocks и desktop.bundles
Последний используется в простом варианте — содержит страницу index

Проект развернут с *project-stub* так, что все конфиги стандартные

Подключены библиотека контролов и *bem-bl*

Здесь я использую *bem-control* для чекбоксов и кнопок.

Библиотечные блоки на уровне переопределения *desktop.blocks* кастомизуются под страничку.

### Блок form

Более или менее сложный шаблон написал для блока *form*.

В bemjson-описании блока есть поле *questions*, которое преобразуется определенным образом в шаблоне.

Вот шаблон для формы:

		block form {
			tag: 'form',
			content: {
				var questions = this.ctx.questions,
						content = [];

				content.push({
					elem: 'fieldset',
					content: []
				});

				questions.forEach(function(item, i) {
					content[0].content.push({
						elem: 'line',
						type: item.type,
						validation: item.validation,
						text: item.text,
						num: i + 1,
						checkboxes: item.checkboxes
					});
				}); 

				content.push(this.ctx.content);

				return content;
			}	
		}

Как видно, добавляется элемент *fieldset*, в его контенте оказываются элементы *line* определенные в *questions*, в нужном количестве (questions разбирается в цикле). 

В самом конце добавляется контент из входного БЭМ-дерева, чтобы можно было определить еще что-нибудь в bemjson-описании страницы.

В данном случае, там определяется еще один fieldset с кнопками.

Для каждого объявленного элемента есть свои шаблоны, которые для простоты лежат здесь же, в файле *form.bemhtml*

Вот, например, элемент *input* с обработкой полей type и validation

		//form input elements
		//could be text input or textarea
		//depended on type param
		block form, elem input {
			tag: {
				var ctx = this.ctx;

				if (ctx.type == 'textarea') {
					return 'textarea';
				} else {
					return 'input';
				}
			}

			attrs: {
				var result = {},
						ctx = this.ctx,
						props = ctx.validation;

				for (prop in props) {
					if (props.hasOwnProperty(prop)) result[prop] = props[prop];
				}
				
				if (this.ctx.type !== 'textarea') {
					result.type = ctx.type;
				} else {
					result.rows = 6;
				}

				return result;
			}
		}	

При подготовке использовал: 
* [справку по bemhtml](http://bem.github.io/bem-bl/pages/bemhtml-syntax/bemhtml-syntax.ru.html);
* статьи с [bem.info](http://bem.info/);
* [пост Вари Степановой на Хабре](http://habrahabr.ru/post/162385/).		