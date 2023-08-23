const a = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let selectedIndex = 0;
let dot = $('.dot');
for( let i = 0; i < dot.length ;i++) {
    console.log(dot[i]);
}


$(document).ready(function(){  

    function showslide(index) {
        document.getElementById('imgs').setAttribute('src', `image/${a[index]}`);
        dotShow(index);
    }
    function dotShow(ind) {
        dot.each(function(ind, element) {
            // console.log(element, ind);
            if( ind === selectedIndex) {
                $(element).addClass('activeDot');
            } else {
                $(element).removeClass('activeDot'); 
            }
        });  
    }

    $('#next').click(function(){  
        selectedIndex += 1;
        console.log(selectedIndex);
        if (selectedIndex < 0) {
            selectedIndex = a.length - 1;
        } else if (selectedIndex >= a.length) {
            selectedIndex = 0;
        } 
        showslide(selectedIndex)
    });  
 
    $('#prev').click(function(){  
        selectedIndex -= 1;
        console.log(selectedIndex);
        if (selectedIndex < 0) {
            selectedIndex = a.length - 1;
        } else if (selectedIndex >= a.length) {
            selectedIndex = 0;
        } 
        showslide(selectedIndex);
    });


    window.onload = setInterval(function() {
        
        if (selectedIndex >= a.length - 1 ) {
            selectedIndex = 0;
            showslide(selectedIndex);
        } else {
            selectedIndex += 1;
            showslide(selectedIndex);
        }
    }, 3000);

    $('#dot1').click(function() {
        document.getElementById('imgs').setAttribute('src', 'image/img1.jpg');
        $('#dot1').addClass('activeDot');
        $('#dot2').removeClass('activeDot'); 
        $('#dot3').removeClass('activeDot'); 
        $('#dot4').removeClass('activeDot'); 
        $('#dot5').removeClass('activeDot'); 
    });
    $('#dot2').click(function() {
        document.getElementById('imgs').setAttribute('src', 'image/img2.jpg');
        $('#dot2').addClass('activeDot');
        $('#dot1').removeClass('activeDot'); 
        $('#dot3').removeClass('activeDot'); 
        $('#dot4').removeClass('activeDot'); 
        $('#dot5').removeClass('activeDot'); 
    });
    $('#dot3').click(function() {
        document.getElementById('imgs').setAttribute('src', 'image/img3.jpg');
        $('#dot3').addClass('activeDot');
        $('#dot1').removeClass('activeDot'); 
        $('#dot2').removeClass('activeDot'); 
        $('#dot4').removeClass('activeDot'); 
        $('#dot5').removeClass('activeDot'); 
    });
    $('#dot4').click(function() {
        document.getElementById('imgs').setAttribute('src', 'image/img4.jpg');
        $('#dot4').addClass('activeDot');
        $('#dot1').removeClass('activeDot'); 
        $('#dot2').removeClass('activeDot'); 
        $('#dot3').removeClass('activeDot'); 
        $('#dot5').removeClass('activeDot'); 
    });
    $('#dot5').click(function() {
        document.getElementById('imgs').setAttribute('src', 'image/img5.jpg');
        $('#dot5').addClass('activeDot');
        $('#dot1').removeClass('activeDot'); 
        $('#dot2').removeClass('activeDot'); 
        $('#dot3').removeClass('activeDot'); 
        $('#dot4').removeClass('activeDot'); 
    });

});