var i = 0;
var MAX_LINKS_TOSHOW = 3; 
var blogs = 
	[
		"<a href=\"blogs\How_to_Choose_Your_Wedding_Cake\">  How to Choose Your Wedding Cake </a><br>",
		"<a href=\"blogs\Desserts_in_a_jiffy\">  Desserts in a jiffy  </a><br>",
		"<a href=\"blogs\Egg_Free_Baking\"> Egg Free Baking </a><br>",
		"<a href=\"blogs\Bake_with_Alcohol\"> Bake with Alcohol </a><br>",
		"<a href=\"blogs\Baking_Temprature_Control\"> Baking Temprature Control </a><br>",
		"<a href=\"blogs\Sugar_plus_plus\"> Sugar plus plus </a><br>",
		"<a href=\"blogs\Milk,_What's_best_for_baking\"> Milk, What's best for baking? </a><br>",
		"<a href=\"blogs\Organic_Eggs_makes_best_cakes\">  Organic Eggs makes best cakes </a><br>",
		"<a href=\"blogs\A_simple_cake_in_hurry\"> A simple cake in hurry </a><br>",
		"<a href=\"blogs\Making_perfect_cup_cakes\">  Making perfect cup cakes </a><br>",
		"<a href=\"blogs\Haloween_cakes\">  Haloween cakes </a><br>",
		"<a href=\"blogs\Irish_Brambake\"> Irish Brambake </a><br>",
		"<a href=\"blogs\English_Muffins_and_Yorkshire_Puddings\"> English Muffins and Yorkshire Puddings </a><br>",
		"<a href=\"blogs\World's_Unusual_Cakes\"> World's Unusual Cakes </a><br>",
		"<a href=\"blogs\Art_of_Baking_through_eyes_of_scienttist\"> Art of Baking through eyes of scienist </a><br>"
	];


function next() {
    //document.getElementById("blogpage").innerHTML = blogs[i];
    
	i++;
    if (i == blogs.length) i = 0;
    document.getElementById("blogpage").innerHTML = getblogs(i);
}

function getblogs(i) {
	var r = "";
	for ( j = 0 ; j < MAX_LINKS_TOSHOW ; j++) {
		
		k = j + i;
		if ( k >= blogs.length){
			k = j;
		}
		r = r + blogs[k];
	}
	return r;
}