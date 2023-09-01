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
            $(para1).text(countb1);
            countb1 += 1
        } else {
            images1 = document.createElement('img');
            images1.setAttribute('src', bookImage);
            imagesCart.appendChild(images1);
            cartTitle1 = document.createElement('h3');
            cartTitle1.innerHTML = bookTitle
            contentCart.appendChild(cartTitle1);
            cartAuthor1 = document.createElement('h4');
            cartAuthor1.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor1);
            cartPrice1 = document.createElement('h5');
            cartPrice1.innerHTML = bookPrice
            contentCart.appendChild(cartPrice1);
            quantity1 = document.createElement('div');
            $(quantity1).addClass('quantity');
            increbutton1 = document.createElement('button');
            increbutton1.innerHTML = ' + ';
            quantity1.appendChild(increbutton1);
            para1 = document.createElement('p');
            para1.innerHTML = ' 1 ';
            $(para1).attr('class', 'quantityCount');
            quantity1.appendChild(para1);
            decrebutton1 = document.createElement('button');
            decrebutton1.innerHTML = ' - ';
            quantity1.appendChild(decrebutton1);
            $('.contentCart').append(quantity1);
            countb1 += 1;
        }
        $(increbutton1).click(function () {
            console.log('clickIN', countb1);
            let cost1 = countb1 * 199;
            $(para1).text(countb1);
            $(cartPrice1).text(cost1);
            countb1 += 1;
            console.log('count', countb1);
            console.log('price', $(cartPrice1).text());
            console.log(cost1);
        });
        $(decrebutton1).click(function () {
            console.log('clickDE', countb1);
            const price = $(cartPrice1).val();
            const countCost = countb1 * 199;
            console.log(price, 'dec');
            let cost1 = countCost - price;
            $(cartPrice1).text(cost1);
            console.log(cost1, 'nn');
            if (countb1 === 0) {
                $(images1).css("display", "none");
                $(cartTitle1).css("display", "none");
                $(cartAuthor1).css("display", "none");
                $(cartPrice1).css("display", "none");
                $(quantity1).css("display", "none");
            } else {
                $(images1).css("display", "block");
                $(cartTitle1).css("display", "block");
                $(cartAuthor1).css("display", "block");
                $(cartPrice1).css("display", "block");
                $(quantity1).css("display", "flex");
            }
            $(para1).text(countb1);
            countb1 -= 1;
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
            $(para2).text(countb2);
            countb2 += 1;
        } else {
            images2 = document.createElement('img');
            images2.setAttribute('src', bookImage);
            imagesCart.appendChild(images2);
            cartTitle2 = document.createElement('h3');
            cartTitle2.innerHTML = bookTitle
            contentCart.appendChild(cartTitle2);
            cartAuthor2 = document.createElement('h4');
            cartAuthor2.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor2);
            cartPrice2 = document.createElement('h5');
            cartPrice2.innerHTML = bookPrice
            contentCart.appendChild(cartPrice2);
            quantity2 = document.createElement('div');
            $(quantity2).addClass('quantity');
            increbutton2 = document.createElement('button');
            increbutton2.innerHTML = ' + ';
            quantity2.appendChild(increbutton2);
            para2 = document.createElement('p');
            para2.innerHTML = ' 1 ';
            $(para2).attr('class', 'quantityCount');
            quantity2.appendChild(para2);
            decrebutton2 = document.createElement('button');
            decrebutton2.innerHTML = ' - ';
            quantity2.appendChild(decrebutton2);
            $('.contentCart').append(quantity2);
            countb2 += 1;
        }
        $(increbutton2).click(function () {
            console.log('click', countb2);
            let cost2 = countb2 * 199;
            $(cartPrice2).text(cost2);
            $(para2).text(countb2);
            console.log('click', countb2);
            countb2 += 1;
        });
        $(decrebutton2).click(function () {
            console.log('click', countb2);
            const price = $(cartPrice2).val();
            const countCost = countb2 * 199;
            console.log(price, 'dec');
            let cost2 = countCost - price;
            $(cartPrice2).text(cost2);
            if (countb2 === 0) {
                $(images2).css("display", "none");
                $(cartTitle2).css("display", "none");
                $(cartAuthor2).css("display", "none");
                $(cartPrice2).css("display", "none");
                $(quantity2).css("display", "none");
            } else {
                $(images2).css("display", "block");
                $(cartTitle2).css("display", "block");
                $(cartAuthor2).css("display", "block");
                $(cartPrice2).css("display", "block");
                $(quantity2).css("display", "flex");
            }
            $(para2).text(countb2);
            console.log('click', countb2);
            countb2 -= 1;
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
            $(para3).text(countb3)
            countb3 += 1;
        } else {
            images3 = document.createElement('img');
            images3.setAttribute('src', bookImage);
            imagesCart.appendChild(images3);
            cartTitle3 = document.createElement('h3');
            cartTitle3.innerHTML = bookTitle
            contentCart.appendChild(cartTitle3);
            cartAuthor3 = document.createElement('h4');
            cartAuthor3.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor3);
            cartPrice3 = document.createElement('h5');
            cartPrice3.innerHTML = bookPrice
            contentCart.appendChild(cartPrice3);
            increbutton3 = document.createElement('button');
            increbutton3.innerHTML = ' + '
            quantity3 = document.createElement('div');
            $(quantity3).addClass('quantity');
            increbutton3 = document.createElement('button');
            increbutton3.innerHTML = ' + ';
            quantity3.appendChild(increbutton3);
            para3 = document.createElement('p');
            para3.innerHTML = ' 1 ';
            $(para3).attr('class', 'quantityCount');
            quantity3.appendChild(para3);
            decrebutton3 = document.createElement('button');
            decrebutton3.innerHTML = ' - ';
            quantity3.appendChild(decrebutton3);
            $('.contentCart').append(quantity3);
            countb3 += 1;
        }
        $(increbutton3).click(function () {
            console.log('click', countb3);
            let cost3 = countb3 * 199;
            $(cartPrice3).text(cost3);
            $(para3).text(countb3);
            console.log('click', countb3);
            countb3 += 1;
        });
        $(decrebutton3).click(function () {
            console.log('click', countb3);
            const price = $(cartPrice3).val();
            const countCost = countb3 * 199;
            console.log(price, 'dec');
            let cost3 = countCost - price;
            $(cartPrice3).text(cost3);
            if (countb3 === 0) {
                $(images3).css("display", "none");
                $(cartTitle3).css("display", "none");
                $(cartAuthor3).css("display", "none");
                $(cartPrice3).css("display", "none");
                $(quantity3).css("display", "none");
            } else {
                $(images3).css("display", "block");
                $(cartTitle3).css("display", "block");
                $(cartAuthor3).css("display", "block");
                $(cartPrice3).css("display", "block");
                $(quantity3).css("display", "flex");
            }
            $(para3).text(countb3);
            console.log('click', countb3);
            countb3 -= 1;
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
            $(para4).text(countb4);
            countb4 += 1;
        } else {
            images4 = document.createElement('img');
            images4.setAttribute('src', bookImage);
            imagesCart.appendChild(images4);
            cartTitle4 = document.createElement('h3');
            cartTitle4.innerHTML = bookTitle
            contentCart.appendChild(cartTitle4);
            cartAuthor4 = document.createElement('h4');
            cartAuthor4.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor4);
            cartPrice4 = document.createElement('h5');
            cartPrice4.innerHTML = bookPrice
            contentCart.appendChild(cartPrice4);
            quantity4 = document.createElement('div');
            $(quantity4).addClass('quantity');
            increbutton4 = document.createElement('button');
            increbutton4.innerHTML = ' + ';
            quantity4.appendChild(increbutton4);
            para4 = document.createElement('p');
            para4.innerHTML = ' 1 ';
            $(para4).attr('class', 'quantityCount');
            quantity4.appendChild(para4);
            decrebutton4 = document.createElement('button');
            decrebutton4.innerHTML = ' - ';
            quantity4.appendChild(decrebutton4);
            $('.contentCart').append(quantity4);
            countb4 += 1;
        }
        $(increbutton4).click(function () {
            console.log('click', countb4);
            let cost4 = countb4 * 500;
            $(cartPrice4).text(cost4);
            $(para4).text(countb4);
            console.log('click', countb4);
            countb4 += 1;
        });
        $(decrebutton4).click(function () {
            console.log('click', countb4);
            const price = $(cartPrice4).val();
            const countCost = countb4 * 500;
            let cost4 = countCost - price;
            $(cartPrice4).text(cost4);
            if (countb4 === 0) {
                $(images4).css("display", "none");
                $(cartTitle4).css("display", "none");
                $(cartAuthor4).css("display", "none");
                $(cartPrice4).css("display", "none");
                $(quantity4).css("display", "none");
            } else {
                $(images4).css("display", "block");
                $(cartTitle4).css("display", "block");
                $(cartAuthor4).css("display", "block");
                $(cartPrice4).css("display", "block");
                $(quantity4).css("display", "flex");
            }
            $(para4).text(countb4);
            console.log('click', countb4);
            countb4 -= 1;
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
            $(para5).text(countb5)
            countb5 += 1;
        } else {
            images5 = document.createElement('img');
            images5.setAttribute('src', bookImage);
            imagesCart.appendChild(images5);
            cartTitle5 = document.createElement('h3');
            cartTitle5.innerHTML = bookTitle
            contentCart.appendChild(cartTitle5);
            cartAuthor5 = document.createElement('h4');
            cartAuthor5.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor5);
            cartPrice5 = document.createElement('h5');
            cartPrice5.innerHTML = bookPrice
            contentCart.appendChild(cartPrice5);
            quantity5 = document.createElement('div');
            $(quantity5).addClass('quantity');
            increbutton5 = document.createElement('button');
            increbutton5.innerHTML = ' + ';
            quantity5.appendChild(increbutton5);
            para5 = document.createElement('p');
            para5.innerHTML = ' 1 ';
            $(para5).attr('class', 'quantityCount');
            quantity5.appendChild(para5);
            decrebutton5 = document.createElement('button');
            decrebutton5.innerHTML = ' - ';
            quantity5.appendChild(decrebutton5);
            $('.contentCart').append(quantity5);
            countb5 += 1;
        }
        $(increbutton5).click(function () {
            console.log('click', countb5);
            let cost5 = countb5 * 199;
            $(cartPrice5).text(cost5);
            $(para5).text(countb5);
            console.log('click', countb5);
            countb5 += 1;
        });
        $(decrebutton5).click(function () {
            console.log('click', countb5);
            const price = $(cartPrice5).val();
            const countCost = countb5 * 199;
            let cost5 = countCost - price;
            $(cartPrice5).text(cost5);
            if (countb5 === 0) {
                $(images5).css("display", "none");
                $(cartTitle5).css("display", "none");
                $(cartAuthor5).css("display", "none");
                $(cartPrice5).css("display", "none");
                $(quantity5).css("display", "none");
            } else {
                $(images5).css("display", "block");
                $(cartTitle5).css("display", "block");
                $(cartAuthor5).css("display", "block");
                $(cartPrice5).css("display", "block");
                $(quantity5).css("display", "flex");
            }
            $(para5).text(countb5);
            console.log('click', countb5);
            countb5 -= 1;
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
            $(para6).text(countb6)
            countb6 += 1;
        } else {
            images6 = document.createElement('img');
            images6.setAttribute('src', bookImage);
            imagesCart.appendChild(images6);
            cartTitle6 = document.createElement('h3');
            cartTitle6.innerHTML = bookTitle
            contentCart.appendChild(cartTitle6);
            cartAuthor6 = document.createElement('h4');
            cartAuthor6.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor6);
            cartPrice6 = document.createElement('h5');
            cartPrice6.innerHTML = bookPrice
            contentCart.appendChild(cartPrice6);
            quantity6 = document.createElement('div');
            $(quantity6).addClass('quantity');
            increbutton6 = document.createElement('button');
            increbutton6.innerHTML = ' + ';
            quantity6.appendChild(increbutton6);
            para6 = document.createElement('p');
            para6.innerHTML = ' 1 ';
            $(para6).attr('class', 'quantityCount');
            quantity6.appendChild(para6);
            decrebutton6 = document.createElement('button');
            decrebutton6.innerHTML = ' - ';
            quantity6.appendChild(decrebutton6);
            $('.contentCart').append(quantity6);
            countb6 += 1;
        }
        $(increbutton6).click(function () {
            console.log('click', countb6);
            let cost6 = countb6 * 199;
            $(cartPrice6).text(cost6);
            $(para6).text(countb6);
            console.log('click', countb6);
            countb6 += 1;
        });
        $(decrebutton6).click(function () {
            console.log('click', countb6);
            const price = $(cartPrice6).val();
            const countCost = countb6 * 199;
            let cost6 = countCost - price;
            $(cartPrice6).text(cost6);
            if (countb6 === 0) {
                $(images6).css("display", "none");
                $(cartTitle6).css("display", "none");
                $(cartAuthor6).css("display", "none");
                $(cartPrice6).css("display", "none");
                $(quantity6).css("display", "none");
            } else {
                $(images6).css("display", "block");
                $(cartTitle6).css("display", "block");
                $(cartAuthor6).css("display", "block");
                $(cartPrice6).css("display", "block");
                $(quantity6).css("display", "flex");
            }
            $(para6).text(countb6);
            console.log('click', countb6);
            countb6 -= 1;
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
            $(para7).text(countb7)
            countb7 += 1;
        } else {
            images7 = document.createElement('img');
            images7.setAttribute('src', bookImage);
            imagesCart.appendChild(images7);
            cartTitle7 = document.createElement('h3');
            cartTitle7.innerHTML = bookTitle
            contentCart.appendChild(cartTitle7);
            cartAuthor7 = document.createElement('h4');
            cartAuthor7.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor7);
            cartPrice7 = document.createElement('h5');
            cartPrice7.innerHTML = bookPrice
            contentCart.appendChild(cartPrice7);
            quantity7 = document.createElement('div');
            $(quantity7).addClass('quantity');
            increbutton7 = document.createElement('button');
            increbutton7.innerHTML = ' + ';
            quantity7.appendChild(increbutton7);
            para7 = document.createElement('p');
            para7.innerHTML = ' 1 ';
            $(para7).attr('class', 'quantityCount');
            quantity7.appendChild(para7);
            decrebutton7 = document.createElement('button');
            decrebutton7.innerHTML = ' - ';
            quantity7.appendChild(decrebutton7);
            $('.contentCart').append(quantity7);
            countb7 += 1;
        }
        $(increbutton7).click(function () {
            console.log('click', countb7);
            let cost7 = countb7 * 199;
            $(cartPrice7).text(cost7);
            $(para7).text(countb7);
            console.log('click', countb7);
            countb7 += 1;
        });
        $(decrebutton7).click(function () {
            console.log('click', countb7);
            const price = $(cartPrice7).val();
            const countCost = countb7 * 199;
            let cost7 = countCost - price;
            $(cartPrice7).text(cost7);
            if (countb7 === 0) {
                $(images7).css("display", "none");
                $(cartTitle7).css("display", "none");
                $(cartAuthor7).css("display", "none");
                $(cartPrice7).css("display", "none");
                $(quantity7).css("display", "none");
            } else {
                $(images7).css("display", "block");
                $(cartTitle7).css("display", "block");
                $(cartAuthor7).css("display", "block");
                $(cartPrice7).css("display", "block");
                $(quantity7).css("display", "flex");
            }
            $(para7).text(countb7);
            console.log('click', countb7);
            countb7 -= 1;
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
            $(para8).text(countb8)
            countb8 += 1;
        } else {
            images8 = document.createElement('img');
            images8.setAttribute('src', bookImage);
            imagesCart.appendChild(images8);
            cartTitle8 = document.createElement('h3');
            cartTitle8.innerHTML = bookTitle
            contentCart.appendChild(cartTitle8);
            cartAuthor8 = document.createElement('h4');
            cartAuthor8.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor8);
            cartPrice8 = document.createElement('h5');
            cartPrice8.innerHTML = bookPrice
            contentCart.appendChild(cartPrice8);
            quantity8 = document.createElement('div');
            $(quantity8).addClass('quantity');
            increbutton8 = document.createElement('button');
            increbutton8.innerHTML = ' + ';
            quantity8.appendChild(increbutton8);
            para8 = document.createElement('p');
            para8.innerHTML = ' 1 ';
            $(para8).attr('class', 'quantityCount');
            quantity8.appendChild(para8);
            decrebutton8 = document.createElement('button');
            decrebutton8.innerHTML = ' - ';
            quantity8.appendChild(decrebutton8);
            $('.contentCart').append(quantity8);
            countb8 += 1;
        }
        $(increbutton8).click(function () {
            console.log('click', countb8);
            let cost8 = countb8 * 199;
            $(cartPrice8).text(cost8);
            $(para8).text(countb8);
            console.log('click', countb8);
            countb8 += 1;
        });
        $(decrebutton8).click(function () {
            console.log('click', countb8);
            const price = $(cartPrice8).val();
            const countCost = countb8 * 199;
            let cost8 = countCost - price;
            $(cartPrice8).text(cost8);
            if (countb8 === 0) {
                $(images8).css("display", "none");
                $(cartTitle8).css("display", "none");
                $(cartAuthor8).css("display", "none");
                $(cartPrice8).css("display", "none");
                $(quantity8).css("display", "none");
            } else {
                $(images8).css("display", "block");
                $(cartTitle8).css("display", "block");
                $(cartAuthor8).css("display", "block");
                $(cartPrice8).css("display", "block");
                $(quantity8).css("display", "flex");
            }
            $(para8).text(countb8);
            console.log('click', countb8);
            countb8 -= 1;
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
            $(para9).text(countb9)
            countb9 += 1;
        } else {
            images9 = document.createElement('img');
            images9.setAttribute('src', bookImage);
            imagesCart.appendChild(images9);
            cartTitle9 = document.createElement('h3');
            cartTitle9.innerHTML = bookTitle
            contentCart.appendChild(cartTitle9);
            cartAuthor9 = document.createElement('h4');
            cartAuthor9.innerHTML = bookAuthor
            contentCart.appendChild(cartAuthor9);
            cartPrice9 = document.createElement('h5');
            cartPrice9.innerHTML = bookPrice
            contentCart.appendChild(cartPrice9);
            quantity9 = document.createElement('div');
            $(quantity9).addClass('quantity');
            increbutton9 = document.createElement('button');
            increbutton9.innerHTML = ' + ';
            quantity9.appendChild(increbutton9);
            para9 = document.createElement('p');
            para9.innerHTML = ' 1 ';
            $(para9).attr('class', 'quantityCount');
            quantity9.appendChild(para9);
            decrebutton9 = document.createElement('button');
            decrebutton9.innerHTML = ' - ';
            quantity9.appendChild(decrebutton9);
            $('.contentCart').append(quantity9);
            countb9 += 1;
        }
        $(increbutton9).click(function () {
            console.log('click', countb9);
            let cost9 = countb9 * 199;
            $(cartPrice9).text(cost9);
            $(para9).text(countb9);
            console.log('click', countb9);
            countb9 += 1;
        });
        $(decrebutton9).click(function () {
            console.log('click', countb9);
            const price = $(cartPrice9).val();
            const countCost = countb9 * 199;
            let cost9 = countCost - price;
            $(cartPrice9).text(cost9);
            if (countb9 === 0) {
                $(images9).css("display", "none");
                $(cartTitle9).css("display", "none");
                $(cartAuthor9).css("display", "none");
                $(cartPrice9).css("display", "none");
                $(quantity9).css("display", "none");
            } else {
                $(images9).css("display", "block");
                $(cartTitle9).css("display", "block");
                $(cartAuthor9).css("display", "block");
                $(cartPrice9).css("display", "block");
                $(quantity9).css("display", "flex");
            }
            $(para9).text(countb9);
            console.log('click', countb9);
            countb9 -= 1;
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

    $('#checkout').click(function () {
        $('.cartCost').css('display', 'flex');
        let temp = 0;
        $('.contentCart').each(function () {
            $(this).find('h5').each(function () {
                let pp = $(this).text();
                console.log(pp, 'inside');
                let valnum = Number(pp);
                console.log(valnum, 'value');
                temp += valnum;
            });
            console.log(temp, 'total value');
            $('#TCost').text(temp);
        });
        console.log(temp, 'total value');
        $('#TCost').text(temp);
    });
});