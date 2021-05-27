<?php

// create a database named 'sampledb' with a table named 'sample' before running this at localhost:9000 (phpmyadmin)
// add 2 columns to the table - roll(int type) and studentName(text type)
$con = mysqli_connect('database','root','tiger','sampledb');
if($con){
    echo 'connection made to the database';
    $roll = 104;
    $name = 'Kaushik';
    $stmt = mysqli_prepare($con,'insert into sample values (?,?)');
    mysqli_stmt_bind_param($stmt,'is',$roll,$name);
    if(mysqli_stmt_execute($stmt)) echo'inserted';
    else echo 'failed..';
    mysqli_close($con);
}
else echo "connection was not done";

?>