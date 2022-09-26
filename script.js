/**
 * This function checks the 'href' attribute of a HTML DOM Element with the 'a' tag.
 * If the href coincides with one of an array of file extensions,
 * it changes an attribute of the HTML element to a new value.
 * 
 * @param DOMelement This function accepts aHTML DOM Element with the 'a' tagname, otherwise it will do nothing.
 * @param arr This is the array of the file extensions we are looking for. Introduce them without the '.', one file extension per item.
 * @param attr This is the attribute we want to modify or add IF we find a correct file extension.
 * @param newValue This is the value we want the abovementioned attribute to have.
 */
function detectExtension(DOMelement, arr, attr, newValue){
    var extRegex = "(";
    if(DOMelement.tagName !== 'A'){
        console.log("This DOM element is not a link ('a' tag).");
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        extRegex += "("+arr[i]+")";
        if(i == arr.length-1){
            extRegex += ")";
        }else{
            extRegex += "|";
        }
    }
    extRegex = (new RegExp("\\."+extRegex+"$","ig"));
    console.log(extRegex);
    if(extRegex.test(DOMelement.href)){
        DOMelement.setAttribute(attr,newValue);
        console.log("The file is one of the correct file extensions.");
    }else{
        console.log("The file does NOT match any of the requested file extensions.");
    }
}