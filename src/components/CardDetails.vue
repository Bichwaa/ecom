<template>
    <div class="payment-info bg-purple rounded-xl p-4">
            <div class="flex gap-16 justify-between">
                <h3 class="font-bold text-white">Card Details</h3>
                <img src="https://picsum.photos/100/100" alt="" width="40" height="40" class="rounded-md"/>
            </div>
            <div class="card-types my-1">
                <h4 class="text-white">Card Type</h4>
                <div class="flex gap-3">
                    <img :src="nine" alt="card icon"/>
                    <img :src="ten" alt="card icon"/>
                    <img :src="eleven" alt="card icon"/>
                    <div class="bg-fog p-2 text-white rounded cursor-pointer">see all</div>
                </div>
            </div>
            <div class="form-wrapper my-1">
                <form>
                    <div class="">
                        <label for="name" class="text-white text-xs">Name on card</label>
                        <br>
                        <input type="text" name="name" id="name" class="rounded p-1">
                    </div>

                    <div class="">
                        <label for="card-number" class="text-white text-xs">Card Number</label>
                        <br>
                        <input type="text" name="card-number" id="card-number" class="rounded p-1">
                    </div>

                    <div class="flex gap-3">
                        <div>
                            <label for="expire" class="text-white text-xs">Expiration Date</label>
                            <br>
                            <input type="text" name="expire" id="expire" class="w-24 rounded p-1">
                        </div>

                        <div>
                            <label for="cvv" class="text-white text-xs">CVV</label>
                            <br>
                            <input type="text" name="cvv" id="cvv" class="w-24 rounded p-1">
                        </div>
                    </div>

                    <hr class="text-slate-300 my-4"/>

                    <div class="sumary">
                        <div class="flex justify-between">
                            <span class="text-white">Subtotal</span>
                            <span class="text-white">{{ 300 }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-white">Shipping</span>
                            <span class="text-white">{{ 150 }}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-white">Total</span>
                            <span class="text-white">{{ 450 }}</span>
                        </div>
                    </div>

                    <div class="btn flex justify-between px-2 py-4 bg-blue rounded-xl my-2 cursor-pointer">
                        <span class="text-white">Tsh {{ 450 }}</span>
                        <span class="text-white">checkout &#8594</span>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup>
import nine from "../assets/9.svg"
import ten from "../assets/10.svg"
import eleven from "../assets/11.svg"
import twelve from "../assets/12.svg"

</script>