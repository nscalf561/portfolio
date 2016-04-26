window.onload = function() {
	addOnClicks();
};

function addOnClicks() {
  //this adds an onclick to "Drunken Grasshopper" to occupy the page
  $('#drunkenGrasshopperButton').on('click', function() {
  	buttonClicked = "drunkenGrasshopper";
  	clearContent();
  	showDrunkenGrasshopper();
  });

  //this adds an onclick to "Living Quarters" to occupy the page
  $('#livingQuartersButton').on('click', function() {
  	buttonClicked = "livingQuarters";
  	clearContent();
  	showLivingQuarters();
  });

  $('#aboutMe').on('click', function() {
  	clearHome();
  	showAboutMe();
  });

  $('#projects').on('click', function() {
  	clearHome();
  	showProjects();
  });

  $('#contact').on('click', function() {
  	clearHome();
  	showContact();
  });
}

function clearContent(){
	$("#holdsBarGraph").html("");
	$("#holdsProjectImage").html("");
	$("#holdsText").html("");
}


function showAboutMe() {
	$('#homeContainer').html("<div id='descriptionText'>This is the about me page</div>");
}


function showProjects() {
$('#homeContainer').html(
	'<div id="holdsProjectClickables">' +
		'<nav id="projectBar">'+
			'<ul>' +
				'<li>' +
					'<a id="drunkenGrasshopper" class="projectTitles">Drunken Grasshopper</a>' +
				'</li>' +
				'<li>' +
					'<a id="livingQuarters" class="projectTitles">Living Quarters</a>' +
				'</li>' +
			'</ul>' +
			'<ul class="buttons">' +
				'<li>' +
					'<a id="drunkenGrasshopperButton"></a>' +
				'</li>' +
				'<li>' +
					'<a id="livingQuartersButton"></a>' +
				'</li>' +
			'</ul>' +
		'</nav>' +
	'</div>' 
	);
}


function showContact() {
	$('#homeContainer').html(
		'<div id="contactIconList">' +
			'<a href="http://www.github.com/nscalf561" id="githubIcon" target="_blank"><img class="invert" src="Github-Mark-32px.png"></a>' +
			'<a href="http://www.linkedin.com/in/nicholasscalf" target="_blank"><img src="In-Black-28px-R.png"</a>' +
			'<a href="https://profiles.generalassemb.ly/profiles/nicholas-scalf" target="_blank"><img id="gaLogo" src="GA-logo.png"></a>' + 
		'</div>'
		);
}


function clearHome() {
	$('#homeContainer').html("");
}


function showDrunkenGrasshopper () {

}


function showLivingQuarters() {
	livingQuartersBarGraph();
	$("#holdsProjectImage").html("<a id='livingQuartersLink' href='http://thelivingquarters.herokuapp.com'><img src='iphone6-living-quarters.jpg'></a>");
	$("#holdsText").html(
		"<br><p>Living Quarters was a group project that two classmates and myself built to be our capstone project at General Assembly.  " + 
		"<br><br><b>THE PROBLEM:</b><br><br>All three of us had noticed a pain point when it came to organizing our home lives with our roommates: " + 
		"we had a wide variety of apps to deal with common interactions, but there were so many that it became inefficient to use them.  " + 
		"We wanted one place to deal with all of the things roommates would have to handle." + 
		"<br><br><b>THE SOLUTION:</b><br><br>Living Quarters is a mobile first app that will have a new user signup/login, then join/make a household which will " +
		"host all of the roommates in a home.  When a user is in a house, the user can make chores that need to be done, toggle them as completed or upvote the " +
		"ones that need to be a higher priority.  A user can post supplies that are running low in the house, make announcements for the house to see, " +
		"and comment on posted things in the house.  In future updates there will be bill pay integration. <br><br><b>TECHNOLOGIES:</b><br><br>" + 
		" </p>"
		);
}

function livingQuartersBarGraph() {
	var d3 = Plotly.d3;
	var WIDTH_IN_PERCENT_OF_PARENT = 100;

	var gd3 = d3.select('#holdsBarGraph')
							.append('div')
							.style({
		            width: WIDTH_IN_PERCENT_OF_PARENT + '%',
		            'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
							});

	var gd = gd3.node();

	//makes the graph with these specifications at 'gd'
	Plotly.plot(gd, [{
		type: 'bar',
		x: ['Estimated Man-Hours', 'Oz Coffee Consumed', 'Technologies Used',
				'Times Sanity Checked', 'Names Turned Down'],
		y: [200, 163, 15, 30, 25],
		marker:{
			color: ['rgba(39, 174, 96,1.0)', 'rgba(52, 152, 219,1.0)', 'rgba(22, 160, 133,1.0)',
					 	 'rgba(231, 76, 60,1.0)', 'rgba(142, 68, 173,1.0)']
						},
		title: 'Living Quarters Stats',
		font: {
			size: 16
		}
	}]);

	//since Plotly does not support responsive graphs, this makes it resize when the 
	//window resizes	
  window.onresize = function() {
    Plotly.Plots.resize(gd);
  };
}





















