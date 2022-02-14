<?php


class Administrator{

	function isValidRegularExpression($pattern, $text)
	{
		return preg_match($pattern, $text) ? true : false;
	}
}
?>