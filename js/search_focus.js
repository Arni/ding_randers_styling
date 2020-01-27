(function (scope, $) {
 /**
 * Initially set focus in search field.
 */
Drupal.behaviors.search_focus = {
  attach: function(context, settings, evt) {
    if ($('#edit-search-block-form--2')) {
      $('#edit-search-block-form--2').focus();
    }
  }
};

})(this, jQuery);
