(function (scope, $) {
 /**
 * Initially collapse sub menu when on mobile.
 */
Drupal.behaviors.sub_menu_collapse = {
  attach: function(context, settings) {
    if ($('.is-tablet').is(':visible')) {
      var style = $('.pane-menu-block-3 ul').attr('style');
      if (typeof style == typeof undefined || style == false) {
        $('.pane-menu-block-3 .sub-menu-title').parent().find('ul').slideToggle("fast");
      }
    }
  }
};

})(this, jQuery);
