var navlinks = [
	 	"<a href=\"index.html\">Home</a>",
	 	"<a href=\"celebrations.html\">Celebrations</a>",
	 	"<a href=\"weddings.html\">Weddings</a>",
	 	"<a href=\"promotions.html\">Promotions</a>",
	 	"<a href=\"gallery.html\">Gallery</a>",
	 	/*"<a href=\"blog.html\">Blog</a>",*/
	 	"<a href=\"pricing.html\">Pricing, T&C's</a>"
];

function navbar() {
	/* r = "<ul class=\"nav\">"; */
	r ="";
	for (i= 0; i < navlinks.length ; i++){
		r = r +navlinks[i];
	}
	/* r = "</ul>" */
	return r;
}