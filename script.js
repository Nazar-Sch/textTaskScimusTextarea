const btnExpand = document.getElementById('expand');
btnExpand.addEventListener('click', function() {
    document.getElementById('expandWrapper').classList.add("hidden");
    document.getElementById('shrinkWrapper').classList.remove("hidden");
    document.querySelector('.wrapper').style.backgroundColor = '#66CC99';
    const comment = document.getElementById('comment').value;
    document.getElementById('shrinkText').textContent = comment;
});

const btnShrink = document.getElementById('shrink');
btnShrink.addEventListener('click', function() {
    document.querySelector('.wrapper').style.backgroundColor = '#fff';
    document.getElementById('expandWrapper').classList.remove("hidden");
    document.getElementById('shrinkWrapper').classList.add("hidden");
});
   