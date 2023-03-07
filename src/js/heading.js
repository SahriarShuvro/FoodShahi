let navBarSection = document.getElementById("navBarSection");

navBarSection.innerHTML = ` <!-- Heading Section  -->
<nav
    class="headingArea fixed top-0 z-50 w-full bg-white border-gray-200  sm:px-4 py-2.5 md:px-4 lg:px-10 xl:px-10 rounded dark:bg-gray-900">
    <div class="container flex items-center justify-between">
        <!-- logo -->
        <div class="flex items-center">
            <a href="index.html"><img src="./src/img/logo.png" class=" h-9"
                    alt="FoodShahiBD - Home Delivery Scervice" /></a>
            <div class="hidden md:flex self-center text-orange-600 text-sm dark:text-white">
                <div class="time betweenItemCenter sm:flex  lg:text-md">
                    <div class="flex items-center hidden lg:flex">
                        <span class="material-symbols-outlined p-1 lg:text-md"> schedule</span>
                        <span>9:00 AM</span>
                    </div>
                    <div class="flex items-center hidden lg:flex">
                        <span class="px-1">- 9:00 PM</span>
                    </div>
                    <span
                        class="openNow px-1 py-0.5 flex items-center rounded-full bg-green-500 text-center text-white text-sm font-medium h-5 lg:py-1"
                        alt="Shuvro">Open Now</span>
                    <span
                        class="closeNow px-1 py-0.5 flex items-center rounded-full bg-red-500 text-center text-white text-sm font-medium h-5 lg:py-1">
                        Close
                        Now
                    </span>
                </div>
            </div>
        </div>

        <div class="flex items-center">
            <!-- Menu -->
            <div class=" justify-end items-center hidden duration-300 opacity-0 md:opacity-100 w-full md:flex md:w-auto lg:flex xl:flex 2xl:flex"
                id="mobile-menu-2">
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 lg:text-base">
                    <li>
                        <a href="./index.html"
                            class="homePage block py-2 pl-3 pr-4 text-gray-700 hover:text-orange-600 duration-200  rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="./about.html"
                            class="aboutPage block py-2 pl-3 pr-4 text-gray-700 hover:text-orange-600 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="./contact.html"
                            class="contactPage block py-2 pl-3 pr-4 text-gray-700 hover:text-orange-600 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                    <li>
                        <a href="./restaurants.html"
                            class=" resturantsPage block py-2 pl-3 pr-4 text-gray-700 hover:text-orange-600 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Restaurants</a>
                    </li>
                </ul>
            </div>
            <!-- cart & profile  -->
            <div class="flex items-center md:order-1">
                <div
                    class="block py-2 pl-3 pr-4  text-gray-700 hover:text-orange-600 rounded duration-200 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <div class="relative menuBTN cart">
                        <div>
                            <div class="relative">
                                <button type="submit" href="checkout.html"
                                    class=" checkOutPage text-gray-700 dropDownBTN menuBTN material-symbols-outlined cartIcon cursor-pointer m-0"
                                    id="btnCart">
                                    shopping_cart_checkout
                                </button>
                                <span
                                    class=" absolute text-white bg-orange-600 rounded-full font-bold text-xs p-1 -top-[15px] -right-[15px] lg:-top-[0.5rem] lg:right-0 h-5 w-5 flex justify-center items-center"
                                    id="buttonCart">0</span>
                            </div>
                        </div>
                        <div class="absolute cartDropDown dropDown overflow-y-scroll no-scrollbar" id="cartBody">
                            <div class="h-[50px] w-full"></div>
                            <div
                                class="h-[60vh] w-[95%] pb-4 bg-white dark:bg-slate-600 overflow-y-scroll  shadow-lg shadow-gray-400 dark:shadow-slate-500 rounded no-scrollbar">
                                <!-- First Restaurant -->
                                <div class="flex flex-col w-full px-[15px] py-[5px]">
                                    <!-- Head  -->
                                    <div class=" flex w-full justify-between p-4">
                                        <!-- Thumbnil  -->
                                        <div class="flex flex-wrap justify-center">
                                            <img src="https://foodshahibd.com/foodshahi_ci/assets/media/restaurants/logo/1553410254_logo.jpg"
                                                class="p-1 bg-white border rounded w-14 h-14" alt="...">
                                        </div>
                                        <!-- Restaurant Name -->
                                        <div class="w-9/12 flex flex-col items-start">
                                            <p class="">Tasty Time</p>
                                            <p class="text-xs">
                                                <span class="material-symbols-outlined text-xs">
                                                    stars</span> 3.37/5 (52 total reviews)
                                            </p>
                                            <a href="checkout.html"
                                                class="text-xs text-orange-600 font-bold duration-100 hover:text-green-600">
                                                View
                                                Full Menu
                                            </a>
                                        </div>
                                    </div>
                                    <hr>
                                    <!-- body -->
                                    <div class=" rounded-md mt-4 text-xs p-4 bg-white dark:bg-slate-600">
                                        <ul>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Nachos
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Oven Baked Pasta
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Chicken Loly
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Sub Total & delivary charge  -->
                                    <div class="text-xs font-semibold p-4">
                                        <div class="flex justify-between">
                                            <span>Delivery Charge</span>
                                            <span>৳ 35</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span>Sub Total</span>
                                            <span>৳ 635</span>
                                        </div>
                                    </div>
                                    <hr>
                                </div>
                                <!-- Second Restaurant -->
                                <div class="flex flex-col w-full px-[15px] py-[5px]">
                                    <!-- Head  -->
                                    <div class=" flex w-full justify-between p-4">
                                        <!-- Thumbnil  -->
                                        <div class="flex flex-wrap justify-center">
                                            <img src="https://foodshahibd.com/foodshahi_ci/assets/media/restaurants/logo/1563901869_logo.jpg"
                                                class="p-1 bg-white border rounded w-14 h-14" alt="...">
                                        </div>
                                        <!-- Restaurant Name -->
                                        <div class="w-9/12 flex flex-col items-start">
                                            <p class="">Code 3</p>
                                            <p class="text-xs">
                                                <span class="material-symbols-outlined text-xs">
                                                    stars</span> 3.37/5 (52 total reviews)
                                            </p>
                                            <a href="checkout.html"
                                                class="text-xs text-orange-600 font-bold duration-100 hover:text-green-600">
                                                View
                                                Full Menu
                                            </a>
                                        </div>
                                    </div>
                                    <hr>
                                    <!-- body -->
                                    <div class=" rounded-md mt-4 text-xs p-4 bg-white dark:bg-slate-600">
                                        <ul>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Nachos
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Oven Baked Pasta
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                            <li class="flex justify-between">
                                                <span>
                                                    <span
                                                        class="material-symbols-outlined text-xs mr-1 text-orange-600 font-bold">
                                                        fastfood</span>Chicken Loly
                                                </span>
                                                <span>৳ 200</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Sub Total & delivary charge  -->
                                    <div class="text-xs font-semibold p-4">
                                        <div class="flex justify-between">
                                            <span>Delivery Charge</span>
                                            <span>৳ 10</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span>Sub Total</span>
                                            <span>৳ 610</span>
                                        </div>
                                        <div class="flex justify-between text-green-500">
                                            <span>Payable Amount</span>
                                            <span>৳ 1245</span>
                                        </div>
                                        <p class="text-red-500 text-[10px] font-light">Extra charges may
                                            apply
                                        </p>
                                    </div>
                                    <hr>
                                    <!-- Button -->
                                    <div class="w-full pt-3">
                                        <a href="checkout.html"
                                            class="bg-orange-500 w-full flex rounded-md py-2 justify-center text-white duration-300 hover:bg-orange-700">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="flex items-center mb-[6px] ">
                    <button type="button"
                        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full"
                            src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/328713612_735851141602287_114591454814051131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PmhliMSlt58AX8aN1fE&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfDR5jrHY7eg3uodwRaajxFqnWdV1cAwS3ybDtc6OpnPlA&oe=6400C550"
                            alt="user photo">
                    </button>
                    <!-- Dropdown menu -->
                    <div class="z-50 w-[215px] absolute duration-300 -top-[7px] right-0 opacity-0 my-4 text-base list-none "
                        id="user-dropdown">
                        <div class="h-[50px] w-full"></div>
                        <div
                            class="bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div class="px-4 py-3">
                                <span
                                    class="block text-sm font-semibold text-gray-900 dark:text-white">Shuvro</span>
                                <span
                                    class="block text-xs font-medium text-gray-500 truncate dark:text-gray-400">01728XXXXXX</span>
                            </div>
                            <ul class="py-2" aria-labelledby="user-menu-button">
                                <li class="duration-200 hover:text-orange-600">
                                    <a href="profile.html"
                                        class="profilePage block px-4 py-2   text-gray-700 duration-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
                                </li>
                                <li class="duration-200 hover:text-orange-600">
                                    <a href="orderTrack.html"
                                        class="orderTrackPage block px-4 py-2   text-gray-700 duration-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Order
                                        Track</a>
                                </li>
                                <li class="duration-200 hover:text-orange-600">
                                    <button href="singIn.html" data-modal-target="authentication-modal2"
                                        data-modal-toggle="authentication-modal2" type="button"
                                        class="block px-4 py-2 flex w-full item-start text-gray-700 duration-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sing
                                        Up</button>
                                </li>
                                <li class="duration-200 hover:text-orange-600">
                                    <button data-modal-target="authentication-modal"
                                        data-modal-toggle="authentication-modal" type="button"
                                        class="block px-4 py-2 flex w-full item-start text-gray-700 duration-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sing
                                        In</button>
                                </li>
                                <li class="duration-200 hover:text-orange-600">
                                    <a href="sing.out"
                                        class="block px-4 py-2 text-gray-700 duration-200 hover:text-orange-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                        out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" id="hamburgerButton"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="ham hamRotate ham1 w-6 h-6" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 100 100"
                            onclick="this.classList.toggle('active');document.querySelector('.menu').classList.toggle('active');">
                            <path class="line top"
                                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                            <path class="line middle" d="m 30,50 h 40" />
                            <path class="line bottom"
                                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                        </svg>

                    </button>
                </div>

            </div>

        </div>


    </div>
</nav>`;
