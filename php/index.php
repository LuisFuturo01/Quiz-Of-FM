<?php
$pr1=$_GET["pr1"];
$pr2=$_GET["pr2"];
$pr3=$_GET["pr3"];
$pr4=$_GET["pr4"];
$pr5=$_GET["pr5"];
$pr6=$_GET["pr6"];
$pr7=$_GET["pr7"];
$pr8=$_GET["pr8"];
$pr9=$_GET["pr9"];
$pr10=$_GET["pr10"];

$ae=0 ;
$in=0 ;
$mc=0 ;
$gg=0 ;
$sh=0 ;
$nt=0 ;
$cs=0 ;
$rf=0 ;
$pi=0 ;
$ar=0 ;
$eu=0 ;
$hi=0 ;
$en=0 ;

//pr1//
if ($pr1=="a"){
    $ar= $ar+1;
    $ae= $ae+1;     
    $cs= $cs+1;
}else if ($pr1=="b"){
    $in= $in+1;     
    $rf= $rf+1;
    $en= $en+1;
}else if ($pr1=="c"){
    $en= $en+1;
    $hi= $hi+1;
    $eu= $eu+1;
    $mc= $mc+1;     
    $hi= $hi+1;
}else if ($pr1=="d"){
    $gg= $gg+1;     
    $pi= $pi+1;
}else if ($pr1=="e"){
    $sh= $sh+1;     
}else if ($pr1=="f"){
    $nt= $nt+1;     
}
//pr2//
if ($pr2=="a"){ 
     $rf= $rf+1;
    }else if ($pr2=="b"){
        $en= $en+1;
        $hi= $hi+1;
        $pi= $pi+1;
    }else if ($pr2=="c"){
           $ar= $ar+1;
    }else if ($pr2=="d"){
        $eu= $eu+1;
     
        $cs= $cs+1;
    }else if ($pr2=="e"){
        $ae= $ae+1;    
    }else if ($pr2=="f"){  
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $mc= $mc+1; 
        $in= $in+1;   
    }
   
    //pr3//
    if ($pr3=="a"){
        $pi= $pi+1;
        $ar= $ar+1;
    }else if ($pr3=="b"){
        $eu= $eu+1;
    }else if ($pr3=="c"){
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $mc= $mc+1; 
        $in= $in+1;  
        $ae= $ae+1;    
    }else if ($pr3=="d"){
        $hi= $hi+1;
        $cs= $cs+1;
    }else if ($pr3=="e"){
        $rf= $rf+1;
    }else if ($pr3=="f"){  
        $en= $en+1;
    }
    //pr4//
    if ($pr4=="a"){
        $ar= $ar+1;
    }else if ($pr4=="b"){
        $cs= $cs+1;
        $en= $en+1;
    }else if ($pr4=="c"){
        $hi= $hi+1;
        $ar= $ar+1;
    }else if ($pr4=="d"){
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $mc= $mc+1; 
        $ae= $ae+1;   
        $in= $in+1;   
    }else if ($pr4=="e"){
        $eu= $eu+1;
        $rf= $rf+1;
    }else if ($pr4=="f"){  
        $pi= $pi+1;
    }
    //pr5//
    if ($pr5=="a"){
        $cs= $cs+1;
        $ar= $ar+1;
    }else if ($pr5=="b"){
        $rf= $rf+1;
    }else if ($pr5=="c"){
        $eu= $eu+1;
    }else if ($pr5=="d"){
        $hi= $hi+1;
        $ar= $ar+1;
    }else if ($pr5=="e"){
        $pi= $pi+1;
    }else if ($pr5=="f"){  
        $pi= $pi+1;
        $en= $en+1;
    }
    //pr6//
    if ($pr6=="a"){
        $pi= $pi+1;
        $en= $en+1;
    }else if ($pr6=="b"){
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $ae= $ae+1;   
        $mc= $mc+1; 
        $in= $in+1;   
    }else if ($pr6=="c"){
        $hi= $hi+1;

        $eu= $eu+1;
    }else if ($pr6=="d"){
        $ar= $ar+1;
        $rf= $rf+1;
    }else if ($pr6=="e"){
    }else if ($pr6=="f"){  
        $pi= $pi+1;
        $cs= $cs+1;
    }
    //pr7//
    if ($pr7=="a"){
        $hi= $hi+1;
        $rf= $rf+1;
    }else if ($pr7=="b"){
        $eu= $eu+1;
        $ar= $ar+1;
    }else if ($pr7=="c"){
        $en= $en+1;
        $cs= $cs+1;
    }else if ($pr7=="d"){
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $mc= $mc+1; 
        $ae= $ae+1;    
        $in= $in+1;  
    }else if ($pr7=="e"){
    }else if ($pr7=="f"){  
        $hi= $hi+1;
        $pi= $pi+1;
    }
    //pr8//
    if ($pr8=="a"){
        $gg= $gg+1;
        $sh= $sh+1;    
        $mc= $mc+1; 
        $ae= $ae+1; 
        $in= $in+1;     
    }else if ($pr8=="b"){ 
        $en= $en+1;
        $ar= $ar+1;
        $cs= $cs+1;  
    }else if ($pr8=="c"){
        $nt= $nt+1;    
    }else if ($pr8=="d"){
        $hi= $hi+1;
    }else if ($pr8=="e"){
        $eu= $eu+1;
        $rf= $rf+1;
    }else if ($pr8=="f"){  
        $ar= $ar+1;
    }
    //pr9//
    if ($pr9=="a"){
        $en= $en+1;
        $hi= $hi+1;
        $pi= $pi+1;
    }else if ($pr9=="b"){
        $nt= $nt+1;    
        $sh= $sh+1; 
        $gg= $gg+1;   
        $ae= $ae+1;    
     
    }else if ($pr9=="c"){
        $rf= $rf+1;
    }else if ($pr9=="d"){

        $cs= $cs+1;
    }else if ($pr9=="e"){
        $ar= $ar+1;
    }else if ($pr9=="f"){ 
        $mc= $mc+1;  
    }
    //pr10//
    if ($pr10=="a"){
        $eu= $eu+1;
        $cs= $cs+1;
    }else if ($pr10=="b"){
        $ar= $ar+1;
    }else if ($pr10=="c"){
        $en= $en+1;
        $nt= $nt+1;    
    }else if ($pr10=="d"){
        $eu= $eu+1;
    }else if ($pr10=="e"){
        $pi= $pi+1;
        $ae= $ae+1;    
    }else if ($pr10=="f"){  
        $rf= $rf+1;
        $hi= $hi+1;
    }

    
    
    $puntajes = [
        "Albert Einstein" => $ae,
        "Isaac Newton" => $in,
        "Marie Curie" => $mc,
        "Galileo Galilei" => $gg,
        "Stephen Hawking" => $sh,
        "Nikola Tesla" => $nt,
        "Carl Sagan" => $cs,
        "Richard Feynman" => $rf,
        "Pitágoras" => $pi,
        "Arquímedes" => $ar,
        "Euclides" => $eu,
        "Hipatia" => $hi,
        "Emmy Noether" => $en,
    ];
    
    $maximo = max($puntajes);
    switch ($maximo) {
        case $ae:
            header("Location: ../html/scientist/ae.html");
            break;
        case $in:
            header("Location: ../html/scientist/in.html");
            break;
        case $mc:
            header("Location: ../html/scientist/mc.html");
            break;
        case $gg:
            header("Location: ../html/scientist/gg.html");
            break;
        case $sh:
            header("Location: ../html/scientist/sh.html");
            break;
        case $nt:
            header("Location: ../html/scientist/nt.html");
            break;
        case $cs:
            header("Location: ../html/scientist/cs.html");
            break;
        case $rf:
            header("Location: ../html/scientist/rf.html");
            break;
        case $pi:
            header("Location: ../html/scientist/pi.html");
            break;
        case $ar:
            header("Location: ../html/scientist/ar.html");
            break;
        case $eu:
            header("Location: ../html/scientist/eu.html");
            break;
        case $hi:
            header("Location: ../html/scientist/hi.html");
            break;
        case $en:
            header("Location: ../html/scientist/en.html");
            break;
        default:
            header("Location: ../html/scientist/ae.html");
    }


    /* <?php

    $cientificos = array(
        "Albert Einstein" => "albert1.png",
        "Isaac Newton" => "isaac.jpg",
        "Marie Curie" => "marie.jpg",
        "Galileo Galilei" => "galileo.jpg",
        "Stephen Hawking" => "sifen.jpg",
        "Nikola Tesla" => "nikola-tesla.jpg",
        "Carl Sagan" => "carl sagan.jpg",
        "Richard Feynman" => "feynman.jpg",
        "Pitágoras" => "pitagoras.jpg",
        "Arquímedes" => "archimides.png",
        "Euclides" => "eucliquedes.jpg",
        "Hipatia" => "hipatia.jpg",
     "Emmy Noether" => "noether.jpg"
    );
    
    $cientificos_nombres = array_keys($cientificos);
    
    $cientifico_aleatorio = $cientificos_nombres[array_rand($cientificos_nombres)];
    
    $imagen_aleatoria = $cientificos[$cientifico_aleatorio];
    
    
    echo '<img src="../img/' . $imagen_aleatoria . '" alt="' . $cientifico_aleatorio . '">';
    echo '<p>' . $cientifico_aleatorio . '</p>';*/
?>