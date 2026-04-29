// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MHD7MG9");

var googleTagManager =
  "<!-- Google Tag Manager (noscript) -->" +
  '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHD7MG9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' +
  "<!-- End Google Tag Manager (noscript) -->";
$("body").prepend(googleTagManager);

var facebook_link = $('a[href*="facebook"]');
$(facebook_link).hide();
var twitter_link = $('a[href*="twitter"]');
$(twitter_link).hide();

var footer_links = $("#footer-links");
$(
  '<a href="https://truewayasl.com/terms/" target="_blank">TRUE+WAY ASL\'s Terms of Use</a> <a href="https://truewayasl.com/privacy/" target="_blank">TRUE+WAY ASL\'s Privacy Policy</a>'
).appendTo(footer_links);

if (window.location.pathname.includes("register")) {
  var agree = $("div.disambiguation_box p");

  var has_invite = agree.html().indexOf("ve been invited to join <strong>");

  if (has_invite > 0) {
    var html_position = agree.html().indexOf("</strong>. ") + 11;
    var html_string = agree.html().substr(0, html_position);

    agree.html(
      html_string +
        'To accept this request, please review TRUE+WAY ASL\'s <a href="https://truewayasl.com/terms/" target="_blank">Terms of Use</a> and <a href="https://truewayasl.com/privacy/" target="_blank">Privacy Policy</a>. If you agree, then click either button below.<br/><br/>'
    );
  }
}

if (window.location.pathname.includes("courses" && "settings") && window.ENV.current_user_roles.includes("admin")) {
} else {
  var export_link = $('a[href*="content_exports"]');
  $(export_link).hide();

  var copy_link = $('a[class*="copy_course_link"]');
  $(copy_link).hide();
}

if (window.location.pathname.includes("courses" && "content_migrations") && window.ENV.current_user_roles.includes("admin")) {
} else {
  $('select[id="chooseMigrationConverter"] option[value="course_copy_importer"]').remove();
}

if (window.location.pathname.includes("courses" && "users") && window.ENV.current_user_roles.includes("admin")) {
} else {
  var add_link = $('a[id="addUsers"]');
  $(add_link).hide();
}

if (window.location.pathname.includes("login") || window.location.pathname.includes("theme_editor")) {
  var login_body = $('div[class="ic-Login__body"]');
  login_body.append('<p style="color: var(--ic-brand-Login-Content-label-text-color);">Issues? Contact hello@truewayasl.com</p>');

  var footer = $('footer[id="footer"]');
  //footer.attr('style','display:none !important');
}

// display sprout videos in answers
if (window.location.pathname.includes("quizzes")) {
  let players = $("div.answer_html:has(iframe.sproutvideo-player)");
  for (var i = 0, max = players.length; i < max; i++) {
    players[i].style.width = "540px";
  }
}
