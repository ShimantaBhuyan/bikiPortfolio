document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');    
    var sidenavOptions = {
        "edge" : "right",
    }
    var instanceSidenav = M.Sidenav.init(sidenavElem, sidenavOptions);

    var modalElem = document.querySelectorAll('.modal');
    var modalOptions = {
        onOpenEnd: () => {
            document.getElementById('modalCloseBtn').style.display = 'block';
        },
        onCloseStart: () => {
            document.getElementById('modalCloseBtn').style.display = 'none';
        }
    }
    var instanceModal = M.Modal.init(modalElem, modalOptions);
});