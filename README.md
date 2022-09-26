# file-extensions-in-links
##Changes the value of a certain attribute when the link ends in certain file extensions

This is a short but sweet JS function that you can copy to your library. It receives the following parametres:

    1. The DOM element (at this point, you can only send `<a>` TagNames, otherwise it will do nothing).
    2. An array that contains all the accepted file extensions. If the href of the `<a>` ends in one of these extensions,
    the attribute value will be changed. The file extensions must be added without dots/periods and spaces.
    3. The attribute we want to change.
    4. The new value of the attribute.


As an example, this would be a correct way to call the function:
`detectExtension(document.querySelector("a"),["doc", "txt", "tiff", "tif", "pdf", "ppt"],"target","_new");`

Remember that you can also easily change the function in order to accept other tags, not only `<a>`! Or you can always ask me to change it, I will be pleased to do so.
