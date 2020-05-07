# Welcome to SWJS!
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for looking at swjs (Style With JavaScript)! This library allows you to write CSS within JS! Continue reading for documentation.
## Implementation and Syntax:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To implement swjs, simply download the file and use a script tag to run it: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<script src="swjs.js"></script>`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In any script tags after this, you will be able to use swjs! Let's begin on the syntax. First, run the function inside of a script tag (this script tag must be *after* the implementation of swjs): <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`css([]);` <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inside of the brackets, we will be writing our CSS. To begin, define an ID. This must be defined at the start of every `css` function. This is the syntax: <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`css(["#YourIdHere"]);`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After doing this, you can change the css of all items with that id (classes are not currently supported)! Here is the basic syntax: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`css(["#id", "style: setting"]);`<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can continue adding css (make sure you put a comma in between every rule) as well as switch the current ID by simply adding another `"#id"`.
### Currently Supported Style Changes:
The styles color, height, width, fontSize, fontFamily, textAlign, position, padding, and margin are currently supported by swjs.
## Errors:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There are a few errors that can occur. Here they are: <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`Uh-oh! You didn't use an array here!` simply means that you forgot to put your items inside of brackets. `You must enter an id before changing the style.` means that you tried to change a style before defining an ID.  `Uh-oh! We thinkt that (id) is not a valid id.` means that the ID you input does not exist in your HTML. `You must use an : somewhere in your phrase.` means that you did not have an : in an object in the array and it was not an ID. ` Uh-oh! We didn't understand what you wrote at position (number) in your array.` means that you tried to change a style, but the program did not understand what you wanted it to do.