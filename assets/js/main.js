var modalOptions = {
    "opacity": "0.9",
    onOpenEnd: () => {
        document.getElementById('modalCloseBtn').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var sidenavElem = document.querySelectorAll('.sidenav');    
    var sidenavOptions = {
        "edge" : "right",
    }
    var sidenavInstance = M.Sidenav.init(sidenavElem, sidenavOptions);

    var modalElem = document.querySelectorAll('.modal');
    var modalInstance = M.Modal.init(modalElem, modalOptions);

    var scrollspyElem = document.querySelectorAll('.scrollspy');
    var scrollSpyOptions = {
        "throttle" : "1000",
        "scrollOffset" : "0"
    }
    var scrollSpyInstance = M.ScrollSpy.init(scrollspyElem, scrollSpyOptions);
});

function closeModal(){
    var modalElem = document.querySelectorAll('.modal');
    var instanceOfModal = M.Modal.init(modalElem, modalOptions)[0];
    instanceOfModal.close();
    document.getElementById('modalCloseBtn').style.display = 'none';
    document.getElementsByTagName("body")[0].style.overflow = "";
}