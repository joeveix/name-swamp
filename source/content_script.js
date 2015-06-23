walk(document.body);

function walk(node) 
{
	// I ripped/altered all this code from here:
	// http://is.gd/5C5GHb
	// and they took it from here:
	// http://is.gd/mwZp7E
	// I hope this is okay. Please don't hurt me.
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	
	// Rand Paul
	v = v.replace(/\bRand Paul\b/g, "Taco Bonerstink");
	v = v.replace(/\bRandPaul\b/g, "TacoBonerstink");
	v = v.replace(/\brand paul\b/g, "taco bonerstink");
	v = v.replace(/\bRandal Paul\b/g, "Taco Bonerstink");
	v = v.replace(/\brandal paul\b/g, "taco bonerstink");
	v = v.replace(/\brandal howard \"rand\" paul\b/g, "taco bonerstink");
	v = v.replace(/\bRandal Howard \"Rand\" Paul\b/g, "Taco Bonerstink");
	v = v.replace(/\brandpaul\b/g, "tacobonerstink");
	v = v.replace(/\bRand_Paul\b/g, "Taco_Bonerstink");
	v = v.replace(/\brand_paul\b/g, "taco_bonerstink");
	v = v.replace(/\brand-paul\b/g, "taco-bonerstink");
	v = v.replace(/\bRand-Paul\b/g, "Taco-Bonerstink");
	v = v.replace(/\bpaul\b/g, "bonerstink");
	v = v.replace(/\bPaul\b/g, "Bonerstink"); // Apologies to everyone named Paul, just trying to be thorough.

	// Hillary Clinton
	v = v.replace(/\bHillary Clinton\b/g, "Lady Inevitable");
	v = v.replace(/\bhillary clinton\b/g, "lady inevitable");
	v = v.replace(/\bHillary Rodham Clinton\b/g, "Lady Inevitable");
	v = v.replace(/\bhillary rodham clinton\b/g, "lady inevitable");
	v = v.replace(/\bHillary Diane Rodham Clinton\b/g, "Lady Inevitable");
	v = v.replace(/\bhillary diane rodham clinton\b/g, "lady inevitable");
	v = v.replace(/\bHillaryClinton\b/g, "LadyInevitable");
	v = v.replace(/\bhillaryclinton\b/g, "ladyinevitable");
	v = v.replace(/\bhillary_clinton\b/g, "lady_inevitable");
	v = v.replace(/\bhillary-clinton\b/g, "lady-inevitable");
	v = v.replace(/\bHillary-Clinton\b/g, "Lady-Inevitable");
	v = v.replace(/\bHillary_Clinton\b/g, "Lady_Inevitable");
	v = v.replace(/\bHillary_Rodham_Clinton\b/g, "Lady Inevitable");
	v = v.replace(/\bClinton\b/g, "Lady Inevitable");
	v = v.replace(/\bHillary\b/g, "Lady Inevitable");

	// Bernie Sanders 
	v = v.replace(/\bBernie Sanders\b/g, "Tragic Idealist");
	v = v.replace(/\bbernie sanders\b/g, "Tragic Idealist");
	v = v.replace(/\bBernieSanders\b/g, "Tragic Idealist");
	v = v.replace(/\bBernard \"Bernie\" Sanders\b/g, "Tragic Idealist");
	v = v.replace(/\bBernie for President\b/g, "Tragic Idealist for President");
	v = v.replace(/\bberniesanders\b/g, "tragicidealist");
	v = v.replace(/\bBernie-Sanders\b/g, "Tragic-Idealist");
	v = v.replace(/\bBernie_Sanders\b/g, "Tragic_Idealist");
	v = v.replace(/\bbernie-sanders\b/g, "tragic-idealist");
	v = v.replace(/\bbernie_Sanders\b/g, "tragic_idealist");
	v = v.replace(/\bSanders\b/g, "The Tragic Idealist");

	// Ted Cruz
	v = v.replace(/\bTed Cruz\b/g, "Lil Baby Pee Pee");
	v = v.replace(/\bted cruz\b/g, "Lil Baby Pee Pee");
	v = v.replace(/\bTedCruz\b/g, "Lil Baby Pee Pee");
	v = v.replace(/\bTed_Cruz\b/g, "Lil_Baby_Pee_Pee");
	v = v.replace(/\bTed-Cruz\b/g, "Lil-Baby-Pee-Pee");
	v = v.replace(/\bted-cruz\b/g, "lil-baby-pee-Pee");
	v = v.replace(/\bTed-Cruz\b/g, "Lil-Baby-Pee-Pee");
	v = v.replace(/\bRafael Edward \"Ted\" Cruz\b/g, "Lil Baby Pee Pee");
	v = v.replace(/\btedcruz\b/g, "LilBabyPeePee");
	v = v.replace(/\bcruz\b/g, "lilbabypeepee");
	v = v.replace(/\bCruz\b/g, "Lil Baby Pee Pee");

	// Rick Santorum
	v = v.replace(/\bRick Santorum\b/g, "Ol' Frothy");
	v = v.replace(/\brick santorum\b/g, "Ol' Frothy");
	v = v.replace(/\bRickSantorum\b/g, "OlFrothy");
	v = v.replace(/\bricksantorum\b/g, "OlFrothy");
	v = v.replace(/\brick-santorum\b/g, "ol-frothy");
	v = v.replace(/\bRick-Santorum\b/g, "Ol-Frothy");
	v = v.replace(/\bRick_Santorum\b/g, "Ol_Frothy");
	v = v.replace(/\brick_santorum\b/g, "ol_frothy");
	v = v.replace(/\bRichard John \"Rick\" Santorum\b/g, "Ol' Frothy");
	v = v.replace(/\bSantorum\b/g, "Ol' Frothy");

	// Marco Rubio
	v = v.replace(/\bMarco Rubio\b/g, "The Combover Kid");
	v = v.replace(/\bmarco rubio\b/g, "The Combover Kid");
	v = v.replace(/\bMarcoRubio\b/g, "The Combover Kid");
	v = v.replace(/\bmarcorubio\b/g, "TheComboverKid");
	v = v.replace(/\bMarco Antonio Rubio\b/g, "The Combover Kid");
	v = v.replace(/\bMarcoRubio\b/g, "The Combover Kid");
	v = v.replace(/\bmarco-rubio\b/g, "combover-kid");
	v = v.replace(/\bmarco_rubio\b/g, "combover_kid");
	v = v.replace(/\bMarco_Rubio\b/g, "Combover_Kid");
	v = v.replace(/\bMarco-Rubio\b/g, "Combover-Kid");
	v = v.replace(/\bmarcorubio\b/g, "comboverkid");
	v = v.replace(/\bRubio\b/g, "The Combover Kid");
	v = v.replace(/\brubio\b/g, "comboverkid");
	
	// Ben Carson
	v = v.replace(/\bDr. Ben Carson\b/g, "Dr. Nope");
	v = v.replace(/\bBen Carson\b/g, "Dr. Nope");
	v = v.replace(/\bben carson\b/g, "Dr. Nope");
	v = v.replace(/\bbencarson\b/g, "drnope");
	v = v.replace(/\bBenjamin Solomon \"Ben\" Carson\b/g, "Dr. Nope");
	v = v.replace(/\bDr. Carson\b/g, "Dr. Nope");
	v = v.replace(/\bben-carson\b/g, "dr-nope");
	v = v.replace(/\bben_carson\b/g, "dr_nope");
	v = v.replace(/\bBen-Carson\b/g, "Dr-Nope");
	v = v.replace(/\bBen_Carson\b/g, "Dr_Nope");
	v = v.replace(/\bCarson\b/g, "Dr. Nope");

	// Carly Fiorina
	v = v.replace(/\bCarly Fiorina\b/g, "Fired CEO");
	v = v.replace(/\bcarlyfiorina\b/g, "firedceo");
	v = v.replace(/\bcarly fiorina\b/g, "fired ceo");
	v = v.replace(/\bcarlyforamerica\b/g, "firedceoforamerica");
	v = v.replace(/\bcarlyforpresident\b/g, "firedceoforpresident");
	v = v.replace(/\bcarly-fiorina\b/g, "fired-ceo");
	v = v.replace(/\bcarly_fiorina\b/g, "fired_ceo");
	v = v.replace(/\bCarly-Fiorina\b/g, "Fired-CEO");
	v = v.replace(/\bCarly_Fiorina\b/g, "Fired_CEO");
	v = v.replace(/\bFiorina\b/g, "Fired CEO");

	// Mike Huckabee
	v = v.replace(/\bMike Huckabee\b/g, "Fuckabee");
	v = v.replace(/\bmike huckabee\b/g, "Fuckabee");
    v = v.replace(/\bMikeHuckabee\b/g, "Fuckabee");
	v = v.replace(/\bGovMikeHuckabee\b/g, "GovFuckabee");
	v = v.replace(/\bmikehuckabee\b/g, "fuckabee");
	v = v.replace(/\bMichael Dale \"Mike\" Fuckabee\b/g, "fuckabee");
	v = v.replace(/\bMike Huckabee\b/g, "Fuckabee");
	v = v.replace(/\bMike-Huckabee\b/g, "Fuckabee");
	v = v.replace(/\bMike_Huckabee\b/g, "Fuckabee");
	v = v.replace(/\bmike-huckabee\b/g, "Fuckabee");
	v = v.replace(/\bmike_huckabee\b/g, "Fuckabee");
	v = v.replace(/\bHuckabee\b/g, "Fuckabee");
	v = v.replace(/\bhuckabee\b/g, "Fuckabee");

	// Jeb Bush
	v = v.replace(/\bJeb Bush\b/g, "Ham Face");
	v = v.replace(/\bjeb bush\b/g, "Ham Face");
	v = v.replace(/\bJebBush\b/g, "HamFace");
    v = v.replace(/\bjebbush\b/g, "hamface");
	v = v.replace(/\bJohn Ellis \"Jeb\" Bush\b/g, "Ham Face");
	v = v.replace(/\bjohn ellis \"jeb\" bush\b/g, "Ham Face");
	v = v.replace(/\bjeb-bush\b/g, "ham-face");
	v = v.replace(/\bJeb-Bush\b/g, "Ham-Face");
	v = v.replace(/\bJeb_Bush\b/g, "Ham_Face");
	v = v.replace(/\bjeb_bush\b/g, "ham_face");
	v = v.replace(/\bBush\b/g, "Ham Face");
	
    // Election day
    v = v.replace(/\bElection Day\b/g, "Day of Reckoning");
    v = v.replace(/\belection day\b/g, "Day of Reckoning");
	v = v.replace(/\belection-day\b/g, "day-of-reckoning");
	v = v.replace(/\bElection-Day\b/g, "Day-of-Reckoning");
	v = v.replace(/\bElection_Day\b/g, "Day_of_Reckoning");
	v = v.replace(/\belection_day\b/g, "day_of_reckoning");

	// Scott Walker
	v = v.replace(/\bScott Walker\b/g, "Whine Rand");
	v = v.replace(/\bScottWalker\b/g, "WhineRand");
	v = v.replace(/\bscottwalker\b/g, "whinerand");
	v = v.replace(/\bscott-walker\b/g, "whine-rand");
	v = v.replace(/\bscott_walker\b/g, "whine_rand");
	v = v.replace(/\bScott-Walker\b/g, "Whine-Rand");
	v = v.replace(/\bScott_Walker\b/g, "Whine_Rand");
	v = v.replace(/\bScott Kevin Walker\b/g, "Whine Rand");
	v = v.replace(/\bWalker\b/g, "Whine Rand");

	// Sarah Palin
	v = v.replace(/\bSarah Palin\b/g, "She Who Must Not Be Named");
	v = v.replace(/\bSarahPalin\b/g, "SheWhoMustNotBeNamed");
	v = v.replace(/\bSarahPalinUSA\b/g, "SheWhoMustNotBeNamedUSA");
	v = v.replace(/\bsarahpalin\b/g, "shewhomustnotbenamed");
	v = v.replace(/\bSarah_Palin\b/g, "She_Who_Must_Not_Be_Named");
	v = v.replace(/\bSarah Louise Palin\b/g, "She Who Must Not Be Named");
	v = v.replace(/\bsarah-palin\b/g, "she-who-must-not-be-named");
	v = v.replace(/\bSarah-Palin\b/g, "She-Who-Must-Not-Be-Named");
	v = v.replace(/\bsarah_palin\b/g, "she_who_must_not_be_named");
	
	//Republicans
	v = v.replace(/\bRepublican Party\b/g, "Galactic Empire");
	v = v.replace(/\bRepublican party\b/g, "galactic empire");
	v = v.replace(/\bRepublicanParty\b/g, "GalacticEmpire");
	v = v.replace(/\brepublicanparty\b/g, "galacticempire");
	v = v.replace(/\brepublican party\b/g, "Galactic Empire");
	v = v.replace(/\bRepublican-Party\b/g, "Galactic-Empire");
	v = v.replace(/\bRepublican_Party\b/g, "Galactic_Empire");
	v = v.replace(/\brepublican-party\b/g, "galactic-empire");
	v = v.replace(/\brepublican_Party\b/g, "galactic_empire");
	v = v.replace(/\bRepublicans\b/g, "Galactic Empire");
	v = v.replace(/\brepublicans\b/g, "Galactic Empire");
	v = v.replace(/\bRepublican\b/g, "Galactic Empire");
	v = v.replace(/\brepublican\b/g, "Galactic Empire");
	v = v.replace(/\bGOP\b/g, "GEP");
	v = v.replace(/\bgop\b/g, "gep");
		
	// Chucky Johnson
	v = v.replace(/\bCharles C. Johnson\b/g, "Floor Pooper");
	v = v.replace(/\bcharles c. johnson\b/g, "Floor Pooper");
	v = v.replace(/\bcharlescjohnson\b/g, "floorpooper");
	v = v.replace(/\bcharles c johnson\b/g, "floor pooper");
	v = v.replace(/\bcharles-c-johnson\b/g, "floor-pooper");
	v = v.replace(/\bcharles_c_johnson\b/g, "floor_pooper");
	v = v.replace(/\bChuck C. Johnson\b/g, "Floor Pooper");
	v = v.replace(/\bchuck c. johnson\b/g, "Floor Pooper");
	v = v.replace(/\bchuckcjohnson\b/g, "floorpooper");
	v = v.replace(/\bchuckcj\b/g, "floorpooper");
	v = v.replace(/\bCharles Johnson\b/g, "Floor Pooper");
	v = v.replace(/\bCharlesJohnson\b/g, "FloorPooper"); // Christ why does he have so many different names
	v = v.replace(/\bcharlesjohnson\b/g, "floorpooper");
	v = v.replace(/\bChuck Johnson\b/g, "Floor Pooper");
	v = v.replace(/\bChuckJohnson\b/g, "FloorPooper");
	v = v.replace(/\bchuckjohnson\b/g, "floorpooper");
	v = v.replace(/\bchuckcjohnson\b/g, "floorpooper");
	v = v.replace(/\bjohnson\b/g, "Floor Pooper");
	
	//Rick Perry
	v = v.replace(/\bRick Perry\b/g, "Racist Cowboy");
	v = v.replace(/\brick perry\b/g, "racist cowboy");
	v = v.replace(/\brickperry\b/g, "racistcowboy");
	v = v.replace(/\bgovernorperry\b/g, "racistcowboy");
	v = v.replace(/\bGovernorPerry\b/g, "racistcowboy");
	v = v.replace(/\bRickPerry\b/g, "RacistCowboy");
	v = v.replace(/\bRick-Perry\b/g, "Racist-Cowboy");
	v = v.replace(/\bRick_Perry\b/g, "Racist_Cowboy");
	v = v.replace(/\brick-perry\b/g, "racist-cowboy");
	v = v.replace(/\brick_perry\b/g, "racist-cowboy");
	v = v.replace(/\bJames Richard "Rick" Perry\b/g, "racistcowboy");
	v = v.replace(/\bPerry\b/g, "Racist Cowboy");
	
    // Bobby Jindal
	v = v.replace(/\bBobby Jindal\b/g, "Homophobicus Maximus");
	v = v.replace(/\bBobbyJindal\b/g, "HomophobicusMaximus");
	v = v.replace(/\bbobby jindal\b/g, "homophobicus maximus");
	v = v.replace(/\bbobbyjindal\b/g, "homophobicusmaximus");
	v = v.replace(/\bbobby-jindal\b/g, "homophobicus-maximus");
	v = v.replace(/\bbobby_jindal\b/g, "homophobicus_maximus");
	v = v.replace(/\bBobby-Jindal\b/g, "Homophobicus-Maximus");
	v = v.replace(/\bBobby_Jindal\b/g, "Homophobicus_Maximus");
	v = v.replace(/\bPiyush "Bobby" Jindal\b/g, "Homophobicus Maximus");
	v = v.replace(/\bJindal\b/g, "Homophobicus Maximus");
	
    // Chris Christie
	v = v.replace(/\bChris Christie\b/g, "Bridge Troll");
	v = v.replace(/\bChrisChristie\b/g, "BridgeTroll");
	v = v.replace(/\bchris christie\b/g, "bridge troll");
	v = v.replace(/\bchrischristie\b/g, "bridgetroll");
	v = v.replace(/\bChris-Christie\b/g, "Bridge-Troll");
	v = v.replace(/\bChris_Christie\b/g, "Bridge_Troll");
	v = v.replace(/\bchris-christie\b/g, "bridge-troll");
	v = v.replace(/\bchris_christie\b/g, "bridge_troll");
	v = v.replace(/\bGovernorChristie\b/g, "Bridge Troll");
	v = v.replace(/\bgovchristie\b/g, "bridgetroll");
	v = v.replace(/\bChristopher James "Chris" Christie\b/g, "Bridge Troll");
	v = v.replace(/\bChristie\b/g, "Bridge Troll");
	
    // Lindsey Graham
	v = v.replace(/\bLindsey Graham\b/g, "Probably Gay");
	v = v.replace(/\bLindseyGraham\b/g, "ProbablyGay");
	v = v.replace(/\bLindsey-Graham\b/g, "Probably-Gay");
	v = v.replace(/\bLindsey_Graham\b/g, "Probably_Gay");
	v = v.replace(/\blindsey graham\b/g, "probably gay");
	v = v.replace(/\blindseygraham\b/g, "probablygay");
	v = v.replace(/\blindsey-graham\b/g, "probably-gay");
	v = v.replace(/\blindsey_graham\b/g, "probably_gay");
	v = v.replace(/\bLindseyGrahamSC\b/g, "ProbablyGaySC");
	v = v.replace(/\bLindsey Olin Graham\b/g, "Probably Gay");
	v = v.replace(/\bGraham\b/g, "Probably Gay");
	
    // George Pataki
	v = v.replace(/\bGeorge Pataki\b/g, "That Other Guy");
	v = v.replace(/\bGeorge Pataki\b/g, "ThatOtherGuy");
	v = v.replace(/\bGeorge-Pataki\b/g, "That-Other-Guy");
	v = v.replace(/\bGeorge_Pataki\b/g, "That_Other_Guy");
	v = v.replace(/\bgeorge pataki\b/g, "that other guy");
	v = v.replace(/\bgeorgepataki\b/g, "thatotherguy");
	v = v.replace(/\bgeorge-pataki\b/g, "that-other-guy");
	v = v.replace(/\bgeorge_pataki\b/g, "that_other_guy");
	v = v.replace(/\bgovernorpataki\b/g, "thatotherguy");
	v = v.replace(/\bGovernor Pataki\b/g, "thatotherguy");
	v = v.replace(/\bGeorge E. Pataki\b/g, "thatotherguy");
	v = v.replace(/\bgpataki\b/g, "thatotherguy");
	v = v.replace(/\bGeorge Elmer Pataki\b/g, "That Other Guy");
	v = v.replace(/\bPataki\b/g, "That Other Guy");
	
    // Lincoln Chafee
	v = v.replace(/\bLincoln Chafee\b/g, "Not That Lincoln");
	v = v.replace(/\bLincolnChafee\b/g, "NotThatLincoln");
	v = v.replace(/\bLincoln-Chafee\b/g, "Not-That-Lincoln");
	v = v.replace(/\bLincoln_Chafee\b/g, "Not_That_Lincoln");
	v = v.replace(/\blincoln chafee\b/g, "not that lincoln");
	v = v.replace(/\blincolnchafee\b/g, "notthatlincoln");
	v = v.replace(/\blincoln-chafee\b/g, "not-that-lincoln");
	v = v.replace(/\blincoln_chafee\b/g, "not_that_lincoln");
	v = v.replace(/\bchafee2016\b/g, "notthatlincoln2016");
	v = v.replace(/\bLincoln Davenport Chafee\b/g, "Not That Lincoln");
	v = v.replace(/\bChafee\b/g, "Not That Lincoln");
	
    // John Kasich
	v = v.replace(/\bJohn Kasich\b/g, "Lehman Bro");
	v = v.replace(/\bJohnKasich\b/g, "LehmanBro");
	v = v.replace(/\bJohn R. Kasich\b/g, "Lehman Bro");
	v = v.replace(/\bJohn-Kasich\b/g, "Lehman-Bro");
	v = v.replace(/\bJohn_Kasich\b/g, "Lehman_Bro");
	v = v.replace(/\bjohn kasich\b/g, "lehman bro");
	v = v.replace(/\bjohnkasich\b/g, "lehmanbro");
	v = v.replace(/\bjohn-kasich\b/g, "lehman-bro");
	v = v.replace(/\bjohn_kasich\b/g, "lehman_bro");
	v = v.replace(/\bJohn Richard Kasich\b/g, "Lehman Bro");
	v = v.replace(/\bKasich\b/g, "Lehman Bro");
	
    // John Boehner
	v = v.replace(/\bJohn Boehner\b/g, "John Boner");
	v = v.replace(/\bJohnBoehner\b/g, "JohnBoner");
	v = v.replace(/\bJohn-Boehner\b/g, "John-Boner");
	v = v.replace(/\bJohn_Boehner\b/g, "John_Boner");
	v = v.replace(/\bjohn boehner\b/g, "john boner");
	v = v.replace(/\bSpeaker John Boehner\b/g, "Speaker John Boner");
	v = v.replace(/\bspeakerboehner\b/g, "speakerboner");
	v = v.replace(/\bjohnboehner\b/g, "johnboner");
	v = v.replace(/\bjohn-boehner\b/g, "john-boner");
	v = v.replace(/\bjohn_boehner\b/g, "john_boner");
	v = v.replace(/\bJohn Andrew Boehner\b/g, "John Boner");
	v = v.replace(/\bBoehner\b/g, "Boner");
	
    // Mitch McConnell
	v = v.replace(/\bMitch McConnell\b/g, "The Human Turtle");
	v = v.replace(/\bMitchMcConnell\b/g, "TheHumanTurtle");
	v = v.replace(/\bMcConnellPress\b/g, "TheHumanTurtle");
	v = v.replace(/\bMitch-McConnell\b/g, "The-Human-Turtle");
	v = v.replace(/\bMitch_McConnell\b/g, "The_Human_Turtle");
	v = v.replace(/\bmitch mcconnell\b/g, "the human turtle");
	v = v.replace(/\bmitchmcconnell\b/g, "thehumanturtle");
	v = v.replace(/\bmitch-mcconnell\b/g, "the-human-turtle");
	v = v.replace(/\bmitch_mcconnell\b/g, "the_human_turtle");	
	v = v.replace(/\bAddison Mitchell "Mitch" McConnell\b/g, "The Human Turtle");
	v = v.replace(/\bMcConnell\b/g, "Human Turtle");
	
    // Martin O'Malley
	v = v.replace(/\bMartin O'Malley\b/g, "What's His Name");
	v = v.replace(/\bMartinO'Malley\b/g, "What'sHisName");
	v = v.replace(/\bMartin_O_Malley\b/g, "Whats_His_Name");
	v = v.replace(/\bMartin-O-Malley\b/g, "Whats-His-Name");
	v = v.replace(/\bmartin-o-malley\b/g, "whats-his-name");
	v = v.replace(/\bmartin o'malley\b/g, "whats his name");
	v = v.replace(/\bmartin_o_malley\b/g, "whats_his_name");
	v = v.replace(/\bmartinomalley\b/g, "whatshisname");
	v = v.replace(/\bGovernorOMalley\b/g, "WhatsHisName");
	v = v.replace(/\bhovernoromalley\b/g, "whatshisname");
	v = v.replace(/\bMartinOMalley\b/g, "WhatsHisName");
	v = v.replace(/\bMartin Joseph O'Malley\b/g, "What's His Name");
	v = v.replace(/\bO'Malley\b/g, "What's His Name");
			
    // Jim Webb
	v = v.replace(/\bJim Webb\b/g, "Military Guy");
	v = v.replace(/\bJimWebb\b/g, "MilitaryGuy");
	v = v.replace(/\bJim-Webb\b/g, "Military-Guy");
	v = v.replace(/\bJim_Webb\b/g, "Military_Guy");
	v = v.replace(/\bjim webb\b/g, "military guy");
	v = v.replace(/\bjim-webb\b/g, "military-guy");
	v = v.replace(/\bjim_webb\b/g, "military_guy");
	v = v.replace(/\bjimwebb\b/g, "militaryguy");
	v = v.replace(/\bjameswebb\b/g, "militaryguy");
	v = v.replace(/\bwebb2016\b/g, "militaryguy2016");
	v = v.replace(/\bJames Henry "Jim" Webb\b/g, "Military Guy");
	v = v.replace(/\bWebb\b/g, "Military Guy");
	
	// Donald Trump
	v = v.replace(/\bDonald Trump\b/g, "Fuckface von Clownstick");
	v = v.replace(/\bDonald John Trump\b/g, "Fuckface von Clownstick");
	v = v.replace(/\bDonald J. Trump\b/g, "Fuckface von Clownstick");
	v = v.replace(/\bDonald J Trump\b/g, "Fuckface von Clownstick");
	v = v.replace(/\brealDonaldTrump\b/g, "FuckfaceVonClownstick");
	v = v.replace(/\brealdonaldtrump\b/g, "FuckfaceVonClownstick");
	v = v.replace(/\bdonald trump\b/g, "fuckface von clownstick");
	v = v.replace(/\bdonaldtrump\b/g, "FuckfaceVonClownstick");
	v = v.replace(/\bTrump\b/g, "Clownstick");
	v = v.replace(/\brealdonaldtrump\b/g, "FuckfaceVonClownstick");
	
	//This is where I ran out of ideas.

	textNode.nodeValue = v;
}