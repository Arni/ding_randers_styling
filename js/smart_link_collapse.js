(function (scope, $) {
 /**
 * Initially collapse sub menu when on mobile.
 */
Drupal.behaviors.smart_link_collapse = {
  attach: function(context, settings, evt) {
    if ($('.is-mobile').is(':visible')) {
      if (!$('fieldset.group-smart-linkwrapper').hasClass("collapsed")) {
        $('fieldset.group-smart-linkwrapper a.fieldset-title').trigger('click');
      }
        //$('fieldset.group-smart-linkwrapper a.fieldset-title').text('Links');
    }
  }
};

})(this, jQuery);
