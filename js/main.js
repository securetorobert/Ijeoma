import $ from "jquery";
import Fade from "./transition";

$( document ).ready(function() {
    
    $(".nav-menu").click(function(){
      
        $(".mobile").slideToggle( "slow" );
      
    })
});
