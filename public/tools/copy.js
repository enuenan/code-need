function copyFunction(id) {
    // console.log(id);
    var copyText = document.getElementById(id);
    // console.log(copyText);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
}