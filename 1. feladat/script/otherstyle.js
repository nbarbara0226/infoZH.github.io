function toggleStyle() {
    const body = document.body;
    if (body.classList.contains('style1')) {
        body.classList.remove('style1');
        body.classList.add('style2');
    } else {
        body.classList.remove('style2');
        body.classList.add('style1');
    }
}