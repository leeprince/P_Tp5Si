<?php
/**
 * Created by sublime _leeprince.
 * User: Eson
 * Date: 2017/1/13
 * Time: 17:41
 */
// include_once("common/connect.inc.php");
// include_once("include/sendmail.php");
// include("AmazonAPI/amazon_api_class.php");

// date_default_timezone_set('America/Los_Angeles');
// $currentDateTime =date('Y-m-d H:i:s');
// $today           = date('Y-m-d');
// $buyerID         = $_SESSION["BUYERID"];

echo 'leeprincetest begin<br>';
$reviewCode = 'R32EYJ98KQ7G3E';
// call python to verify if the reviewUrl valid
//Linux operating system
$cmd="python python/leeprinceTestPython.py ".$reviewCode;
$handle=popen($cmd,"r");
$data=fread($handle,500);
pclose($handle);

//Windows operating system
 // $data = system($cmd);

list($reviewASIN, $reviewTitle, $reviewStar, $reviewDate ,$reviewSign ,$shortReviewerID ,$review_page) = explode("&&----&%", $data);

// $reviewASIN            = str_replace(" ","",$reviewASIN);
$reviewASIN            = trim ($reviewASIN);
$reviewSign            = trim ($reviewSign);
$shortProfileID_review = trim ($shortReviewerID);


echo "reviewASIN:$reviewASIN>>reviewSign:$reviewSign>>shortReviewerID:$shortProfileID_review";

if($review_page != ''){
	$f = fopen('./save_html/'.$reviewCode.'.html', 'w+') or die("Unable to open file!"); # open for 'w'riting && save_html folder location is relative to the php tha calls the python,not the python itself
    fwrite($f,$review_page); # write text to file
    fclose($f); # close the file
    echo '<br>Insert data successful.';
}else{
	echo '<br>Insert data fail.';
}
?>

                  