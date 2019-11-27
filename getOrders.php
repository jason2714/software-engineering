<?php
    require_once 'login.php';
    $conn=new mysqli($hn,$un,$pw,$db);
    if ($conn->connect_error) die("Fatal Error");
    $query="SELECT * FROM orders";
    $result=$conn->query($query);
    if(!$result)
        die("get data fail");
    $nrow=$result->num_rows;

    for($i=0; $i<$nrow; $i++){
        $row=$result->fetch_array(MYSQLI_NUM);
        $data[$i]=$row;
    }
?>