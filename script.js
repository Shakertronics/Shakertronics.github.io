console.log(get('.container-fluid').style.width);
function get(x)
{
    return document.querySelector(x)
}
function mode()
{
    if(get("#link").href.slice(-10) == "styles.css")
    {
        console.log("to dark mode");
        get("#link").href = "dark-style.css";
        get(".dark-mode").innerHTML = "Light Mode";
    }
    else if(get("#link").href.slice(-14) == "dark-style.css")
    {
        console.log("to light mode");
        get("#link").href = "styles.css";
        get(".dark-mode").innerHTML = "Dark Mode";
    }
}
function copyGCcode() {
    // Get the text field
    var copyText = get(".form-control-plaintext");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 7); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}