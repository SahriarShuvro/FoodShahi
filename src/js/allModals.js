let allModals = document.getElementById("allModals");

allModals.innerHTML = ` 
<!-- Address Modal  -->
    <div class="bg-modal fixed bg-gray-300 top-[50%] left-[50%] z-50 flex justify-center items-center overflow-y-scroll no-scrollbar duration-200 w-0 h-0"
        id="modal">
        <div
            class="absolute bg-white dark:bg-slate-700 rounded-md my-80  w-[90%] lg:w-[40%]  overflow-y-scroll no-scrollbar">
            <div class="flex justify-between px-6 py-3 items-center">
                <h5 class="" id="add-address">Add Delivery Address</h5>
                <button type="button" id="modalCloseButton">
                    <span aria-hidden="true"
                        class="material-symbols-outlined text-xl duration-200 hover:text-red-600">close</span>
                </button>
            </div>
            <hr>
            <div class="">
                <form>
                    <div class=" text-xs px-6 py-3">
                        <div class=" deliveryAreaInput">
                            <label for="inputPassword4" class="">Delivery Area</label>
                            <div class="flex justify-between mt-3 ">
                                <input type="text"
                                    class="inputsShadow outline-none px-4 py-2 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white  border border-gray-300 rounded-bl-md rounded-tl-md w-[95%]"
                                    placeholder="Delivery Area">
                                <div
                                    class="inputsShadow rounded-tr-md rounded-br-md border  border-black w-10 flex justify-center cursor-pointer duration-200 hover:bg-orange-600 hover:text-white hover:border-orange-600">
                                    <button type="submit"
                                        class="material-symbols-outlined flex justify-center items-center">
                                        pin_drop
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="compleatAddressinput flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Complete Address
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white border border-gray-300 rounded w-full"
                                placeholder="Complete Address e.g. house number, street name, landmark">
                        </div>
                        <div class="deliveryinstructions flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Delivery Instructions
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white border border-gray-300 rounded w-full"
                                placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall">
                        </div>
                        <div class="nickName flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Nickname
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white border border-gray-300 rounded w-full"
                                placeholder="Nickname e.g. Home, Office, Others...">
                        </div>
                    </div>
                </form>
            </div>
            <div class="flex justify-between items-center px-6 py-3">
                <button type="button" onclick="hideModal()"
                    class="w-[48%] border border-red-600 text-red-600 rounded-lg py-2 duration-300 hover:bg-red-600 hover:text-white "
                    data-dismiss="modal">CANCEL
                </button>
                <button type="button" onclick="hideModal()"
                    class="w-[48%] border border-green-500 text-white bg-green-500 rounded-lg py-2 duration-300 hover:bg-white dark:hover:bg-slate-700 hover:text-green-600 ">SUBMIT</button>
            </div>
        </div>
    </div>

    <!-- Address Edit Modal -->
    <div class="bg-modal fixed bg-gray-300 top-[50%] left-[50%] z-50 flex justify-center items-center overflow-y-scroll no-scrollbar duration-200 w-0 h-0"
        id="modal2">
        <div
            class="absolute bg-white dark:bg-slate-700 rounded-md my-80  w-[90%] lg:w-[40%]  overflow-y-scroll no-scrollbar">
            <div class="flex justify-between px-6 py-3 items-center">
                <h5 class="" id="add-address">Edit Delivery Address</h5>
                <button type="button" id="modalCloseButton">
                    <span aria-hidden="true" class="material-symbols-outlined text-xl duration-200 hover:text-red-600"
                        onclick="hideModal2()">close</span>
                </button>
            </div>
            <hr>
            <div class="">
                <form>
                    <div class=" text-xs px-6 py-3">
                        <div class=" deliveryAreaInput">
                            <label for="inputPassword4" class="">Delivery Area</label>
                            <div class="flex justify-between mt-3 ">
                                <input type="text"
                                    class="inputsShadow outline-none px-4 py-2  dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white  border border-gray-300 rounded-bl-md rounded-tl-md w-[95%]"
                                    placeholder="Delivery Area">
                                <div
                                    class="inputsShadow rounded-tr-md rounded-br-md border  border-black w-10 flex justify-center cursor-pointer duration-200 hover:bg-orange-600 hover:text-white hover:border-orange-600">
                                    <button type="submit"
                                        class="material-symbols-outlined flex justify-center items-center">
                                        pin_drop
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="compleatAddressinput flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Complete Address
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white  border border-gray-300 rounded w-full"
                                placeholder="Complete Address e.g. house number, street name, landmark">
                        </div>
                        <div class="deliveryinstructions flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Delivery Instructions
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white  border border-gray-300 rounded w-full"
                                placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall">
                        </div>
                        <div class="nickName flex flex-col justify-between mt-3 w-full">
                            <label for="inputPassword4">Nickname
                            </label>
                            <input type="text"
                                class="inputsShadow outline-none px-4 py-2 mt-3 dark:bg-slate-600 dark:placeholder-gray-400 dark:text-white  border border-gray-300 rounded w-full"
                                placeholder="Nickname e.g. Home, Office, Others...">
                        </div>
                    </div>
                </form>
            </div>
            <div class="flex justify-between items-center px-6 py-3">
                <button type="button" onclick="hideModal2()"
                    class="w-[48%] border border-red-600 text-red-600 rounded-lg py-2 duration-300 hover:bg-red-600 hover:text-white "
                    data-dismiss="modal">CANCEL
                </button>
                <button type="button" onclick="hideModal2()"
                    class="w-[48%] border border-green-500 text-white bg-green-500 dark:hover:bg-slate-700 rounded-lg py-2 duration-300 hover:bg-white hover:text-green-600 ">SUBMIT</button>
            </div>
        </div>
    </div>

    <!-- Order Progress  -->
    <div class="w-full fixed left-0 z-30 bottom-3 ">
        <a href="orderTrack.html" class="flex m-auto w-full md:w-[60%] ">
            <ol class="flex items-center w-auto orderProggress">
                <li
                    class=" flex w-full items-center text-orange-600 dark:text-orange-800 after:content-[''] after:w-full after:h-1 after:border-b after:border-orange-500 after:border-4 after:inline-block dark:after:border-orange-800">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-800 shrink-0">
                        <svg aria-hidden="true" class="w-5 h-5 text-orange-600 lg:w-6 lg:h-6 dark:text-orange-300"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </li>
                <li
                    class=" flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <span class="material-symbols-outlined w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100">
                            outdoor_grill </span>
                    </span>
                </li>
                <li
                    class=" flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <i class="fa fa-truck w-5 h-5 flex justify-center items-center text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                            aria-hidden="true"></i>
                    </span>
                </li>
                <li
                    class=" flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                            <path fill-rule="evenodd"
                                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </li>
                <li class=" flex items-center ">
                    <span
                        class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <i
                            class="fa fa-star w-5 h-5 flex justify-center items-center text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"></i>
                    </span>
                </li>
            </ol>
        </a>
    </div>

    <!-- Phone Edit  -->
    <div id="phoneEdit" tabindex="-1" aria-hidden="true"
        class="fixed top-[8rem] md:top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="phoneEdit">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div id="phoneEditModal" class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit your profile</h3>
                    <form action="#">
                        <div class="mb-6">
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                                Phone</label>
                            <input type="tel" name="phone" id="phoneNumber"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="01728XXXXXX" value="01728723881" required>
                        </div>
                        <div id="verification" class="h-0 overflow-hidden duration-200 m-0 opacity-0">
                            <label for="text"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification
                                Code</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="****">
                        </div>
                        <button id="varifyButton"
                            class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-600">Get
                            Code</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Profile modal -->
    <div id="editProfile" tabindex="-1" aria-hidden="true"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="editProfile">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit your profile</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Name" value="Shuvro" required>
                        </div>

                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Email</label>
                            <input type="email" name="email" id="email" value="8199shuvro@gmail.com" disabled
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div>
                            <label for="address"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Address</label>
                            <textarea type="address" name="address" id="address"
                                placeholder="Ghoramara-6100, Boalia, Beldarpara, Chattar Loudge"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>Ghoramara-6100, Boalia, Beldarpara, Chattar Loudge</textarea>
                        </div>

                        <button type="submit"
                            class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-600">Save</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- QR Code  -->
    <div id="scanCode" tabindex="-1"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="scanCode">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                    <img src="./src/img/qr-code.png" alt="Scan You QR Code" srcset=""
                        class="w-[15rem] h-[15rem] m-auto mb-4 rounded-[10px]">
                    <!-- <button data-modal-hide="scanCode" type="button"
                        class="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Okay
                    </button> -->

                </div>
            </div>
        </div>
    </div>

    <!-- About Refferl Code  -->
    <div id="infoAboutReffer" tabindex="-1"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="infoAboutReffer">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                    <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 id="textTranslate" data-tip="Click to translate to Bengali" onclick="translateLanguage()"
                        class="tooltip mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Share this code
                        with
                        your
                        friends. If someone uses this code while registering, you will get points for all completed
                        orders of that user. There is no limitation to sharing your referral code.</h3>
                    <button data-modal-hide="infoAboutReffer" type="button"
                        class="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        I Understand
                    </button>

                </div>
            </div>
        </div>
    </div>

    <!-- Change Password  -->
    <div id="passwordChange" tabindex="-1" aria-hidden="true"
        class="fixed top-[8rem] left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="passwordChange">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">To change password please
                        fill
                        the below form</h3>
                    <form class="space-y-6" action="#">

                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Type
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>

                        <button type="submit"
                            class="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Total Bill modal -->
    <div id="totalBill" tabindex="-1" aria-hidden="true"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="totalBill">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Total Bill Details</h3>
                    <form class="" action="#">
                        <div class="flex justify-between items-center w-full mb-1">
                            <span for="text" class=" text-sm font-medium text-gray-700 dark:text-white">Product
                                price:</span>
                            <span id="name" class=" text-gray-900 text-sm  dark:text-white">৳
                                200</span>
                        </div>
                        <div class="flex justify-between items-center w-full mb-1">
                            <span for="text" class=" text-sm font-medium text-gray-700 dark:text-white">Shipping:</span>
                            <span id="name" class=" text-gray-900 text-sm  dark:text-white">৳
                                50</span>
                        </div>
                        <hr class="mb-2">
                        <div class="flex justify-between items-center w-full mb-1">
                            <span for="text" class=" text-sm font-semibold text-gray-900 dark:text-white">Sub
                                total:</span>
                            <span id="name" class=" text-gray-900 text-sm font-semibold dark:text-white">৳
                                250</span>
                        </div>
                        <div class="flex justify-between items-center w-full mb-1">
                            <span for="text"
                                class=" text-sm font-medium text-green-600 dark:text-white">Discount:</span>
                            <span id="name" class=" text-green-600 text-sm  dark:text-white">৳
                                10</span>
                        </div>
                        <hr class="mb-2">
                        <div class="flex justify-between items-center w-full">
                            <span for="text" class=" text-sm font-medium text-gray-700 dark:text-white">Total:</span>
                            <span id="name" class=" text-gray-900 text-sm  dark:text-white">৳
                                240</span>
                        </div>

                        <button type="button" data-modal-hide="totalBill"
                            class="mt-4 w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-600">Okay</button>

                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Food image Expand  -->
    <div id="foodImageExpand" tabindex="-1"
        class="fixed top md:top-[8rem] left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="foodImageExpand">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                    <img id="foodImageInsert" src="" alt="Scan You QR Code" srcset=""
                        class="w-[15rem] h-[15rem] m-auto mb-4 rounded-[10px]">
                    <!-- <button data-modal-hide="foodImageExpand" type="button"
                        class="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Okay
                    </button> -->

                </div>
            </div>
        </div>
    </div>

    <!-- Sing In modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-[8rem] md:top SingUpModal left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute closeButton top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <div class="flex justify-between remember">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value=""
                                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        required>
                                </div>
                                <label for="remember"
                                    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                    me</label>
                            </div>
                            <a href="forgotPassword.html"
                                class="text-sm text-orange-700 hover:underline dark:text-orange-500">Lost
                                Password?</a>
                        </div>
                        <button type="submit"
                            class="w-full singUpButton text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login
                            to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="singUp.html"
                                class="text-orange-700 hover:underline dark:text-orange-500">Create account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Sing Up modal -->
    <div id="authentication-modal2" tabindex="-1" aria-hidden="true"
        class="fixed top-[3rem] md:top left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg SingUpModal shadow dark:bg-gray-700">
                <button type="button"
                    class="absolute closeButton top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal2">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Name</label>
                            <input type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Name" required>
                        </div>
                        <div>
                            <label for="dateOfBirth"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Of
                                Birth</label>
                            <input type="date" name="name" id="date"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Date Of Birth" required>
                        </div>
                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                Phone</label>
                            <input type="tel" name="phone" id="phone"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Phone" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required>
                        </div>
                        <button type="submit"
                            class="w-full singUpButton text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sing
                            Up</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            You have an account? <a href="singIn.html" data-modal-target="authentication-modal"
                                data-modal-toggle="authentication-modal" type="button"
                                class="text-orange-700 hover:underline dark:text-orange-500">Log In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Order Success modal  -->
    <div id="orderSuccess" tabindex="-1"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow border-2 border-success dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="orderSuccess">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center  ">
                    <i class="fa fa-check text-lg text-success rounded-full py-1.5 px-3 border-2 border-success"></i>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Your order has been placed
                        successful.</h3>
                    <button data-modal-hide="orderSuccess" type="button"
                        class=" border text-white border border-success bg-success hover:bg-success focus:ring-4 focus:outline-none focus:ring-success dark:focus:ring-success font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Okey
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Order Unsuccess modal  -->
    <div id="orderUnsuccess" tabindex="-1"
        class="fixed top-[8rem] md:top left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
        <div class="relative w-full h-full max-w-md md:h-auto">
            <div class="relative bg-white rounded-lg shadow border-2 border-red-600 dark:bg-gray-700">
                <button type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="orderUnsuccess">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center  ">
                    <svg aria-hidden="true" class="mx-auto mb-4 text-red-600 w-14 h-14 dark:text-red-200" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Your order has been
                        unsuccessful.</h3>
                    <button data-modal-hide="orderUnsuccess" type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                        Okey
                    </button>
                </div>
            </div>
        </div>
    </div>
`;
