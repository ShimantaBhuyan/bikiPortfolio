
document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');    
    var sidenavOptions = {
        "edge" : "right",
    }
    var instance1 = M.Sidenav.init(sidenavElem, sidenavOptions);

    var modalElem = document.querySelectorAll('.modal');
    var modalOptions = {
        "opacity:": "0.2",
        "startingTop": "92px",
    };
    var instance2 = M.Modal.init(modalElem, modalOptions);
});