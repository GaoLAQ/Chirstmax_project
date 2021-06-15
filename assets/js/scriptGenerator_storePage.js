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

  // Add repeated html
  // GenerateJson
  const indexCardOffers = [
    {
      target: "#print_digital",
      subTarget: "sub_print_digital",
      title: "Print &amp Digital",
      cardText: "Printed monthly magazine with E-Edition",
      type: "featured",
      items: [
        { subitem: "Free UK delivery" },
        { subitem: "Digital edition" },
        { subitem: "Available on mobile and web" },
      ],
    },
    {
      target: "#print",
      subTarget: "sub_print",
      title: "Print",
      cardText: "Printed monthly magazine with E-Edition",
      type: "standard",
      items: [
        { subitem: "Free UK delivery" },
        { subitem: "Printed gift card included" },
      ],
    },
    {
      target: "#digital",
      subTarget: "sub_digital",
      title: "Digital",
      cardText: "Monthly E-Edition",
      type: "standard",
      items: [
        { subitem: "Digital edition" },
        { subitem: "Available on mobile and web" },
      ],
    },
  ];
  // GenerateHTML
  indexCardOffers.forEach(function (child) {
    $(`${child.target}`).append(
      `<div class="card card-default card-${child.type} w-100" id='bestValue'>
          <div class="card-body">
          <p class="card-title text-center package-title">${child.title}</p>
          <p class="card-text text-center package-type">
            ${child.cardText}
          </p>
          <p class="card-text text-center package-deal pad-package-deal"></p>
          <a
            href=""
            target="_blank"
            class="btn btn-primary btn-block btn-subscribe pad-btn"
            rel="noopener"
            >Subscribe Now</a
          >
          <div class="included-container">
            <p class="card-text">What's included</p>
            <ul class="included-list pad-points">
              <li class= "pad-saving-text" id="${child.subTarget}"></li>
            </ul>
          </div>
          </div>
        </div>`
    );
    if (child.subTarget ==='sub_print_digital'){
      $('#bestValue').prepend(
        `<div class="card-header text-center best-value">Best Value</div>`
      )

    }

    child.items.forEach(function (smallChild) {
      $(`#${child.subTarget}`).append(
        `<li> ${smallChild.subitem} </li>`
      );
    }
    );
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
