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