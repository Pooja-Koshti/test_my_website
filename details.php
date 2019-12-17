<?php
$u="";
$p="";
if(isset($_GET['Name']))
{
    global $u;
    $u=$_GET['Name'];
    echo "USERNAME:".$_GET['Name']." ".$u;
}
if(isset($_GET['Password']))
{    
    global $p;
    $p=$_GET['Password'];
    echo "<br>PASSWORD:".$_GET['Password']." ".$p;
}

$servername="localhost";
$username="root";
$password="";
$dbname="mydbs";

$conn=new mysqli($servername,$username,$password,$dbname);

echo $u." ".$p;
if($conn)
    echo "CONNECTION SUCCESSFULL";
else
    echo "CONNECTION FAILED";

$sql = "INSERT INTO mydata values ('$u','$p')";

if($conn->query($sql))
    echo "<br>INSERTION SUCCESSFUL";
else
    echo $conn->error;


?>