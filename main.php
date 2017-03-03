<!DOCTYPE html>
<html>
	<head>
		<title>Modified Gcode File</title>
	</head>

	<body>
		<?php
			$myfile = fopen($_POST['inputfile'], "r") or die("Unable to open file!");
			echo fread($myfile, filesize($_POST['inputfile']);
			echo 'hey';
		?>
	</body>
</html>
