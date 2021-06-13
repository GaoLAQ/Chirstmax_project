## Introduction

This site is some code we had that was a "work in progress" for a Christmas Subscriptions Site we had last year.

Scenario: The existing dev is away snowboarding, and you've been asked to fix a few things while they're off.

The site consists of two pages:
 - A home page, with 16 links on it
 - A store page, with three boxes advertising subscriptions: Print only, Digital, and Print and Digital

Here are the tickets you've been assigned: 

## Fix the Index page:

This is just some straightforward HTML and CSS, although you'll notice some JS in there for various bits of functionality.
Some of this is left over from a previous project, other bits are for future functionality. Just ignore anything that seems irrelevant for now.

So far, only the links for Cheshire Life, Cornwall Life and Cotswold Life have been set up, but in the meantime we need to fix a couple of more immediate issues.

1. Surrey Life logo is broken... it needs fixing!.<br>
**Solution:** svg close tag is missing, add svg close tag in Surrey Life logo  
2. The layout's a bit broken too. The links should be in a neat "grid".<br>
**Solution:** div close tag is wrong, fix div close tag in line 127 
Click on one of the functional links (Cheshire Life, Cornwall Life or Cotswold Life), and move on to the next part.

## Fix and amend the Store Page:

The Store Page uses Javascript and a bit of JSON to manipulate the page and populate the prices etc, so be careful here...

_Please note: the three "Subscribe Now" buttons on this page won't go anywhere (the offers were discontinued on Dec 31st), so You don't need to worry about those._

Here's what needs sorting out:

1. Swap Digital and Print boxes round, so "Print" is on the left and "Digital" is on the right.<br>
**Solution:** Change classname for "Print": from "order-lg-1" to "order-lg-3" , Change classname for "Digital": from "order-lg-3" to "order-lg-1" 
2. At the top of the page, you should see a gold brand logo, but there's a blank space instead. Why is this? Can you fix it?<br>
**Solution:** Issue is about: rendering brand logo twice, image is called additionally by lazy load on pageonload. As query string is modified, the problems solved  
3. Change "Printed gift card included" to "Printed Christmas card included"<br>
**Solution:** In store-page.html, change "Print gift card included" to "Printed Christmas card included". In christmas-offers.js, change ChristmaxAdditionalPoints.printAndDigital = ["Printed Christmas card included"]

4. What do you notice about the query strings and how they interact with the page?<br>
**Solution:**: use function getQueryVariable, window.location.search: retrieve the entire querystring from the curent URL, In this case, store-page.html?brand=cheshire is obtained, getQueryVariable

## Add Derbyshire Life store page

Our subs team are currently working out the offers for the rest of the sites, and they've just sent us the details of Derbyshire Life.
Extend the code to add another brand, using the details they sent us:

 - Site Name is "Derbyshire Life"
 - ID is "der"
 - Digital price: £40 for 12 months, saving 20%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1&prom=MMMXS20F
 - Print and Digital price: £41 for 12 months, saving 21%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1DI1&prom=MMMXS20F
 - Print price: £42 for 12 months, saving 22%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DI1&prom=MMMXS20F <br>

**Solution:**: Add "derbyshire": {... as required above} into assets/js/christmas-offers.js
![image](https://user-images.githubusercontent.com/61554320/121822433-facf9180-cc96-11eb-9023-bd1d68511770.png)

Is there anything else you need to complete this task? <br>
**Solution:**: Add "store-page.html?brand=derbyshire" a tag in index.html
![image](https://user-images.githubusercontent.com/61554320/121822360-b3e19c00-cc96-11eb-84c3-e437b1033362.png)

## Future investigation

The Back Office Team will be creating an API for fetching a dynamically-generated JSON file generated server-side that carries the individual brand offers and details.
This will save us having to manually adjust JS code every time they update an offer.

Don't amend any code for this part, instead answer the following questions below:
 - How would you approach fetching it using Javascript? Provide a small example of the kind of function you'd use.<br>
 **Solution:**: // Use fetch method <br>
                // If the resource is from URL <br>
                let response = fetch(url) <br>
                // response is Promise type, we can use the then() and catch() methods to handle It. <br>
                let response = fetch(url).then(res => res.json()).then(data => console.log(data))
 - What potential issues would you expect to encounter?
 **Solution:**: 
 1. Sometime, a problem would be caused by CORS policy. That has to be done by backend. 
       Solution： response.setHeader(“Access-Control-Allow-Origin, URL)
 2.	Mismatch MVC between front-end and backend 
 3.	Wrong port for http call or wrong data format (json, xml) 

 - What questions would you ask the Back Office Team to help you get started? <br> 
 <br>
 **Solution:** 
 1.	Discuss detailly about MVC design pattern 
 2.	‘Talk’ which architectures will be used either be Server-rendered apps and Communication using AJAX
 3.	‘Talk HTTP’(GET,POST,PUT,DELETE) I will ask which port I should call, what type of data I need to call, for instance json or XML. 
 4.	Take care about POST request, it will pass to the back-end encoded in the request body, the request can be by synchronous or asynchronous. 
 5.	Usually, front-end developer can send mock API files to backend team, that is easily share data format as expected from frontend
 
 - What tools could you use to test your API requests? <br> 
 **Solution:** I use Postman to test my API requests

## When you're done...

Add some notes at the bottom of this README file detailing your fixes.
Make a note of any other observations, missing bits or improvements. Unused classnames? Did you identify any redundant Javascript that could be removed?
Lastly, zip it all back and send it to gavin.holmes@archant.co.uk

Many thanks!

Gav



Answers from Haoxiang Gao 
