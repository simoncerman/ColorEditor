<?php
$r = 255 - intval($_POST["r"]);
$g = 255 - intval($_POST["g"]);
$b = 255 - intval($_POST["b"]);

echo ("${r},${g},${b}");
