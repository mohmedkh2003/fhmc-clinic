/*------------- #General --------------*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$('a[href="#"]').click(function ($) {
        $.preventDefault();
    });




/*------------- #header function   --------------*/

$(".nav-toggler").click(function () {

         $(this).toggleClass("opened");
         $(".navbar-content .navbar-menu").toggleClass("active");
        
});

/*------------- #active_toggle_items--------------*/

$('.active_toggle_item').on('click' ,function(){
        
       let item = $(this),
           itemParent = $(this).closest(".active_toggle_items"),
           items = $('.active_toggle_item');
         
      if(itemParent.hasClass("only_active_item")){
          
          itemParent.find(items).not(item).removeClass("active");
          item.toggleClass("active");
          
      }else if(itemParent.hasClass("active_added_item")){
          
          item.addClass("active");
      }else{
          
          item.toggleClass("active");
      }
        
});
 

/*------------- #panel-responsive-items --------------*/

$(function(){
    
    $(".panel-responsive-btn").click(function(){
        
        let current_item_attr = $(this).attr("data-target"),
            current_item = $(".panel-responsive-item."+current_item_attr);
            
        if($(this).hasClass("panel-responsive-open")){
            
            current_item.addClass("active");
            if(current_item.hasClass("noScroll")){
                
                $("body").attr("data-panel", "noScroll");
            }
            if(!current_item.hasClass("no-overlay")){
                
                $(".side-overlay").addClass("active");
            }
            
            
            
        }
        if($(this).hasClass("panel-responsive-close")){
            
          
            $(".panel-responsive-item").removeClass("active");
            $("body").removeAttr("data-panel"); 
            $(".side-overlay").removeClass("active");
            
        }
        
    });
    
    
});


/*------------- #scroll-top btn   --------------*/

$(window).scroll(function() {
          
        if ($(this).scrollTop() > 220) {
            $('.scrollup').addClass("show");
            
            
        } else {
            $('.scrollup').removeClass("show");
            $('.scrollup').removeClass("active");

        }
    });

$('.scrollup').click(function(e){

    e.preventDefault(); 
    
    $(this).addClass('active');
    $('html,body').animate({

        scrollTop:0},1000);
    
     document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
     setTimeout(function() { 
         
       document.documentElement.style.setProperty('scroll-behavior', 'smooth');
         
    }, 1000);
        
    
});


/*------------- # Fix 100vh viewport bug on mobile devices --------------*/

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


/*------------- # navbar-link scroll --------------*/

let navbar_height = document.getElementById("header").clientHeight;

$(".scroll-link").on('click' , function(e) {
    
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    var pos = $id.offset().top - navbar_height;
    $('body, html').animate({scrollTop: pos} , 1000);
    document.documentElement.style.setProperty('scroll-behavior', 'auto');
    
});


