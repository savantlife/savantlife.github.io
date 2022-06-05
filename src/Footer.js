import savantlogo from './assets/savantlogo.png'
export default function Footer() {
    return(
<div className='pt-6 bg-savant-home'>
<footer class="bg-savant-home m-auto border-t-2	border-white mx-6">
<div class="grid grid-cols-1 gap-8 py-8 px-6 m-auto w-11/12 lg:w-10/12 md:grid-cols-3 text-white">
<div className='m-auto md:my-0 md:mx-auto'>
<ul class="text-white">
<li class="mb-4">
<img
                    className="h-12 w-auto"
                    src={savantlogo}
                    alt="Savant"
                  /></li>
</ul>
</div>
<div className='m-auto md:my-0 md:mx-auto text-center md:text-left'>
<h2 class="mb-6 text-sm font-semibold uppercase">Menu</h2>
<ul class="text-white">
<li class="mb-4">
<a href="/" class="hover:underline">Home</a>
</li>
<li class="mb-4">
<a href="/products" class="hover:underline">Savant</a>
</li>
<li class="mb-4">
<a href="/products/metaweaver" class="hover:underline">MetaWeaver
</a></li><a href="/aboutus" class="hover:underline">About Us
</a><li class="mb-4"><a href="#" class="hover:underline">
</a>
</li>
</ul>
</div>
<div className='m-auto md:my-0 md:mx-auto text-center md:text-left'>
<h2 class="mb-6 text-sm font-semibold  uppercase">Connect with us</h2>
<ul class="text-white">
<li class="mb-4">
<a href="mailto:srujanesh@savant.life" class="hover:underline">Email</a>
</li>
<li class="mb-4">
<a href="#" class="hover:underline">Facebook</a>
</li>
<li class="mb-4">
<a href="#" class="hover:underline">Twitter</a>
</li>
<li class="mb-4">
<a href="https://www.instagram.com/savant.life/" class="hover:underline">Instagram</a>
</li>
<li class="mb-4">
<a href="https://www.linkedin.com/company/savant-life/" class="hover:underline">LinkedIn</a>
</li>
<li class="mb-4">
<a href="#" class="hover:underline">YouTube</a>
</li>
</ul>
</div>
</div>
</footer>
</div>

    )
}