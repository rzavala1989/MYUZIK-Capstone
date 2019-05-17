<h2>MYUZIK</h2>

MYUZIK is an application that searches for an artist's most popular songs, and when they are to perform their concerts. 
The app cites information from Musixmatch, which retrieves the artist's hottest songs at the moment, as well as information from SeatGeek, which 
track the artist's upcoming tour dates. The second feature of this app allows for users to buy concert tickets via the SeatGeek website.

<h3>See it in Action</h3>

You can find a live demo for this app <a href="https://api-capstone-revision--johnmexico.repl.co/">here</a>. If you can't get your artist to show up, there must either be a typo in the input query, or that artist doesn't have any upcoming live performances

MYUZIK is optimized for both desktop and mobile, is fully useable with keyboard controls, and has been made with disabilities such as visual impairment and color blindness in mind.

<h3>Screenshots</h3>
The landing page of MYUZIK, the results page with an entry of "Boyz II Men"
<img src="https://i.ibb.co/wSXvCzx/Screenshot-MYUZIK-2.png" alt="Screenshot-MYUZIK-2" border="0"><br />

<img src="https://i.ibb.co/tYy86xF/Screenshot-MYUZIK-3.png" alt="Screenshot-MYUZIK-3" border="0"><br />

<h3>Usage Notes</h3>

This app relies heavily on JavaScript and on some ECMAScript 6 features, so unforntunately, support for Internet Explorer is not guaranteed, even if using the latest version.
Despite being a one-page web application, this app is designed to work only with a stable internet connection and therefore needs one at all times while in use. So if, for example, you download the app's source into your PC, expect it to malfunction if at any time access to the internet is compromised.
Please be aware that this app pulls data only from Musixmatch and SeatGeek. If an event isn't present on SeatGeek, perhaps because it is a concert free of change, it will not appear in the app, as it only displays event which have tickets for sale.

<h3>For Developers</h3>
Developed using plain HTML, CSS and JavaScript. This app uses one or more APIs from the following services: <br>
<ul>
<li>Musixmatch: for track lookup and metadata.</li>
<li>SeatGeek: for info on upcoming live performances.</li>
<li>It is designed to be a prime example of proper third-party API usage. MYUZIK is free software, and you are encouraged to use it and its source code for your own purposes. </li>
</ul>

<h3>About</h3>

Initial version released 11/11/2018.
Last version released 5/15/2019.

Developed by Ricardo Zavala. Email: zavala.ricardo.m@gmail.com
