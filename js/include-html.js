/**
 * Include HTML - Loads external HTML files into the page
 * This allows for reusable header and footer components across all pages
 */

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    // Get all elements in the document
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        // Search for elements with a certain attribute
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            // Make an HTTP request using the attribute value as the file name
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    // Remove the attribute, and call this function once more
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            // Exit the function
            return;
        }
    }
}

// Run the function when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', includeHTML);
} else {
    includeHTML();
}
