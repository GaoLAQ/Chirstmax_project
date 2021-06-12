(function (src) {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.async = true;
  a.src = src;
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
})("//sandbox.tinypass.com/xbuilder/experience/load?aid=1h4cjpLgsu");

$(document).ready(function () {
  $(function () {
    $(".lazy").Lazy();
  });

  // here for loading fonts in a non render blocking manner / speed hack

  function addGoogleFont(FontName) {
    $("head").append(
      "<link href='https://fonts.googleapis.com/css?family=" +
        FontName +
        "' rel='stylesheet' type='text/css'>"
    );
  }

  addGoogleFont("PT+Serif:wght@400;700&display=swap"); // PT Serif

  // code from gav
  (function (src) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.async = true;
    a.src = src;
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b);
  })("//sandbox.tinypass.com/xbuilder/experience/load?aid=1h4cjpLgsu");
  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/COTSWOLD-LIFE.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/COTSWOLD-LIFE-v2.svg");
    }
  });

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == variable) {
        return pair[1];
      }
    }
    return false;
  }
  if (getQueryVariable("offercode")) {
    var OfferCode = getQueryVariable("offercode");
    console.log("querystring for OfferCode is present:" + OfferCode);

    // EMAIL
    if (OfferCode == "email") {
      $("a.print-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTL&prom=GCTLPO2A"
      );
      $("a.print-digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTLCD1&prom=GCTLPD2C"
      );
      $("a.digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CD1&prom=GCTLDO2B"
      );
    }
    // PPC
    if (OfferCode == "ppc") {
      $("a.print-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTL&prom=6CTLPO2A"
      );
      $("a.print-digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTLCD1&prom=6CTLPD2C"
      );
      $("a.digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CD1&prom=6CTLDO2B"
      );
    }
    // SOCIAL MEDIA
    if (OfferCode == "socialmedia") {
      $("a.print-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTL&prom=XCTLPO2A"
      );
      $("a.print-digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTLCD1&prom=XCTLPD2C"
      );
      $("a.digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CD1&prom=XCTLDO2B"
      );
    }
    // BRANDWEB
    if (OfferCode == "socialmedia") {
      $("a.print-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTL&prom=MCTLPO2A"
      );
      $("a.print-digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CTLCD1&prom=MCTLPD2C"
      );
      $("a.digital-link").attr(
        "href",
        "https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=CD1&prom=MCTLDO2B"
      );
    }
  }

  var myVar = setInterval(myTimer, 2000);

  function myTimer() {
    $(".preloader").remove();
  }
});
