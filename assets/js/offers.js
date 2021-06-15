// To make it easy to replace the offers for different campaigns set offers and additionalPoints to the current campaign.
let offers = christmasOffers;
let additionalPoints = ChristmasAdditionalPoints;
let tAndC;

console.log(offers);
console.log(additionalPoints);
console.log("offer render first")


// Add any additional common bullet points
if(additionalPoints.digital !== [])
    additionalPoints.digital.forEach(point => {
        $('.digital-points').append(`<li>${point}</li>`);
    });

if(additionalPoints.printAndDigital !== [])
    additionalPoints.printAndDigital.forEach(point => {
        $('.pad-points').append(`<li>${point}</li>`);
    });

if(additionalPoints.print !== [])
    additionalPoints.print.forEach(point => {
        $('.print-points').append(`<li>${point}</li>`);
    });


// Gets the "brand=foobar" query string parameter
let queryString = new URLSearchParams(window.location.search);
if (queryString.get('brand')){
    console.log("get brand successfully")
    // Use jQuery to get the elements and amend text and URLs in the cards
    let thisBrand = queryString.get('brand');
    console.log("App: Brand is " + thisBrand);
    let thisOffer = offers[thisBrand];
    console.log(offers[thisBrand]);
    // console.log(thisOffer.digital.pricePointText);
    $(document).ready(function () {
        $('.digital-package-deal').text(thisOffer.digital.pricePointText);
        $('.digital-btn').attr("href", thisOffer.digital.url);
        $('.pad-package-deal').text(thisOffer.printAndDigital.pricePointText);
        // $('.pad-saving-text').text(thisOffer.printAndDigital.savingText);
        $('.pad-btn').attr("href", thisOffer.printAndDigital.url);
        $('.print-package-deal').text(thisOffer.print.pricePointText);
        // $('.print-saving-text').text(thisOffer.print.savingText);
        $('.print-btn').attr("href", thisOffer.print.url);
    })
    $('.christmas-logo').attr("src", "assets/images/life-logos/"+thisBrand+"-life-gold.svg");
} else {
    // The URL has "brand=something", handle error gracefully with a console log
    console.log(" we cannot get brand from query string")
}
  
