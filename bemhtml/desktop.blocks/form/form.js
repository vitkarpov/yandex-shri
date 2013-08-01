/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('form', {

    onSetMod : {

        'js' : function() {
            this._allInputs = this.elem('input').length;
            this._filledInputs = 0;
        }

    }

}, {

    live : function() {

        this.liveBindTo('input', 'change', function() {
        	var self = this;

        	this._filledInputs = 0;

        	this.elem('input').each(function(item) {
        		var _thisElem = $(this),
        				val = _thisElem.attr('value');

        		console.log(val.length > 0);		

        		if (val.length > 0) {
        			self._filledInputs++;
        		}	
        	});
       
        	this.elem('progress').width(self._filledInputs*100/self._allInputs + '%');
        });
    }

});

})();
