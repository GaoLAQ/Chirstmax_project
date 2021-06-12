$(document).ready(function () {
  // any js to go here
  
  function generateElement() {
    const indexOffers = [
      {
        id: "1",
        imageURL: "assets/images/life-logos/cheshire-life.svg",
        queryKeyName: "cheshire",
      },
      {
        id: "2",
        imageURL: "assets/images/life-logos/cornwall-life.svg",
        queryKeyName: "cornwall",
      },
      {
        id: "3",
        imageURL: "assets/images/life-logos/cotswold-life.svg",
        queryKeyName: "cotswold",
      },
      {
        id: "4",
        imageURL: "assets/images/life-logos/derbyshire-life.svg",
        queryKeyName: "derbyshire",
      },
      {
        id: "5",
        imageURL: "assets/images/life-logos/devon-life.svg",
        queryKeyName: "devon",
      },
      {
        id: "6",
        imageURL: "assets/images/life-logos/dorset-life.svg",
        queryKeyName: "dorset",
      },
      {
        id: "7",
        imageURL: "assets/images/life-logos/essex-life.svg",
        queryKeyName: "essex",
      },
      {
        id: "8",
        imageURL: "assets/images/life-logos/hampshire-life.svg",
        queryKeyName: "hampshire",
      },
      {
        id: "9",
        imageURL: "assets/images/life-logos/hertfordshire-life.svg",
        queryKeyName: "hertfordshire",
      },
      {
        id: "10",
        imageURL: "assets/images/life-logos/kent-life.svg",
        queryKeyName: "kent",
      },
      {
        id: "11",
        imageURL: "assets/images/life-logos/norfolk.svg",
        queryKeyName: "norfolk",
      },
      {
        id: "12",
        imageURL: "assets/images/life-logos/somerset-life.svg",
        queryKeyName: "somerset",
      },
      {
        id: "13",
        imageURL: "assets/images/life-logos/suffolk-magazine.svg",
        queryKeyName: "suffolk",
      },
      {
        id: "14",
        imageURL: "assets/images/life-logos/surrey-life.svg",
        queryKeyName: "surrey",
      },
      {
        id: "15",
        imageURL: "assets/images/life-logos/sussex-life.svg",
        queryKeyName: "sussex",
      },
      {
        id: "16",
        imageURL: "assets/images/life-logos/yorkshire-life.svg",
        queryKeyName: "yorkshire",
      },
    ];
    indexOffers.forEach(function (child) {
      var list = $("#main").append(
        $("<div></div>")
          .attr({
            class: "col-6 col-sm-6 col-md-3",
          })
          .append(
            $("<a></a>")
              .attr({
                class: "btn btn-block btn-primary mt-3",
                href: "store-page.html?brand=" + child.queryKeyName.toString(),
              })
              .append(
                $("<img></img>").attr({
                  class: "logo-svg-button",
                  alt: "Logo",
                  src: child.imageURL.toString(),
                })
              )
          )
      );
      return list;
    });
  }
  generateElement();

  // function appendChildren(indexOffers) {}

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
