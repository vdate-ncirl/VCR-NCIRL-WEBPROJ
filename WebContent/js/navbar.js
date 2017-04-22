var navlinks = [
	 	"<li class=\"nav\"><a href=\"index.html\">Home</a></li>",
	 	"<li class=\"nav\"><a href=\"celebrations.html\">Celebrations</a></li>",
	 	"<li class=\"nav\"><a href=\"weddings.html\">Weddings</a></li>",
	 	"<li class=\"nav\"><a href=\"promotions.html\">Promotions</a></li>",
	 	"<li class=\"nav\"><a href=\"gallery.html\">Gallery</a></li>",
	 	"<li class=\"nav\"><a href=\"blog.html\">Blog</a></li>",
	 	"<li class=\"nav\"><a href=\"pricing.html\">Pricing, T&C's</a></li>"
];

function navbar() {
	r = "<ul class=\"nav\">";
	for (i= 0; i < navlinks.length ; i++){
		r = r +navlinks[i];
	}
	return r;
}