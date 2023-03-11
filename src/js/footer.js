let footer = document.getElementById("footer");

footer.innerHTML = `
<!-- Container Footer  -->
    <div class="m-3 mt-8 flex flex-col justify-between items-stretch lg:flex-row " onclick="cartWindowHide()">
        <!-- Footer Left  -->
        <div class="footerLeft flex flex-col justify-center items-center lg:w-[48%] my-8 ">
            <p class="font-bold text-xl ">Get The App Now!</p>
            <p class="text-gray-500 font-normal mt-2 text-center text-sm ">
                Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Ab reiciendis nihil, suscipit impedit eum tempora?
            </p>
            <br>
            <br>
            <a href="https://play.google.com/store/apps/details?id=com.riveredge.foodshahi " target="_blank "
                class="googlePlay bg-black dark:bg-slate-700 shadow-md shadow-slate-600 flex items-center duration-300 px-3 py-1 hover:shadow-none justify-center ">
                <img src="./src/img/playstore.svg
                        " alt=" " width="30 " height="30 ">
                <span class="ml-1 ">
                    <span class="text-xs font-normal uppercase ">Ge It On</span>
                    </br>
                    <span class="font-normal capitalize "></span>Google Play</span>
            </a>
        </div>
        <!-- Footer Left End -->
        <!-- Footer Right  -->
        <div class="footerRight relative my-8 ">
            <img src="./src/img/d_man_bg.png " alt=" " class=" " width="530 " height="370 ">
            <img src="./src/img/d_man.png " alt=" " class="absolute -bottom-8 right-[30px] w-[130px] sm:w-64 ">
        </div>
        <!-- Footer Right End -->
    </div>
    <!-- Container Section End -->

    <!-- Footer Section  -->
    <footer class="flex flex-col bg-orange-600 text-white px-8 py-12 " onclick="cartWindowHide()">
        <div class="footerTop flex justify-between flex-col lg:flex-row ">
            <!-- Manu  -->
            <div class="footerMenu text-center lg:text-left ">
                <p class="text-red-900 font-bold text-lg mb-4 ">Menu</p>
                <ul>
                    <li>
                        <a href="faq.html" class="faq duration-900 hover:underline ">FAQ</a>
                    </li>
                    <li>
                        <a href="about.html" class="about duration-900 hover:underline ">
                            About
                            Us
                        </a>
                    </li>
                    <li>
                        <a href="contact.html " class="contact duration-900 hover:underline ">
                            Contact
                            Us
                        </a>
                    </li>
                    <li>
                        <a href="privacePolicy.html" class="privacePolicy duration-900 hover:underline ">
                            Privace
                            Policy
                        </a>
                    </li>
                    <li>
                        <a href="termsAndCondition.html" class="termsAndCondition duration-900 hover:underline ">
                            Terms &
                            Condition
                        </a>
                    </li>
                </ul>
            </div>
            <!-- footer logo section  -->
            <div class="f_logo_section flex justify-center items-center ">
                <a href="https://foodshahibd.com ">
                    <img src="./src/img/logo.png " alt=" " srcset=" " class="bg-white px-3 py-1 rounded-md w-[130px] ">
                </a>
            </div>
            <!-- Social Contact  -->
            <div class="socialContact betweenItemCenter flex-col ">
                <p class="text-red-900 font-bold text-lg mb-4 ">Get In Touch</p>
                <ul class="flex lg:flex-col ">
                    <li>
                        <a href="https://www.facebook.com/foodShahiBD?mibextid=ZbWKwL " target="_blank "
                            class="lg:flex items-center ">
                            <i
                                class="fa fa-facebook-f border px-2 py-1 m-1 duration-300 rounded-full hover:bg-white hover:text-orange-600 "></i>
                            <span class="hover:underline hidden lg:flex ">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:0171408158 " class="lg:flex items-center ">
                            <i
                                class="fa fa-whatsapp border py-1 px-1.5 m-1 duration-300 rounded-full hover:bg-white hover:text-orange-600 "></i>
                            <span class="hover:underline hidden lg:flex ">Whatsapp</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:0171408168 " class="lg:flex items-center ">
                            <i
                                class="fa fa-phone border px-1.5 py-1 m-1 duration-300 rounded-full hover:bg-white hover:text-orange-600 "></i>
                            <span class="hover:underline hidden lg:flex ">Hotline</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Payment Support  -->
        <div class="paymentSupport ">
            <p class="text-red-900 font-bold text-lg ">Our Payment Support</p>
            <ul class=" flex justify-between ">
                <li class=" ">
                    <img width="px " height="65px " class="bg-white p-1 rounded-sm m-1 "
                        src="./src/img/cashondelivery.png " alt="Cash On Delivery ">
                </li>
                <li class=" ">
                    <img width="65px " height="65px " class="bg-white p-1 rounded-sm m-1 "
                        src="./src/img/BKash-Logo.wine.svg " alt="bKash ">
                </li>
                <li class=" ">
                    <img width="65px " height="65px " class="bg-white p-1 rounded-sm m-1 "
                        src="./src/img/nagad-seeklogo.com.svg " alt="Nagad ">
                </li>
                <li class=" ">
                    <img width="65px " height="65px " class="bg-white p-1 rounded-sm m-1 " src="./src/img/rocket.svg "
                        alt="Rocket ">
                </li>
            </ul>
        </div>
        <!-- Footer Buttom -->
        <div class="footerBottom mt-4 ">
            <div class="copyright text-center ">
                © 2018-2023 FoodShahi, All Rights Reserved. Design &amp; Developed By
                <strong>
                    <a href="https://foodshahibd.com/ " style="color:#390000; ">Food Shahi BD</a>
                </strong>
            </div>
        </div>
    </footer>
    <!-- Footer Section End  -->

    <!-- Back to top button  -->
    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
        class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out bottom-5 right-5 z-50 duration-200"
        id="btn-back-to-top">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-4 h-4" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z">
            </path>
        </svg>
    </button>
`;
