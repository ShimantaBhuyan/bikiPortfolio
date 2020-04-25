document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');    
    var sidenavOptions = {
        "edge" : "right",
    }
    var instance1 = M.Sidenav.init(sidenavElem, sidenavOptions);

    var modalElem = document.querySelectorAll('.modal');
    var modalOptions = {};
    var instance2 = M.Modal.init(modalElem, modalOptions);
});
 
function checkModalClose(close) {
    if (close == 'off') {
        document.getElementById('modalCloseBtn').style.display = 'none';
    }
    else if(close == 'on')  {
        document.getElementById('modalCloseBtn').style.display = 'block';  
    }
}