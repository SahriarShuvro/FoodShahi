let multipleAddButton = document.querySelectorAll('.foodAddButton');
let manuCart = document.getElementById('manuCart');
let buttonCart = document.getElementById('buttonCart');
let cartItems = document.getElementById('cartItems');
let cartInside = document.getElementById('cartInside')
let count = 0;

// Cart Amoutn 
{
    function decrement(htmlString) {
        let minusButton = htmlString.target;
        let foodAddButton = minusButton.nextElementSibling;
        let foodAddButtonValue = parseInt(foodAddButton.innerHTML.split("x")[0]);
        if (foodAddButtonValue > 1) {
            foodAddButtonValue -= 1;
            foodAddButton.innerHTML = foodAddButtonValue + "x";
        } else {
            foodAddButton.innerHTML = "Add";
        }
        count -= 1;
        if (count < 0) {
            count = 0;
        }
        manuCart.innerHTML = count;
        buttonCart.innerHTML = count;
        cartInside.innerHTML = count + " items in cart";
    }

    multipleAddButton.forEach(function(singleAddButton) {
        singleAddButton.addEventListener("click", function() {
            count += 1;
            manuCart.innerHTML = count;
            buttonCart.innerHTML = count;
            cartInside.innerHTML = count + " items in cart";
            if (singleAddButton.innerHTML === "Add") {
                singleAddButton.innerHTML = 1 + "x";
            } else {
                singleAddButton.innerHTML = parseInt(singleAddButton.innerHTML) + 1 + "x";
            };

            // Json 
            let item = document.querySelector('.tryNewFoodCard');

            let foodImage = item.querySelector('.foodImage').getAttribute('src');
            let foodName = item.querySelector('.foodName').textContent;
            let tryNewFoodSubtitle = item.querySelector('.tryNewFoodSubtitle').textContent;
            let nameOfRestuarant = item.querySelector('.nameOfRestuarant').textContent;
            let price = item.querySelector('.price').textContent;
            let quantity = 1;
            let itemData = {
                foodImage: foodImage,
                foodName: foodName,
                tryNewFoodSubtitle: tryNewFoodSubtitle,
                nameOfRestuarant: nameOfRestuarant,
                price: price,
                quantity: quantity
            };
            console.log(itemData);


            // json

            let items = `<div class="item relative h-[180px] flex flex-col justify-between">
            <!-- Name  -->
            <div class="foodName flex justify-between w-full font-semibold ">
                <p>${itemData.foodName}</p>
            </div>

            <!-- Resturant Name  -->
            <div class="cartRestrantName flex mt-3 text-sm">
                <p class=" ">${itemData.tryNewFoodSubtitle}</p>
            </div>
            <div class="cartRestrantName flex mt-3 ">
                <p class=" ">${itemData.nameOfRestuarant}</p>
            </div>
            <!-- Price  -->
            <div class="cartItemPrice flex justify-between mt-12 items-center ">
                <!-- left -->
                <div class="catItemPriceLeft flex items-center ">
                    <div class="inputInDi relative mr-2 ">
                        <span class="minus absolute ">-</span>
                        <input type="text " value="${itemData.quantity}" />
                        <span class="plus absolute ">+</span>
                    </div>
                    <p>X</p>
                    <span class="ml-2 "> ${itemData.price}</span>
                </div>

                <!-- Right  -->
                <div class="cartItemPriceRight font-semibold ">
                    ৳ 100
                </div>
            </div>
            <hr class="my-5 ">
            <img src="${itemData.foodImage}" alt=" " class="itemThumb w-[90px] h-[90px] absolute top-0 right-0 rounded-sm p-1 border border-white ">
            </div>`;

            items += `<div class="item relative h-[180px] flex flex-col justify-between">
            <!-- Name  -->
            <div class="foodName flex justify-between w-full font-semibold ">
                <p>${itemData.foodName}</p>
            </div>

            <!-- Resturant Name  -->
            <div class="cartRestrantName flex mt-3 text-sm">
                <p class=" ">${itemData.tryNewFoodSubtitle}</p>
            </div>
            <div class="cartRestrantName flex mt-3 ">
                <p class=" ">${itemData.nameOfRestuarant}</p>
            </div>
            <!-- Price  -->
            <div class="cartItemPrice flex justify-between mt-12 items-center ">
                <!-- left -->
                <div class="catItemPriceLeft flex items-center ">
                    <div class="inputInDi relative mr-2 ">
                        <span class="minus absolute ">-</span>
                        <input type="text " value="${itemData.quantity}" />
                        <span class="plus absolute ">+</span>
                    </div>
                    <p>X</p>
                    <span class="ml-2 "> ${itemData.price}</span>
                </div>

                <!-- Right  -->
                <div class="cartItemPriceRight font-semibold ">
                    ৳ 100
                </div>
            </div>
            <hr class="my-5 ">
            <img src="${itemData.foodImage}" alt=" " class="itemThumb w-[90px] h-[90px] absolute top-0 right-0 rounded-sm p-1 border border-white ">
            </div>`;

            cartItems.innerHTML = items;
        });

        singleAddButton.addEventListener("click", beforeInsert, { once: true });

        let element = singleAddButton;
        let htmlString = `<span class="material-symbols-outlined flex items-center font-black cursor-pointer minusButton2" onclick="decrement(event)"> remove </span>`;

        function beforeInsert() {
            const insertBefore = (element, htmlString) =>
                element.insertAdjacentHTML("beforebegin", htmlString);

            insertBefore(element, htmlString);
        }
    });
}