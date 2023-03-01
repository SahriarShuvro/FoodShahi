let footer = document.getElementById("footer");

footer.innerHTML = `        <!-- Container Footer  -->
<div class="m-3 mt-8 flex flex-col justify-between items-stretch lg:flex-row " onclick="cartWindowHide()">
    <!-- Footer Left  -->
    <div class="footerLeft flex flex-col justify-center items-center lg:w-[48%] my-8 ">
        <p class="font-bold text-xl ">Get The App Now!</p>
        <p class="text-gray-500 font-normal mt-2 text-center text-sm ">Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ab reiciendis nihil, suscipit impedit eum tempora?</p>
        <br>
        <br>
        <a href="https://play.google.com/store/apps/details?id=com.riveredge.foodshahi " target="_blank "
            class="googlePlay bg-black flex items-center duration-300 px-3 py-1 hover:shadow-none justify-center ">
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
        <img src="./src/img/d_man.png " alt=" " class="absolute top-[45px] right-[30px] w-[130px] sm:w-64 ">
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
                    <a href="https://foodshahibd.com/faq " class="duration-900 hover:underline ">FAQ</a>
                </li>
                <li>
                    <a href="https://foodshahibd.com/about-us " class="duration-900 hover:underline ">About
                        Us</a>
                </li>
                <li>
                    <a href="https://foodshahibd.com/contact-us " class="duration-900 hover:underline ">
                        Contact
                        Us
                    </a>
                </li>
                <li>
                    <a href="https://foodshahibd.com/privacy-policy " class="duration-900 hover:underline ">
                        Privace
                        Policy
                    </a>
                </li>
                <li>
                    <a href="https://foodshahibd.com/terms-condition " class="duration-900 hover:underline ">
                        Terms &
                        Condition
                    </a>
                </li>
            </ul>
        </div>
        <!-- footer logo section  -->
        <div class="f_logo_section flex justify-center items-center ">
            <a href="https://foodshahibd.com ">
                <img src="./src/img/logo.png " alt=" " srcset=""
                    class="bg-white px-3 py-1 rounded-md w-[130px] ">
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
                <img width="65px " height="65px " class="bg-white p-1 rounded-sm m-1 "
                    src="./src/img/rocket.svg " alt="Rocket ">
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
`;
