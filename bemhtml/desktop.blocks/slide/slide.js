/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('slide', {}, {

    live : function() {
        this.liveBindTo('switcher', 'click', function() {
        	this.toggleMod('closed', 'yes');
        });
    }

});

})();
