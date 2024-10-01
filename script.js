AOS.init();

window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}

document.getElementById('btnNo').onclick = function() {
    document.getElementById('errorMessage').style.display = 'block';
    document.getElementById('contentModal').style.display = 'none';
    document.querySelector('.modal-footer').style.display = 'none';
    document.querySelector('.modal-header').style.display = 'none';
}