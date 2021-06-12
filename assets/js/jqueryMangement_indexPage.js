$(document).ready(function () {
  // any js to go here

  // Add div Tag
  var mainBody = $("#main");

  var divTag = $("<div></div>").attr({
    class: "col-6 col-sm-6 col-md-3",
  });
  mainBody.append(divTag);

  // Add a Tag
  var aTag = $("<a></a>").attr({
    class: "btn btn-block btn-primary mt-3",
    href: "store-page.html?brand=cheshire",
  });
  divTag.append(aTag);

  // Add Image Tag
  var imageTag = $("<img></img>").attr({
    class: "logo-svg-button",
    alt: "Logo",
    src: "assets/images/life-logos/cheshire-life.svg",
  });
  aTag.append(imageTag);

  // function generateHtml(){
  //    for(var i=0;i<subsrtibutionList.length; i++){
  //       console.log(subsrtibutionList)
  //    }
  // }

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

  if (getQueryVariable("brand")) {
    var BrandVar = getQueryVariable("brand");
    console.log("querystring for brand is present:" + BrandVar);

    // cornwall life
    if (BrandVar == "cl") {
      $(".stencil-image").attr(
        "src",
        "https://edition.pagesuite-professional.co.uk/get_image.aspx?w=250&pbid=0bfd7b03-d77e-496b-aca8-266d2160f6f2"
      );
    }
  }
});
