//edited from W3school code
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.drop-down')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// function add(){
// 	 document.getElementById('count').value = ++i;
    
// }

// $("#none").on("click", ())
//   $('.drop-down').text("None");
// });

$('#none').on('click', () => {
  $('#dropdown').text('None');
});

$('#sugar').on('click', () => {
  $('#dropdown').text('Sugar Milk');
});

$('#vanilla').on('click', () => {
  $('#dropdown').text('Vanilla Milk');
});

$('#double-choco').on('click', () => {
  $('#dropdown').text('Double Chocolate');
});