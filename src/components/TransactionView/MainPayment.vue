<template>
    <main class="pt-[100px] pb-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
<div class="flex flex-col lg:grid lg:grid-cols-12 gap-xl">
<!-- Left Column: Delivery & Payment Details -->
<div class="lg:col-span-7 flex flex-col gap-lg">
<!-- Back Button -->
<button class="flex items-center gap-xs text-on-surface-variant font-medium group w-fit">
<span class="material-symbols-outlined transition-transform group-hover:-translate-x-1" data-icon="arrow_back">arrow_back</span>
<span class="font-label-md text-label-md">Return to Menu</span>
</button>
<!-- Section Heading -->
<div>
<h1 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">Secure Checkout</h1>
<div class="flex items-center gap-sm mt-base text-primary">
<span class="material-symbols-outlined" data-icon="bolt">bolt</span>
<span class="font-label-md text-label-md">Q'BOCAO EXPRESS: ETA 18-24 MINUTES</span>
</div>
</div>
<!-- Delivery Address Form -->
<section class="bg-surface-container-lowest p-md rounded-xl payment-card-shadow border border-surface-variant">
<div class="flex items-center gap-sm mb-md">
<span class="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
<h2 class="font-headline-sm text-headline-sm uppercase tracking-tight">Delivery Address</h2>
</div>
<form class="grid grid-cols-1 md:grid-cols-2 gap-md">
<div class="md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">STREET ADDRESS</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="e.g. 123 Culinary Way" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">APARTMENT / SUITE</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Bldg 4, Apt 2B" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">PHONE NUMBER</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</form>
</section>
<!-- Payment Method Selection -->
<section class="bg-surface-container-lowest p-md rounded-xl payment-card-shadow border border-surface-variant">
<div class="flex items-center gap-sm mb-md">
<span class="material-symbols-outlined text-primary" data-icon="payments">payments</span>
<h2 class="font-headline-sm text-headline-sm uppercase tracking-tight">Payment Method</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-md">
<!-- Credit Card -->
<label class="relative cursor-pointer group">
<input checked="" class="peer sr-only" name="payment" type="radio" value="card"/>
<div class="flex flex-col items-center gap-sm p-md rounded-xl border-2 border-surface-variant bg-surface group-hover:border-primary-fixed transition-all peer-checked:border-primary peer-checked:bg-primary-container peer-checked:text-on-primary-container">
<span class="material-symbols-outlined text-[32px]" data-icon="credit_card">credit_card</span>
<span class="font-label-md text-label-md">Credit Card</span>
</div>
</label>
<!-- PayPal -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="payment" type="radio" value="paypal"/>
<div class="flex flex-col items-center gap-sm p-md rounded-xl border-2 border-surface-variant bg-surface group-hover:border-primary-fixed transition-all peer-checked:border-primary peer-checked:bg-primary-container peer-checked:text-on-primary-container">
<span class="material-symbols-outlined text-[32px]" data-icon="account_balance_wallet">account_balance_wallet</span>
<span class="font-label-md text-label-md">PayPal</span>
</div>
</label>
<!-- COD -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="payment" type="radio" value="cash"/>
<div class="flex flex-col items-center gap-sm p-md rounded-xl border-2 border-surface-variant bg-surface group-hover:border-primary-fixed transition-all peer-checked:border-primary peer-checked:bg-primary-container peer-checked:text-on-primary-container">
<span class="material-symbols-outlined text-[32px]" data-icon="delivery_dining">delivery_dining</span>
<span class="font-label-md text-label-md">Cash on Delivery</span>
</div>
</label>
</div>
<!-- Credit Card Form (Conditional) -->
<div class="mt-lg grid grid-cols-1 md:grid-cols-2 gap-md opacity-100 transition-opacity duration-300" id="card-details">
<div class="md:col-span-2">
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">CARDHOLDER NAME</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">CARD NUMBER</label>
<div class="relative">
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary pl-12" placeholder="0000 0000 0000 0000" type="text"/>
<span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="credit_card">credit_card</span>
</div>
</div>
<div class="grid grid-cols-2 gap-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">EXPIRY</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary text-center" placeholder="MM/YY" type="text"/>
</div>
<div>
<label class="block font-label-sm text-label-sm text-on-surface-variant mb-xs">CVV</label>
<input class="w-full bg-surface border border-outline-variant rounded-lg p-md focus:outline-none focus:ring-2 focus:ring-primary text-center" placeholder="***" type="password"/>
</div>
</div>
</div>
</section>
</div>
<!-- Right Column: Order Summary (Floating Card) -->
<div class="lg:col-span-5">
<div class="sticky top-[100px] flex flex-col gap-md">
<section class="bg-surface-container-highest dark:bg-inverse-surface p-md rounded-xl shadow-xl border border-outline-variant flex flex-col gap-md">
<div class="flex items-center justify-between">
<h2 class="font-headline-sm text-headline-sm text-primary">Your Order</h2>
<span class="bg-accent-yellow text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">3 ITEMS</span>
</div>
<!-- Item List -->
<div class="flex flex-col gap-sm max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
<!-- Item 1 -->
<div class="flex items-center gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
<img class="w-full h-auto object-cover" data-alt="A gourmet artisan cheeseburger with a perfectly seared beef patty, melting cheddar, and fresh greens, shot on a clean white background with professional lighting to showcase the juicy texture and vibrant colors in a minimalist culinary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdPpiLYZSHewjNGoXzRvsSZPAh6Eangyrqt6TAikLbwl2JZCfSTqOFtKVQkp69ROPYA3MExKrk0dbRETaRwIyXjpfoiJMqAbofgf1Yzwt4Xq0sYb-4eJVGzILVxG4mlcLR2N1BTaaNRO63em7N48T40BoJkcgsR2DAB8iVMSifPtkofYDarrdxeB5rfxPRgW44p7T6YqCmzvCzONSEDDCb-ah-_nwH0pTNn0Jwy2JYuEJbYhES7Ei7atGoRokCazlxZaRhPcsR1ZE"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface">Umami Bocao Burger</p>
<p class="text-on-surface-variant font-label-sm text-label-sm">Qty: 1</p>
</div>
<p class="font-label-md text-label-md text-on-surface">$14.50</p>
</div>
<!-- Item 2 -->
<div class="flex items-center gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
<img class="w-full h-auto object-cover" data-alt="Crispy golden truffle fries seasoned with aromatic herbs and sea salt, served in a minimalist white bowl. The lighting is high-key and bright, emphasizing the crunchy texture and the sleek, professional urban dining aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU987UwCleEqdI-Sqh1UZFeQtQ2LAI3PhJF16XOMphPJqRa8KJyuJsboKoUONE74OpFc4zfCd5EjAgY-9oTJ7ppWL-k8KGdqyV-TWs9O6UgdsCRFLG7nKpo0Ndeb_bFDb8SG2wIO5jkqVWLUBaUiyiNqX_VpYg50dDgQeWXkWZf5Zq02vDTDmNsUCLgyjvmD_zp-6xs5RhB8AYYOt2D2QlZAUHngea_iAkJmbbwUSfCAYC_yjOjzN_ScrmOLVWi50L5uCblgA6CB8"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface">Truffle Latino Fries</p>
<p class="text-on-surface-variant font-label-sm text-label-sm">Qty: 2</p>
</div>
<p class="font-label-md text-label-md text-on-surface">$12.00</p>
</div>
<!-- Item 3 -->
<div class="flex items-center gap-md">
<div class="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
<img class="w-full h-auto object-cover" data-alt="A refreshing artisan craft soda in a chilled glass bottle with water droplets, featuring a vibrant red color. The scene is bright and airy, reflecting a high-speed premium beverage experience in an upscale city professional setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQTpQGvwWtgJM7T5KcYOIOQkI6KxkZFOItcAC1Udyfvhay-3tKemAaGis1CI3XLAyZVwgY5PzdQoTMj9fmyvD_C7CLOnJ9OgjIZuLF8TUMHqWW7yDsKLcxQhUOwjxPfZ1D0VkIrewwpatevztwCemDrpYVELFwsvLeyffVK2pGJnTszbbHtcWoZwzgb6vcAq48zrYlsjLEpx2xfSVGt7DF1eQBCXZB9IvqdK1-SnlqYcSO8xSaEKp0PO9j1RbzKLBciL0sbRQWrHo"/>
</div>
<div class="flex-grow">
<p class="font-label-md text-label-md text-on-surface">Craft Latino Soda</p>
<p class="text-on-surface-variant font-label-sm text-label-sm">Qty: 1</p>
</div>
<p class="font-label-md text-label-md text-on-surface">$4.50</p>
</div>
</div>
<!-- Divider -->
<div class="h-[1px] bg-outline-variant w-full my-xs"></div>
<!-- Calculation -->
<div class="flex flex-col gap-base">
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>$31.00</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Delivery Fee</span>
<span class="text-accent-blue font-bold">FREE</span>
</div>
<div class="flex justify-between font-body-md text-body-md text-on-surface-variant">
<span>Tax (8%)</span>
<span>$2.48</span>
</div>
<div class="flex justify-between font-headline-md text-headline-md text-on-surface mt-sm">
<span>Total</span>
<span class="text-primary">$33.48</span>
</div>
</div>
<!-- Place Order Button -->
<button class="w-full bg-primary text-on-primary py-md rounded-full font-headline-sm text-headline-sm flex items-center justify-center gap-sm hover:bg-primary-container active:scale-95 transition-all shadow-lg mt-md">
<span>PLACE ORDER</span>
<span class="material-symbols-outlined" data-icon="rocket_launch">rocket_launch</span>
</button>
<p class="text-center font-label-sm text-label-sm text-on-surface-variant">
                            By placing order, you agree to our <a class="underline" href="#">Terms &amp; Conditions</a>
</p>
</section>
<!-- Trust Badge -->
<div class="flex items-center justify-center gap-md opacity-60">
<span class="material-symbols-outlined text-accent-blue" data-icon="verified_user">verified_user</span>
<span class="font-label-sm text-label-sm">256-BIT SECURE PAYMENT</span>
<span class="h-4 w-[1px] bg-on-surface-variant"></span>
<span class="material-symbols-outlined text-accent-blue" data-icon="local_shipping">local_shipping</span>
<span class="font-label-sm text-label-sm">TRACKING INCLUDED</span>
</div>
</div>
</div>
</div>
</main>
</template>