function search_searching() {
    let input = document.getElementsByClassName('searching').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('tit');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="card-group";                 
        }
    }
}