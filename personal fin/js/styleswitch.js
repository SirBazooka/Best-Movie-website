// larger text
function addEvent(obj, type, fn) {
  if (obj.attachEvent) {
    obj['e' + type + fn] = fn;
    obj[type + fn] = function() {
      obj['e' + type + fn](window.event);
    }
    obj.attachEvent('on' + type, obj[type + fn]);
  } else obj.addEventListener(type, fn, false);
}

function switchStyles() {
  var selectedOption = this.options[this.selectedIndex],
    className = selectedOption.value;

  document.body.className = className;
}

var styleSwitcher = document.getElementById("styleSwitcher");
addEvent(styleSwitcher, "change", switchStyles);

// dark-mode 
function toggleDarkMode(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}