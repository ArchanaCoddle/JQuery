$(document).ready(function () {
    let productItem = document.querySelector('.productItem');
    let cart = document.querySelector('.cartItems');
    let flg = 0;
    function fetchData() {
        let http = new XMLHttpRequest();
        http.open('GET', 'https://dummyjson.com/products', true);
        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                let data = JSON.parse(http.responseText);
                if(flg == 0){
                    showInfo(data.products.slice(0, 3));
                    flg = 1 ;
                }
                else if(flg == 1){
                        showInfo(data.products.slice(3, data.limit));
                        flg = 2;
                }
            }
        };
        http.send();
    }
    function showInfo(data) {
        console.log(data[0].id);
        let count = 1;
        let qntyt = 1;
        data.forEach((element) => {
            console.log(element);
            dataItems = document.createElement('div');
            dataItems.setAttribute('class', 'dataItem');
            thumbImage = document.createElement('div');
            thumbImage.setAttribute('class', 'imagesizing');
            aboutItem = document.createElement('div');
            aboutItem.setAttribute('class', 'aboutItem');
            imagedetails = document.createElement('div');
            imagedetails.setAttribute('class', 'imagedetails');
            dataItems.appendChild(thumbImage);
            dataItems.appendChild(aboutItem);
            dataItems.appendChild(imagedetails);
            productItem.appendChild(dataItems);
            thumbnail = document.createElement('img');
            console.log(element.thumbnail, 'main image');
            thumbnail.setAttribute('src', element.thumbnail);
            thumbnail.setAttribute('alt', 'no image');
            thumbImage.appendChild(thumbnail);
            title = document.createElement('h3');
            title.innerHTML = element.title;
            aboutItem.appendChild(title);
            desc = document.createElement('p');
            desc.innerHTML = element.description;
            aboutItem.appendChild(desc);
            price = document.createElement('h5');
            price.innerHTML = element.price;
            aboutItem.appendChild(price);
            discount = document.createElement('h4');
            discount.innerHTML = `discount offer :  ${element.discountPercentage}`;
            aboutItem.appendChild(discount);
            rating = document.createElement('p');
            rating.innerHTML = `rating :  ${element.rating}`;
            aboutItem.appendChild(rating);
            buttonCart = document.createElement('button');
            buttonCart.innerHTML = 'Add Cart';
            aboutItem.appendChild(buttonCart);
            buttonCart.setAttribute('class', 'buttonCart');
            buttonCart.setAttribute('id', `btnId${element.id}`);
            element.images.forEach(pics => {
                console.log(pics);
                imageslist = document.createElement('img');
                imageslist.setAttribute('src', pics);
                imageslist.setAttribute('alt', 'no image');
                imageslist.setAttribute('class', 'imageextra');
                imagedetails.appendChild(imageslist);
            });
            $(document).on('click', `#btnId${element.id}`, function (e) {
                $('#checkout').css('display', 'block');
                console.log('buttonfuntn');
                let btnIdValue = $(this).attr('id');
                console.log(btnIdValue);
                console.log($(this));
                let mainData = $(this).closest('.aboutItem');
                const cartTitle = mainData.find('h3').text();
                const cartoffer = mainData.find('h4').text();
                const cartPrice = mainData.find('h5').text();
                let carttit = document.createElement('h3');
                carttit.innerHTML = cartTitle
                cart.appendChild(carttit);
                let cartPri = document.createElement('h5');
                cartPri.innerHTML = cartPrice;
                cart.appendChild(cartPri);
                let cartdisc = document.createElement('h4');
                cartdisc.innerHTML = cartoffer;
                cart.appendChild(cartdisc);
                let quantity = document.createElement('div');
                $(quantity).addClass('quantity');
                let increbutton = document.createElement('button');
                increbutton.innerHTML = ' + ';
                quantity.appendChild(increbutton);
                $(increbutton).addClass('quantityCart');
                let para = document.createElement('p');
                para.innerHTML = ' 1 ';
                $(para).attr('class', 'quantityCount');
                $(para).attr('id', 'qntyt' + qntyt);
                qntyt += 1;
                console.log(qntyt)
                quantity.appendChild(para);
                let decrebutton = document.createElement('button');
                decrebutton.innerHTML = ' - ';
                quantity.appendChild(decrebutton);
                $(decrebutton).addClass('quantityCart');
                $(cart).append(quantity);
                count += 1;
                $(increbutton).click(function () {
                    let idName = $(para).attr('id');
                    console.log(idName);
                    console.log('click', count);
                    let cost = count * cartPrice;
                    $(cartPri).text(cost);
                    $(`#${idName}`).text(count);
                    count += 1;
                });
                $(decrebutton).click(function () {
                    let idName = $(para).attr('id');
                    console.log(idName);
                    count -= 1;
                    $(`#${idName}`).text(count);
                    console.log('clickdec', count);
                    console.log(price);
                    const cost = count * cartPrice;
                    console.log(cost, 'gg');
                    $(cartPri).text(cost);
                    if (count === 0) {
                        $(carttit).css("display", "none");
                        $(cartPri).css("display", "none");
                        $(cartdisc).css("display", "none");
                        $(quantity).css("display", "none");
                    }
                });
            });
        });
        function elemntsProducts(e) {
            $('.searchResults').css('display', 'block');
            $('.productItem').css('display', 'none');
            $('.searchResults').empty();
            e.forEach((item) => {
                let itemElement = document.createElement('div');
                itemElement.setAttribute('class', 'dataItem');
                itemElement.innerHTML = `
                        <div class="imagesizing" >
                            <img src="${item.thumbnail}" alt="no-image">
                        </div>
                        <div class="aboutItem">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <h5>${item.price}</h5>
                            <h4>discount offer :  ${item.discountPercentage}</h4>
                            <p>rating :  ${item.rating}</p>
                            <button class="buttonCart" id="btnId${item.id}">Add Cart</button>
                        </div>
                        <div class="imageslist" >
                            <img src="${item.images[0]}" alt="no-image" class="imageextra">
                            <img src="${item.images[1]}" alt="no-image" class="imageextra">
                            <img src="${item.images[2]}" alt="no-image" class="imageextra">
                            <img src="${item.images[3]}" alt="no-image" class="imageextra">
                        </div>`;
                $('.searchResults').append(itemElement);
            });
        }
        $('#sort').click(function () {
            let sortingItem = $('#sort').val();
            console.log(sortingItem);
            if (sortingItem === 'lth') {
                console.log('Ascending order');
                let asc = data.sort((a, b) => {
                    const priceA = a.price;
                    const priceB = b.price;
                    return priceA - priceB;
                });
                console.log(asc);
                elemntsProducts(asc);
            } else if (sortingItem === 'htl') {
                console.log('descending order');
                let des = data.sort((a, b) => {
                    const priceA = a.price;
                    const priceB = b.price;
                    return priceB - priceA;
                });
                console.log(des);
                elemntsProducts(des);
            } else if (sortingItem === 'rating') {
                console.log('rating order', data)
                let rat = data.sort((a, b) => {
                    const ratA = a.rating;
                    const ratB = b.rating;
                    return ratA - ratB;
                });
                console.log('rting', rat);
                elemntsProducts(rat);
            }
        });
        $('#filter').click(function () {
            $('.searchResults').css('display', 'block');
            $('.productItem').css('display', 'none');
            let filterItem = $(this).val();
            console.log(filterItem);
            $('.searchResults').empty();
            data.forEach((item) => {
                let category = item.category.toLowerCase();
                if (category === filterItem) {
                    console.log('item', item);
                    let itemElement = document.createElement('div');
                    itemElement.setAttribute('class', 'dataItem');
                    itemElement.innerHTML = `
                        <div class="imagesizing" >
                            <img src="${item.thumbnail}" alt="no-image">
                        </div>
                        <div class="aboutItem">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                            <h5>${item.price}</h5>
                            <h4>discount offer :  ${item.discountPercentage}</h4>
                            <p>rating :  ${item.rating}</p>
                            <button class="buttonCart" id="btnId${item.id}">Add Cart</button>
                        </div>
                        <div class="imageslist" >
                            <img src="${item.images[0]}" alt="no-image" class="imageextra">
                            <img src="${item.images[1]}" alt="no-image" class="imageextra">
                            <img src="${item.images[2]}" alt="no-image" class="imageextra">
                            <img src="${item.images[3]}" alt="no-image" class="imageextra">
                        </div>`;
                    $('.searchResults').append(itemElement);
                }
            });
        });
        $('#searchImg').click(function () {
            $('.searchResults').css('display', 'block');
            $('.productItem').css('display', 'none');
            $('.searchResults').empty();
            let flag = false;
            let searchTitle = $('#searchField').val().toLowerCase();
            console.log(searchTitle);
            data.forEach(e => {
                let titleProdt = e.title.toLowerCase();
                console.log(titleProdt);
                console.log(searchTitle);
                if (titleProdt.includes(searchTitle)) {
                    let serchElement = document.createElement('div');
                    serchElement.setAttribute('class', 'dataItem');
                    serchElement.innerHTML = `
                        <div class="imagesizing" >
                            <img src="${e.thumbnail}" alt="no-image">
                        </div>
                        <div class="aboutItem">
                            <h3>${e.title}</h3>
                            <p>${e.description}</p>
                            <h5>${e.price}</h5>
                            <h4>discount offer :  ${e.discountPercentage}</h4>
                            <p>rating :  ${e.rating}</p>
                            <button class="buttonCart" id="btnId${e.id}">Add Cart</button>
                        </div>
                        <div class="imageslist" >
                            <img src="${e.images[0]}" alt="no-image" class="imageextra">
                            <img src="${e.images[1]}" alt="no-image" class="imageextra">
                            <img src="${e.images[2]}" alt="no-image" class="imageextra">
                            <img src="${e.images[3]}" alt="no-image" class="imageextra">
                        </div>`;
                    console.log(e.images);
                    $('.searchResults').append(serchElement);
                    flag = true;
                }
            });
            if (flag === false) {
                notFound = document.createElement('p');
                notFound.innerHTML = ' Sorry, The product is not found ';
                $(notFound).attr('class', 'notFound');
                $('.searchResults').append(notFound);
            }
        });
        $('#checkout').click(function () {
            $('.cartCost').css('display', 'flex');
            let temp = 0;
            $('.cart').each(function () {
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
        
    }

    fetchData();
    window.addEventListener('scroll',function () {
        if(this.window.innerHeight + this.document.documentElement.scrollTop + 1 >= this.document.documentElement.scrollHeight){
            fetchData();
        }
    });
});