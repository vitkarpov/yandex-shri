(function() {
  var Slider;

  Slider = (function() {
    function Slider(wrapper) {
      this.wrapper = $(wrapper);
      this.switcher = $('.' + this.classes.switcher, this.wrapper);
      this.content = $('.' + this.classes.content, this.wrapper);
      this.init();
    }

    Slider.prototype.classes = {
      switcher: 'form__switcher',
      content: 'form__content',
      stateClosed: 'form__line_closed'
    };

    Slider.prototype.init = function() {
      return this.switcher.click($.proxy(this.toggleHandler, this));
    };

    Slider.prototype.toggleHandler = function() {
      var state;
      state = this.switcher.data('state');
      if (state === 'closed') {
        this.wrapper.removeClass(this.classes.stateClosed);
        return this.switcher.data('state', 'opened');
      } else {
        this.wrapper.addClass(this.classes.stateClosed);
        return this.switcher.data('state', 'closed');
      }
    };

    return Slider;

  })();

  $('.form__line').each(function() {
    return new Slider(this);
  });

  $('.form').addClass('form_js_inited');

}).call(this);
