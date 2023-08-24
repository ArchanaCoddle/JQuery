// Make sure that there is no content within the body tag initially. 
// Upon the page being loaded, a button will be visible. Once the button is clicked, a title will be displayed.
// With a second click, an image along with a next button will appear. When the next button is clicked subsequently,
// the image should transition to a different one.

let count = 0
btn = document.createElement('button');
btn.innerHTML = 'click for details';
document.body.appendChild(btn);
$(document).ready(function(){ 
    $(btn).click(function (){
        console.log('ppppppppp');
        count += 1;
        if(count === 1) {
            para = document.createElement('p');
            para.innerHTML = 'The button is clicked once.';
            document.body.appendChild(para);
        } else if (count === 2) { 
            imageDiv = document.createElement('img');
            next = document.createElement('button');
            next.innerHTML = 'next';
            imageDiv.setAttribute('src', 'image/img1.jpg');
            document.body.appendChild(imageDiv);
            document.body.appendChild(next);
            const a = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
            let selectedIndex = 0;
    
            function showslide(index) {
                imageDiv.setAttribute('src', `image/${a[index]}`);
            }
    
            $(next).click(function(){  
                selectedIndex += 1;
                console.log(selectedIndex);
                if (selectedIndex < 0) {
                    selectedIndex = a.length - 1;
                } else if (selectedIndex >= a.length) {
                    selectedIndex = 0;
                } 
                showslide(selectedIndex)
            });
        }
    }); 
});