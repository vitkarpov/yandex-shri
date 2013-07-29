class Slider

	constructor: (wrapper) ->
		@wrapper = $ wrapper
		@switcher = $ '.' + @classes.switcher, @wrapper

		@init()


	classes:
		switcher: 'form__switcher'
		stateClosed: 'form__line_closed'


	init: () ->
		@switcher.click $.proxy @toggleHandler, @


	toggleHandler: () ->
		state = @switcher.data('state')
		if state == 'closed'
			@wrapper.removeClass(@classes.stateClosed)
			@switcher.data('state', 'opened')	
		else
			@wrapper.addClass(@classes.stateClosed)
			@switcher.data('state', 'closed')

$('.form__line').each () ->
	new Slider @			

