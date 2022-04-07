<?php
$r = 255 - intval($_POST["r"]);
$g = 255 - intval($_POST["g"]);
$b = 255 - intval($_POST["b"]);
$rgb = [
    "R" => $r,
    "G" => $g,
    "B" => $b
];

echo (json_encode($rgb));
