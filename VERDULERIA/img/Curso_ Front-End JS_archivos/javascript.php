
/**
 * theme.js
 * @package    theme_academiaba38
 * @copyright  2015 onwards LMSACE Dev Team (http://www.lmsace.com)
 * @author    LMSACE Dev Team
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
(function($){var img=$("nav#header").find('.avatar').find('img[src$="/u/f2"]');var src=img.attr('src');img.attr('src',src+"_white");if($("#header .navbar-nav button").attr('aria-expanded')==="true"){$("#header .navbar-nav").find('button').addClass('is-active')}
$("#header .navbar-nav button").click(function(){$this=$(this);setTimeout(function(){if($this.attr('aria-expanded')==="true"){$("#header .navbar-nav").find('button').addClass('is-active')}else{$("#header .navbar-nav").find('button').removeClass('is-active')}},200)});var foothtml=$('footer#page-footer').text();if($.trim(foothtml).length==0){$('footer#page-footer').addClass('empty-footer')}
addhtml=$('.address-head').text();if($.trim(addhtml).length==0){$('.address-head').addClass('empty-address')}})(jQuery)