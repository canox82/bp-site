<script>
    import "../app.css";
    import bpLogo from '$lib/img/bp_logo.webp'
    import facebookLogo from '$lib/img/facebook.png'
    import instagramLogo from '$lib/img/instagram.webp'
    import pinterestLogo from '$lib/img/pinterest.webp'
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
</style>

<main>
    <div class="flex flex-col h-screen justify-between text-gray-400 font-bpfont">
        <header>
            <div class="flex my-5 items-center">
                <div class="mx-10"><img src={bpLogo} alt="Logo BP Garden Designer" loading="lazy" decoding="async" /></div>
                <div class="flex mx-20 items-end">
                    <span class="text-2xl">Barbara Ponti</span><span class="text-xl">&nbsp; -  garden designer</span>
                </div>
            </div>
            
            <nav class="text-center my-10 space-x-10 text-sm">
                <a href="/">Home</a>
                <a href="/about">About me</a>
                <a href="/">Bottega</a>
                <a href="/">Servizi</a>
                <a href="/">Giardini</a>
                <a href="/">I like</a>
                <a href="/">Video</a>
                <a href="/">Contatti</a>
            </nav>
        </header>
        <div class="text-sm m-5">
            <slot></slot>
        </div>
        <footer class="relative text-sm m-5">
            <div class="absolute right-1 bottom-0">
                <div class="flex items-end space-x-5">
                <a href="https://www.instagram.com/bp.garden.designer/" target="new"><img src={instagramLogo} alt="BP Garden Designer on Instagram" loading="lazy" decoding="async" /></a>
                <a href="http://www.pinterest.com/centox100verde/" target="new"><img src={pinterestLogo} alt="BP Garden Designer on Pinterest" loading="lazy" decoding="async" /></a>
                <a href="http://www.facebook.com/barbara.ponti.79" target="new"><img src={facebookLogo} alt="BP Garden Designer on Facebook" loading="lazy" decoding="async" /></a>
                </div>
            </div>
        </footer>
    </div>
</main>