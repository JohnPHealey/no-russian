var f;
function addFile(file) {
	f = file;
}

function driver() {
	oForm = document.forms[0];	//used to access form values
	
	//prevent the page from reloading on submit, since this clears input
	function handleForm(event) {
		event.preventDefault();
	}
	oForm.addEventListener('submit', handleForm);
}

// Read the specified text file and
function readFile() {
	var reader = new FileReader();
	reader.readAsText(f);
	reader.onload = function() {
		var text = reader.result;
		text = modify(text);
		download(f.name, text);
	};
	reader.onerror = function(e) {
		console.log("Error", e);
	};
}

function modify(text) {
	
	return text;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


