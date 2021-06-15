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

1. Surrey Life logo is broken... it needs fixing!

2. The layout's a bit broken too. The links should be in a neat "grid".

Click on one of the functional links (Cheshire Life, Cornwall Life or Cotswold Life), and move on to the next part.

## Fix and amend the Store Page:

The Store Page uses Javascript and a bit of JSON to manipulate the page and populate the prices etc, so be careful here...

_Please note: the three "Subscribe Now" buttons on this page won't go anywhere (the offers were discontinued on Dec 31st), so You don't need to worry about those._

Here's what needs sorting out:

1. Swap Digital and Print boxes round, so "Print" is on the left and "Digital" is on the right.
2. At the top of the page, you should see a gold brand logo, but there's a blank space instead. Why is this? Can you fix it?
3. Change "Printed gift card included" to "Printed Christmas card included"
4. What do you notice about the query strings and how they interact with the page?

## Add Derbyshire Life store page

Our subs team are currently working out the offers for the rest of the sites, and they've just sent us the details of Derbyshire Life.
Extend the code to add another brand, using the details they sent us:

- Site Name is "Derbyshire Life"
- ID is "der"
- Digital price: £40 for 12 months, saving 20%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1&prom=MMMXS20F
- Print and Digital price: £41 for 12 months, saving 21%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DL1DI1&prom=MMMXS20F
- Print price: £42 for 12 months, saving 22%, URL is https://www.subscription.co.uk/archant/checkout/SingleItem?publ=ARCH&pubc=DI1&prom=MMMXS20F

Is there anything else you need to complete this task?

## Future investigation

The Back Office Team will be creating an API for fetching a dynamically-generated JSON file generated server-side that carries the individual brand offers and details.
This will save us having to manually adjust JS code every time they update an offer.

Don't amend any code for this part, instead answer the following questions below:

- How would you approach fetching it using Javascript? Provide a small example of the kind of function you'd use.
- What potential issues would you expect to encounter?
- What questions would you ask the Back Office Team to help you get started?
- What tools could you use to test your API requests?

## When you're done...

Add some notes at the bottom of this README file detailing your fixes.
Make a note of any other observations, missing bits or improvements. Unused classnames? Did you identify any redundant Javascript that could be removed?
Lastly, zip it all back and send it to gavin.holmes@archant.co.uk

Many thanks!

Gav

## Answers from Haoxiang Gao

## Fix the Index page:

1. Surrey Life logo is broken... it needs fixing!.<br>
   **Solution:** svg close tag is missing, add svg close tag in Surrey Life logo
   ![image](https://user-images.githubusercontent.com/61554320/121823097-f73e0980-cc9a-11eb-9f10-4e3d48466c1d.png)
2. The layout's a bit broken too. The links should be in a neat "grid".<br>
   **Solution:** div close tag is wrong, fix div close tag in line 127
   ![image](https://user-images.githubusercontent.com/61554320/121823127-13da4180-cc9b-11eb-856d-c649ee9895a6.png)

## Fix and amend the Store Page:

1. Swap Digital and Print boxes round, so "Print" is on the left and "Digital" is on the right.<br>
   **Solution:** Change class name for "Print": from "order-lg-1" to "order-lg-3" , Change class name for "Digital": from "order-lg-3" to "order-lg-1"
   ![image](https://user-images.githubusercontent.com/61554320/121823155-353b2d80-cc9b-11eb-9b5c-534b311c3a27.png)

2. At the top of the page, you should see a gold brand logo, but there's a blank space instead. Why is this? Can you fix it?<br>
   **Solution:** Issue happen in line 48, offers.js. Change src from "assets/images/life-logos/"+thisBrand+"-life.svg" to "assets/images/life-logos/"+thisBrand+"-life-gold.svg".<br>
   Because the origin one image is colourless, it rendered but cannot see it

3. Change "Printed gift card included" to "Printed Christmas card included"<br>
   **Solution:** In store-page.html, change "Print gift card included" to "Printed Christmas card included". In christmas-offers.js, change ChristmaxAdditionalPoints.printAndDigital = ["Printed Christmas card included"]
   ![image](https://user-images.githubusercontent.com/61554320/121823183-67e52600-cc9b-11eb-9102-464dab296276.png)

4. What do you notice about the query strings and how they interact with the page?<br>
   **Solution:**
   <br>
   Firstly, we use href = "store-page.html?brand=" + child.queryKeyName.toString()" from a tag to generate query string. For instance, we got store-page.html?brand="cheshire". we need to find query parameters from query strings like "brand=cheshire", we need get value "cheshire" from query string.
   In index.html and store.html, we use getQueryVariable function to get query parameter.
   in offers.js, we use URLSearchParams and get method, gets the "brand=foobar" query string parameter, we use "foobar" value to call json data from christmas-offer.js.

## Add Derbyshire Life store page

**Solution:** Add "derbyshire": {... as required above} into assets/js/christmas-offers.js
![image](https://user-images.githubusercontent.com/61554320/121822433-facf9180-cc96-11eb-9023-bd1d68511770.png)

Is there anything else you need to complete this task? <br>
**Solution:** Add "store-page.html?brand=derbyshire" a tag in index.html
![image](https://user-images.githubusercontent.com/61554320/121822360-b3e19c00-cc96-11eb-84c3-e437b1033362.png)

## Future investigation

- How would you approach fetching it using Javascript? Provide a small example of the kind of function you'd use.<br>
  **Solution:** // Use fetch method, If the resource is from URL <br>
  let response = fetch(url) <br>
  let response = fetch(url).then(res => res.json()).then(data => console.log(data))
- What potential issues would you expect to encounter?<br>
  **Solution:**

1.  Sometime, a problem would be caused by CORS policy. That has to be done by backend.
    Solution：response.setHeader(“Access-Control-Allow-Origin, URL)
2.  Mismatch MVC between front-end and backend
3.  Wrong port for http call or wrong data format (json, xml)

- What questions would you ask the Back Office Team to help you get started? <br>
  **Solution:**

1.  Discuss about MVC design pattern in detail
2.  ‘Talk’ which architectures will be used either be Server-rendered apps and Communication using AJAX
3.  ‘Talk HTTP’(GET,POST,PUT,DELETE) I will ask which port I should call, what type of data I need to call, for instance json or XML.
4.  Take care about POST request, it will pass to the back-end encoded in the request body, the request can be by synchronous or asynchronous.
5.  Usually, front-end developer can send mock API files to backend team, that is easily share data format as expected from frontend

- What tools could you use to test your API requests? <br>
  **Solution:** I use Postman to test my API requests

## Else

-Clean the code and format code:

1.  Put all css code from index.html and store.html into separate file in CSS folder
2.  Put all js code from index.html and store.html into separate file in js folder
3.  Change title
    ![image](https://user-images.githubusercontent.com/61554320/121823372-cbbc1e80-cc9c-11eb-84ce-d28e93ba541b.png)

- Remove redundant Javascript

1.  In index.html, remove repeat html for logo part
    ![image](https://user-images.githubusercontent.com/61554320/121823453-3cfbd180-cc9d-11eb-9c8e-b77528410a3a.png)
    ![image](https://user-images.githubusercontent.com/61554320/121823484-60bf1780-cc9d-11eb-8019-8288ecd5e942.png)

2.  In store.html, remove repeat html for card part
    ![image](https://user-images.githubusercontent.com/61554320/122082539-fd95c800-cdf7-11eb-98bd-8ac7a27414cb.png)
    ![image](https://user-images.githubusercontent.com/61554320/122082739-27e78580-cdf8-11eb-8854-f1f4247f5c07.png)
