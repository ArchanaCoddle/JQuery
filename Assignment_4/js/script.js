// 1. Showcase a selection of 7-10 products on the webpage.
// 2. Integrate a search field that dynamically updates the displayed products based on user input.
//    - As the user types, only the matching products should remain visible.
//    - If no matches are found, provide a message indicating the absence of matching products.
// 3. Each product should include a title, thumbnail image, description, and an "Add to Cart" button.
// 4. Implement an "Add to Cart" functionality:
//    - Clicking the "Add to Cart" button should add the respective product to the cart.
//    - A designated cart area on the right side of the page should facilitate this feature.
// 5. Create the cart functionality:
//    - Allow users to increment or decrement the quantity of items within the cart.
//    - If the quantity is decremented to 0, the item should be removed from the cart.
// 6. Display essential information within the cart area:
//    - Show the title of each product in the cart.
//    - Display the quantity of each product.
//    - Include buttons to increment and decrement the quantity.

let imagesCart = document.querySelector('.imagesCart');
let contentCart = document.querySelector('.contentCart');
let quantity = document.querySelector('.quantity');
let countb1 = 1;
let countb2 = 1;
let countb3 = 1;
let countb4 = 1;
let countb5 = 1;
let countb6 = 1;
let countb7 = 1;
let countb8 = 1;
let countb9 = 1;
let increbutton;
let decrebutton;
$(document).ready(function () {

    $('#b1').click(function () {
        console.log('book1');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb1 > 1) {
            console.log('hhuhuh', countb1);
            $(para).text(countb1);
            countb1 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb1 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb1);
            countb1 += 1;
            console.log('click', countb1);
            $(para).text(countb1);
        });
        $(decrebutton).click(function () {
            console.log('click', countb1);
            countb1 -= 1;
            console.log('click', countb1);
            if (countb1 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb1);
        });
    });

    $('#b2').click(function () {
        console.log('book2');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb2 > 1) {
            console.log('hhuhuh', countb2);
            $(para).text(countb2);
            countb2 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb2 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb2);
            countb2 += 1;
            console.log('click', countb2);
            $(para).text(countb2);
        });
        $(decrebutton).click(function () {
            console.log('click', countb2);
            countb2 -= 1;
            console.log('click', countb2);
            if (countb2 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb2);
        });
    });
    });
    $('#b3').click(function () {
        console.log('book3');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb3 > 1) {
            console.log('hhuhuh', countb3)
            $(para).text(countb3)
            countb3 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb3 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb3);
            countb3 += 1;
            console.log('click', countb3);
            $(para).text(countb3);
        });
        $(decrebutton).click(function () {
            console.log('click', countb3);
            countb3 -= 1;
            console.log('click', countb3);
            if (countb3 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb3);
        });
    });

    $('#b4').click(function () {
        console.log('book4');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb4 > 1) {
            console.log('hhuhuh', countb4)
            $(para).text(countb4);
            countb4 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb4 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb4);
            countb4 += 1;
            console.log('click', countb4);
            $(para).text(countb4);
        });
        $(decrebutton).click(function () {
            console.log('click', countb4);
            countb4 -= 1;
            console.log('click', countb4);
            if (countb4 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb4);
        });
    });

    $('#b5').click(function () {
        console.log('book5');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb5 > 1) {
            console.log('hhuhuh', countb5)
            $(para).text(countb5)
            countb5 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb5 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb5);
            countb5 += 1;
            console.log('click', countb5);
            $(para).text(countb5);
        });
        $(decrebutton).click(function () {
            console.log('click', countb5);
            countb5 -= 1;
            console.log('click', countb5);
            if (countb5 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb5);
        });
    });

    $('#b6').click(function () {
        console.log('book6');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb6 > 1) {
            console.log('hhuhuh', countb6)
            $(para).text(countb6)
            countb6 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb6 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb6);
            countb6 += 1;
            console.log('click', countb6);
            $(para).text(countb6);
        });
        $(decrebutton).click(function () {
            console.log('click', countb6);
            countb6 -= 1;
            console.log('click', countb6);
            if (countb6 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb6);
        });
    });

    $('#b7').click(function () {
        console.log('book7');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb7 > 1) {
            console.log('hhuhuh', countb7)
            $(para).text(countb7)
            countb7 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb7 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb7);
            countb7 += 1;
            console.log('click', countb7);
            $(para).text(countb7);
        });
        $(decrebutton).click(function () {
            console.log('click', countb7);
            countb7 -= 1;
            console.log('click', countb7);
            if (countb7 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb7);
        });
    });

    $('#b8').click(function () {
        console.log('book8');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb8 > 1) {
            console.log('hhuhuh', countb8)
            $(para).text(countb8)
            countb8 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb8 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb8);
            countb8 += 1;
            console.log('click', countb8);
            $(para).text(countb8);
        });
        $(decrebutton).click(function () {
            console.log('click', countb8);
            countb8 -= 1;
            console.log('click', countb8);
            if (countb8 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb8);
        });
    });

    $('#b9').click(function () {
        console.log('book9');
        $(".cartItems").css("display", "block");

        let bookContainer = $(this).closest('.books');
        const bookImage = bookContainer.find('img').attr('src');
        const bookTitle = bookContainer.find('h3').text();
        const bookAuthor = bookContainer.find('h4').text();
        const bookPrice = bookContainer.find('h5').text();

        if (countb9 > 1) {
            console.log('hhuhuh', countb9)
            $(para).text(countb9)
            countb9 += 1;
        } else {
            images = document.createElement('img');
            images.setAttribute('src', bookImage);
            imagesCart.appendChild(images);
            cartTitle = document.createElement('h3');
            cartTitle.innerHTML = bookTitle
            contentCart.appendChild(cartTitle);
            cartAuthor = document.createElement('h4');
            cartAuthor.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor);
            cartPrice = document.createElement('h5');
            cartPrice.innerHTML = bookPrice
            contentCart.appendChild(cartPrice);
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + '
            quantity = document.createElement('div');
            $(quantity).addClass('quantity');
            increbutton = document.createElement('button');
            increbutton.innerHTML = ' + ';
            quantity.appendChild(increbutton);
            para = document.createElement('p');
            para.innerHTML = ' 1 ';
            $(para).attr('class', 'quantityCount');
            quantity.appendChild(para);
            decrebutton = document.createElement('button');
            decrebutton.innerHTML = ' - ';
            quantity.appendChild(decrebutton);
            $('.contentCart').append(quantity);
            countb9 += 1;
        }
        $(increbutton).click(function () {
            console.log('click', countb9);
            countb9 += 1;
            console.log('click', countb9);
            $(para).text(countb9);
        });
        $(decrebutton).click(function () {
            console.log('click', countb9);
            countb9 -= 1;
            console.log('click', countb9);
            if (countb9 === 0) {
                $('.imagesCart').css('display', 'none');
                $('.contentCart').css('display', 'none');
            }
            $(para).text(countb9);
        });
    });
    $('#searchImg').click(function () {
        $('.searchResults').css('display', 'flex');
        $('.bookContent').css('display', 'none');
        let flag = false;

        const searchTitle = $('#searchField').val().toLowerCase();
        console.log(searchTitle);

        $('.books').each(function () {
            var itemTitle = $(this).find('h3').text().toLowerCase();
            console.log($(this).text(), 'before if');
            if (itemTitle.includes(searchTitle)) {
                $('.searchResults').append($(this));
                console.log($(this).text(), 'After if');
                flag = true;
            }
        });

        if (flag === false) {
            notFound = document.createElement('p');
            notFound.innerHTML = ' Sorry, The book is not found ';
            $(notFound).attr('class', 'notFound');
            $('.searchResults').append(notFound);
        }
    });
// });