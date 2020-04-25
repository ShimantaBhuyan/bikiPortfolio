
document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');    
    var sidenavOptions = {
        "edge" : "right",
    }
    var instance1 = M.Sidenav.init(sidenavElem, sidenavOptions);
});