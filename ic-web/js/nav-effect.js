setInterval(GetPageScroll,50);
function GetPageScroll() 
{ 
    var x, y; 
    if(window.pageYOffset) 
    {    // all except IE    
        y = window.pageYOffset;    
        x = window.pageXOffset; 
    } else if(document.documentElement && document.documentElement.scrollTop) 
    {    // IE 6 Strict    
        y = document.documentElement.scrollTop;    
        x = document.documentElement.scrollLeft; 
    } else if(document.body) 
    {    // all other IE    
        y = document.body.scrollTop;    
        x = document.body.scrollLeft;   
    } 
 
    if(y>=200)
    {

        document.getElementById("nav").className = "dw-nav1";
        //id输入替换nav
    }
    else
    {
        document.getElementById("nav").className = "dw-nav2";
        //id输入替换nav
    }
}
