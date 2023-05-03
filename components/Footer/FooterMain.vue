<template>
    <footer class="footer flex justifyBetween alignCenter">
        <div class="">
            <p class="footerText">© Studio Posoroko 2023</p>
        </div>

        <div class="h100 flex alignCenter gap20">
            <FooterTabBox />
        </div>

        <div class="h100 flex alignCenter">
            <WidgetsSocialBox />
        </div>
    </footer>
</template>

<style scoped> 
.footer {
    height: 80px;
    border-top: 1px solid var(--border-color-1);
    margin-top: 100px;
    padding: 0 10px;
}

</style>