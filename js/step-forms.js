
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // tab of the form ...
  var x = document.getElementsByClassName("form-tab");
  $(x[n]).fadeIn(500);
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Готово";
  } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
  }

  // step position coloring
  j = 1;
  while (j != (x.length + 1)) {
    $('.form-step-position div:nth-child(' + j + ')').css({
      'background-color': '#D4DBE2',
      'border-bottom-right-radius': '0px', 
      'border-top-right-radius': '0px'
    });
    j += 1;
  };

  $('.form-step-position div:nth-child(' + x.length + ')').css({
      'background-color': '#D4DBE2',
      'border-bottom-right-radius': '30px', 
      'border-top-right-radius': '30px'
    });

  i = 1;
  while (i < n+2) {
    $('.form-step-position div:nth-child(' + i + ')').css({
      'background-color': '#7D9DF5'
    });
    i += 1;
  };

  k = n + 1;
  $('.form-step-position div:nth-child(' + k + ')').css({
      'background-color': '#7D9DF5',
      'border-bottom-right-radius': '30px', 
      'border-top-right-radius': '30px'
    });
}

function nextPrev(n) {
  // tab to display
  var x = document.getElementsByClassName("form-tab");
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").innerHTML = "Ваша заявка принята. Ожидайте звонок от менеджера для подтверждения заявки.";
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

