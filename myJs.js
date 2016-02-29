$(function() {

  
  function idelete(x){
           x.parent().parent().remove();
  }

  function mouseOverFunc(x){
 if(event.altKey){
          x.css({color:"red",backgroundColor:"blue"});
      }else{
          x.css({color:"",backgroundColor:""});
      }
  }
  function mouseLeaveFunc(x){
        x.css({color:"",backgroundColor:""});
  }

function keyUpFunction(event){
   if (event.altKey) {
    console.log("in");
} else {
  console.log("ss");
          mouseLeaveFunc($(".cell"));
           

}
}

	$(".zoom").mouseenter(function(){
    	$(this).animate({height :'300px'},"slow", function(){
    			$(this).animate({ height :'250px'},"slow");	
    	});     		
	});


	$(".zoom").mouseleave(function(){
         $(this).stop(true);   		
	}); 

$('.down,#down5').tooltip({title: "Click to find out more!", animation: true}); 
$('.up,#up5').tooltip({title: "Click to hide!", animation: true}); 

    $(".img").mouseenter(function(){
        $(".img").animate({ height :'700px'},"slow");        
    });
    $(".img").mouseleave(function(){
         $(".img").animate({ height :'400px'},"slow");       
    }); 

$(".down").click(function(){
    $(this).hide();
  //  $(".down").hide();
    $(this).next().next().show(function(){
         //alert($(this).next().attr('class'));

         $(this).next().slideDown("slow");
    });
    //alert($(this).next().next().attr('class'));
    //alert($(this).next().next().next().next().attr('class'));
   
  });

$("#down5").click(function(){
    $(this).toggle();
          $("#up5").toggle(function(){
         //alert($(this).next().attr('class'));
         $(this).next().slideDown("slow");
    });  
  });
  $(".up").click(function(){
    $(".down").show();
    $(".up").hide();
    $(".panel").slideUp("slow");
  });

  $("#up5").click(function(){
    $("#down5").toggle();
    $("#up5").toggle();
    $(".panel").slideUp("slow");
  });

$("#b1").dblclick(function(){
    $("#wolve1").fadeIn();
    $("#wolve2").fadeIn("slow");
    $("#wolve3").fadeIn(3000);
});

$("#b2").dblclick(function(){
    $("#wolve1").fadeOut();
    $("#wolve2").fadeOut("slow");
    $("#wolve3").fadeOut(3000);
});

$("#b3").dblclick(function(){
     $("#storm1 , #storm2, #storm3").css({opacity:1,cursor:"zoom-in"});
$("#storm1 , #storm2, #storm3").on("mouseenter",(function(){
    $(this).animate({height :'300px'},"slow", function(){
          $(this).animate({ height :'250px'},"slow"); 
          

      }); 
}));
    $("#storm1").fadeToggle();
    $("#storm2").fadeToggle("slow");
    $("#storm3").fadeToggle(3000);
});

$("#b4").dblclick(function(){
     $("#storm1 , #storm2, #storm3").fadeTo("slow", 0.5,(function(){
       
         $("#storm1 , #storm2, #storm3").off("mouseenter");
      
          $("#storm1 , #storm2, #storm3").css({cursor:"not-allowed"});
    
     }));
  

});

$("#usr").keypress(function(){
       $("#mystique1").fadeTo("slow", 1).fadeOut(2000).fadeIn(4000).fadeTo("slow", 0.5);
    
    
    });

  $("#usr1").keydown(function(){
       $("#mys-text").animate({fontSize: '2.5em'}, "slow").animate({fontSize: '1em'}, "slow").animate({fontSize: '3em'}, "slow");
    $("#mystique2").animate({height: '100px'}, "slow").animate({height: '200px'}, "slow").animate({width: '250px'}, "slow").animate({height: '0px'}, "slow");
    
  });

  $("#add").click(function(){
      
      $("table > tbody:last-child").append('<tr>'+
                                              '<td><input type ="text" class="cell"></input></td>'+
                                              '<td><input type ="text" class="cell"></input></td>'+
                                              '<td><input type ="text" class="cell"></input></td>'+
                                              '<td><input type ="text" class="cell"></input></td>'+
                                              '<td><button id="delete" class="btn delete btn-danger">Delete</button></td>'+
                                          '</tr>');
      $(".delete").on({
                        click:  function(){
                              idelete($(this));
                        }
                          });

       $(".cell").on({               
                         mouseover: function(){
                          
                              mouseOverFunc($(this));
                        },
                        mouseleave:function(){
                              mouseLeaveFunc($(this));
                        },
                        onmousemove:function(){
                               mouseOverFunc($(this));
                        }, 
                        keyup:function(event){
                          keyUpFunction(event);
                        }              
                      });
  });


   $(".delete").click(function(){
      idelete($(this));
  });



   $(".cell").mouseover(function(){
       mouseOverFunc($(this));
   });

   $(".cell").mouseleave(function(){
      mouseLeaveFunc($(this));
   });

   $(".cell").mousemove(function(){
       mouseOverFunc($(this));
   });



  $(document).keyup(function(event){
   keyUpFunction(event);
    });



});	