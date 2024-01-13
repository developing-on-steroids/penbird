document.getElementById('scrollRight').addEventListener('click', function () {
    const cardDiv = document.getElementById('cardDiv');
    cardDiv.scrollLeft += 300; // Adjust the scrolling distance as needed
});

let open = false;
const sidebar = document.getElementById('sidebar');

document.getElementById('hamb').addEventListener('click', function() {

    if (open == false) {
        sidebar.style.left = 0;
        open = true;
    } else {
        sidebar.style.left = '-100%';
        open = false;
    }
    
})