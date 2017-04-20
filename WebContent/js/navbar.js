var navlinks = [
	 	"<li class=\"nav\"><a href=\"index.html\">Home</a></li>",
	 	"<li class=\"nav\"><a href=\"index.html\">Birthdays</a></li>",
	 	"<li class=\"nav\"><a href=\"index.html\">Weddings</a></li>",
	 	"<li class=\"nav\"><a href=\"index.html\">Novelty</a></li>",
	 	"<li class=\"nav\"><a href=\"gallery.html\">Gallery</a></li>",
	 	"<li class=\"nav\"><a href=\"blog.html\">Blog</a></li>"
];

function navbar() {
	r = "<ul class=\"nav\">";
	for (i= 0; i < navlinks.length ; i++){
		r = r +navlinks[i];
	}
	return r;
}