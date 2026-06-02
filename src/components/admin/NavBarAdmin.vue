<template>
    <header
        class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-margin-desktop h-16 bg-secondary dark:bg-inverse-surface shadow-md">
        <div class="flex items-center gap-md">
            <span class="font-headline-md text-headline-md font-bold text-on-secondary">Q'Bocao Admin</span>
            <div class="hidden md:flex bg-surface-container-lowest/20 rounded-lg px-base py-xs items-center gap-xs">
                <span class="material-symbols-outlined text-on-secondary text-[20px]">search</span>
                <input
                    class="bg-transparent border-none text-on-secondary placeholder:text-on-secondary/60 focus:ring-0 font-label-lg text-label-lg w-64"
                    placeholder="Buscar pedidos o clientes..." type="text" />
            </div>
        </div>
        <div class="flex items-center gap-md">
            <button
                class="material-symbols-outlined text-on-secondary hover:bg-white/10 p-xs rounded-full transition-all">notifications</button>
            <button
                class="material-symbols-outlined text-on-secondary hover:bg-white/10 p-xs rounded-full transition-all">apps</button>
            <div class="h-10 w-10 rounded-full overflow-hidden border-2 border-primary-container">
                <img alt="Administrator profile picture" class="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX3XW3WbYLtNTIY5v5Zv0oNdnMWD4vAE68eSKb2gZQPiuimMQA8guZikK_MfEsYzK5ePu7133H1j1gkHF5C5X58GmnJVuDbKAeCYzvvv3TgXC8ioH83E2ajinItV2KPeBr0Mce6G8NtEVQkRKtybgkqK2aLYHGbq7W0hnZak8YYljet1AItO9dxzgxLDdzLwL500StW9f5LIdO2Oy6O8mt-GSq91DWDoBz2FFr6TcW5DIY0YlwualYLL1X1m4xGfveiaX-bBsgBLM" />
            </div>
        </div>
    </header>
</template>