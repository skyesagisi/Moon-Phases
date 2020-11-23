(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Moon Phases_atlas_", frames: [[0,0,1662,1686]]},
		{name:"Moon Phases_atlas_2", frames: [[0,0,1337,1445]]},
		{name:"Moon Phases_atlas_3", frames: [[0,0,1304,1437]]},
		{name:"Moon Phases_atlas_4", frames: [[0,0,974,1425],[976,0,958,1441]]},
		{name:"Moon Phases_atlas_5", frames: [[876,0,799,1412],[0,0,874,1424]]}
];


// symbols:



(lib.BackgroundImage = function() {
	this.initialize(img.BackgroundImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8000,4500);


(lib.FirstQuarterText = function() {
	this.initialize(img.FirstQuarterText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2829,962);


(lib.FirstQuarter = function() {
	this.initialize(ss["Moon Phases_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FullMoonText = function() {
	this.initialize(img.FullMoonText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2566,866);


(lib.FullMoon = function() {
	this.initialize(ss["Moon Phases_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.LastQuarterText = function() {
	this.initialize(img.LastQuarterText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2828,957);


(lib.LastQuarter = function() {
	this.initialize(ss["Moon Phases_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Text = function() {
	this.initialize(img.Text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5104,783);


(lib.WaningCresentText = function() {
	this.initialize(img.WaningCresentText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3637,933);


(lib.WaningCresent = function() {
	this.initialize(ss["Moon Phases_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WaningGibbousText = function() {
	this.initialize(img.WaningGibbousText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3595,937);


(lib.WaningGibbous = function() {
	this.initialize(ss["Moon Phases_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WaxingCresentText = function() {
	this.initialize(img.WaxingCresentText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3650,932);


(lib.WaxingCresent = function() {
	this.initialize(ss["Moon Phases_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.WaxingGibbousText = function() {
	this.initialize(img.WaxingGibbousText);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3608,937);


(lib.WaxingGibbous = function() {
	this.initialize(ss["Moon Phases_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.WaxingGibbousSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WaxingGibbous();
	this.instance.setTransform(0,0,0.2505,0.2505);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,326.7,360);


(lib.WaxingCresentSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WaxingCresent();
	this.instance.setTransform(0,0,0.2407,0.2407);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210.4,342.8);


(lib.WaningGibbousSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WaningGibbous();
	this.instance.setTransform(0,0,0.2432,0.2432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.2,351.5);


(lib.WaningCresentSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WaningCresent();
	this.instance.setTransform(0,0,0.2442,0.2442);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.2,344.9);


(lib.TextSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Text();
	this.instance.setTransform(0,0,0.2337,0.2337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1193,183);


(lib.LastQuarterSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.LastQuarter();
	this.instance.setTransform(0,0,0.241,0.241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,230.9,347.3);


(lib.FullMoonSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FullMoon();
	this.instance.setTransform(0,0,0.2454,0.2454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,407.8,413.7);


(lib.FirstQuarterSymbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FirstQuarter();
	this.instance.setTransform(0,0,0.251,0.251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.5,357.6);


(lib.WaxingGibbous_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.WaxingGibbous();
	this.instance.setTransform(0,0,0.2505,0.2505);

	this.instance_1 = new lib.WaxingGibbousSymbol();
	this.instance_1.setTransform(163.3,180,1,1,0,0,0,163.3,180);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.WaxingGibbousText();
	this.instance_2.setTransform(-154,-134,0.1673,0.1804);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154,-134,603.7,581);


(lib.WaxingCresent_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.WaxingCresent();
	this.instance.setTransform(0,0,0.2407,0.2407);

	this.instance_1 = new lib.WaxingCresentSymbol();
	this.instance_1.setTransform(105.2,171.3,1,1,0,0,0,105.2,171.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.WaxingCresentText();
	this.instance_2.setTransform(0,-138,0.1293,0.1293);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-138,555.9,568);


(lib.WaningGibbous_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.WaningGibbous();
	this.instance.setTransform(0,0,0.2432,0.2432);

	this.instance_1 = new lib.WaningGibbousSymbol();
	this.instance_1.setTransform(162.6,175.7,1,1,0,0,0,162.6,175.7);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.WaningGibbousText();
	this.instance_2.setTransform(-129,-148,0.1764,0.1764);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129,-148,634,587);


(lib.WaningCresent_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.WaningCresent();
	this.instance.setTransform(0,0,0.2442,0.2442);

	this.instance_1 = new lib.WaningCresentSymbol();
	this.instance_1.setTransform(97.5,172.5,1,1,0,0,0,97.5,172.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.WaningCresentText();
	this.instance_2.setTransform(-293,-140,0.1343,0.1343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-140,576,572);


(lib.Text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.Text();
	this.instance.setTransform(0,0,0.2337,0.2337);

	this.instance_1 = new lib.TextSymbol();
	this.instance_1.setTransform(596.5,91.5,1,1,0,0,0,596.5,91.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-84,1365,355);


(lib.LastQuarter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.LastQuarter();
	this.instance.setTransform(0,0,0.241,0.241);

	this.instance_1 = new lib.LastQuarterSymbol();
	this.instance_1.setTransform(115.4,173.6,1,1,0,0,0,115.4,173.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.LastQuarterText();
	this.instance_2.setTransform(-44,-140,0.1571,0.1571);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-140,484.3,575);


(lib.FullMoon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.FullMoon();
	this.instance.setTransform(0,0,0.2454,0.2454);

	this.instance_1 = new lib.FullMoonSymbol();
	this.instance_1.setTransform(203.9,206.8,1,1,0,0,0,203.9,206.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.FullMoonText();
	this.instance_2.setTransform(-16,-125,0.1843,0.1843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-125,579,626);


(lib.FirstQuarter_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("FoleyLighterFlicking06wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.FirstQuarter();
	this.instance.setTransform(0,0,0.251,0.251);

	this.instance_1 = new lib.FirstQuarterSymbol();
	this.instance_1.setTransform(122.2,178.8,1,1,0,0,0,122.2,178.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,80);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.FirstQuarterText();
	this.instance_2.setTransform(-148,-134,0.1692,0.1692);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148,-134,480,579);


// stage content:
(lib.MoonPhases = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.Text.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://solarsystem.nasa.gov/moons/earths-moon/lunar-phases-and-eclipses/", "_blank");
		}
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Waxing_Cresent
	this.WaxingCresent = new lib.WaxingCresent_1();
	this.WaxingCresent.name = "WaxingCresent";
	this.WaxingCresent.setTransform(102.25,589.15,1,1,0,0,0,85,147.3);
	this.WaxingCresent.alpha = 0;
	new cjs.ButtonHelper(this.WaxingCresent, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WaxingCresent).to({alpha:1},59).wait(1));

	// Waning_Cresent
	this.WaningCresent = new lib.WaningCresent_1();
	this.WaningCresent.name = "WaningCresent";
	this.WaningCresent.setTransform(1777.3,590.85,1,1,0,0,0,74.3,149);
	this.WaningCresent.alpha = 0;
	new cjs.ButtonHelper(this.WaningCresent, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WaningCresent).to({alpha:1},59).wait(1));

	// Waxing_Gibbous
	this.WaxingGibbous = new lib.WaxingGibbous_1();
	this.WaxingGibbous.name = "WaxingGibbous";
	this.WaxingGibbous.setTransform(442.3,356.55);
	this.WaxingGibbous.alpha = 0;
	new cjs.ButtonHelper(this.WaxingGibbous, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WaxingGibbous).wait(3).to({alpha:0.0508},0).wait(3).to({alpha:0.1016},0).wait(3).to({alpha:0.1484},0).wait(3).to({alpha:0.1992},0).wait(3).to({alpha:0.25},0).wait(3).to({alpha:0.3008},0).wait(3).to({alpha:0.3594},0).wait(3).to({alpha:0.4102},0).wait(3).to({alpha:0.4609},0).wait(3).to({alpha:0.5117},0).wait(3).to({alpha:0.5586},0).wait(3).to({alpha:0.6094},0).wait(3).to({alpha:0.6602},0).wait(3).to({alpha:0.7109},0).wait(3).to({alpha:0.7617},0).wait(3).to({alpha:0.8086},0).wait(3).to({alpha:0.8594},0).wait(3).to({alpha:0.9102},0).wait(3).to({alpha:0.9609},0).wait(2).to({alpha:1},0).wait(1));

	// Waning_Gibbous
	this.WaningGibbous = new lib.WaningGibbous_1();
	this.WaningGibbous.name = "WaningGibbous";
	this.WaningGibbous.setTransform(1190.7,365.05);
	this.WaningGibbous.alpha = 0;
	new cjs.ButtonHelper(this.WaningGibbous, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.WaningGibbous).wait(3).to({alpha:0.0508},0).wait(3).to({alpha:0.1016},0).wait(3).to({alpha:0.1484},0).wait(3).to({alpha:0.1992},0).wait(3).to({alpha:0.25},0).wait(3).to({alpha:0.3008},0).wait(3).to({alpha:0.3594},0).wait(3).to({alpha:0.4102},0).wait(3).to({alpha:0.4609},0).wait(3).to({alpha:0.5117},0).wait(3).to({alpha:0.5586},0).wait(3).to({alpha:0.6094},0).wait(3).to({alpha:0.6602},0).wait(3).to({alpha:0.7109},0).wait(3).to({alpha:0.7617},0).wait(3).to({alpha:0.8086},0).wait(3).to({alpha:0.8594},0).wait(3).to({alpha:0.9102},0).wait(3).to({alpha:0.9609},0).wait(2).to({alpha:1},0).wait(1));

	// First_Quarter
	this.FirstQuarter = new lib.FirstQuarter_1();
	this.FirstQuarter.name = "FirstQuarter";
	this.FirstQuarter.setTransform(311.55,537,1,1,0,0,0,96.1,152.6);
	this.FirstQuarter.alpha = 0;
	new cjs.ButtonHelper(this.FirstQuarter, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.FirstQuarter).wait(2).to({alpha:0.0391},0).wait(2).to({alpha:0.0703},0).wait(2).to({alpha:0.1016},0).wait(2).to({alpha:0.1406},0).wait(2).to({alpha:0.1719},0).wait(2).to({alpha:0.1992},0).wait(2).to({alpha:0.2383},0).wait(2).to({alpha:0.2695},0).wait(2).to({alpha:0.3008},0).wait(2).to({alpha:0.3398},0).wait(2).to({alpha:0.3711},0).wait(2).to({alpha:0.4102},0).wait(2).to({alpha:0.4414},0).wait(2).to({alpha:0.4688},0).wait(2).to({alpha:0.5117},0).wait(2).to({alpha:0.5391},0).wait(2).to({alpha:0.5781},0).wait(2).to({alpha:0.6094},0).wait(2).to({alpha:0.6406},0).wait(2).to({alpha:0.6797},0).wait(2).to({alpha:0.7109},0).wait(2).to({alpha:0.75},0).wait(2).to({alpha:0.7813},0).wait(2).to({alpha:0.8086},0).wait(2).to({alpha:0.8516},0).wait(2).to({alpha:0.8789},0).wait(2).to({alpha:0.9102},0).wait(2).to({alpha:0.9492},0).wait(2).to({alpha:0.9805},0).wait(1).to({alpha:1},0).wait(1));

	// Last_Quarter
	this.LastQuarter = new lib.LastQuarter_1();
	this.LastQuarter.name = "LastQuarter";
	this.LastQuarter.setTransform(1493.3,405.15);
	this.LastQuarter.alpha = 0;
	new cjs.ButtonHelper(this.LastQuarter, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.LastQuarter).wait(2).to({alpha:0.0391},0).wait(2).to({alpha:0.0703},0).wait(2).to({alpha:0.1016},0).wait(2).to({alpha:0.1406},0).wait(2).to({alpha:0.1719},0).wait(2).to({alpha:0.1992},0).wait(2).to({alpha:0.2383},0).wait(2).to({alpha:0.2695},0).wait(2).to({alpha:0.3008},0).wait(2).to({alpha:0.3398},0).wait(2).to({alpha:0.3711},0).wait(2).to({alpha:0.4102},0).wait(2).to({alpha:0.4414},0).wait(2).to({alpha:0.4688},0).wait(2).to({alpha:0.5117},0).wait(2).to({alpha:0.5391},0).wait(2).to({alpha:0.5781},0).wait(2).to({alpha:0.6094},0).wait(2).to({alpha:0.6406},0).wait(2).to({alpha:0.6797},0).wait(2).to({alpha:0.7109},0).wait(2).to({alpha:0.75},0).wait(2).to({alpha:0.7813},0).wait(2).to({alpha:0.8086},0).wait(2).to({alpha:0.8516},0).wait(2).to({alpha:0.8789},0).wait(2).to({alpha:0.9102},0).wait(2).to({alpha:0.9492},0).wait(2).to({alpha:0.9805},0).wait(1).to({alpha:1},0).wait(1));

	// Full_Moon
	this.FullMoon = new lib.FullMoon_1();
	this.FullMoon.name = "FullMoon";
	this.FullMoon.setTransform(980.9,514.8,1,1,0,0,0,203.9,206.8);
	this.FullMoon.alpha = 0;
	new cjs.ButtonHelper(this.FullMoon, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.FullMoon).wait(4).to({alpha:0.0703},0).wait(4).to({alpha:0.1406},0).wait(4).to({alpha:0.1992},0).wait(4).to({alpha:0.2695},0).wait(4).to({alpha:0.3398},0).wait(4).to({alpha:0.4102},0).wait(4).to({alpha:0.4688},0).wait(4).to({alpha:0.5391},0).wait(4).to({alpha:0.6094},0).wait(4).to({alpha:0.6797},0).wait(4).to({alpha:0.75},0).wait(4).to({alpha:0.8086},0).wait(4).to({alpha:0.8789},0).wait(4).to({alpha:0.9492},0).wait(3).to({alpha:1},0).wait(1));

	// Text
	this.Text = new lib.Text_1();
	this.Text.name = "Text";
	this.Text.setTransform(967.5,843.5,1,1,0,0,0,596.5,91.5);
	this.Text.alpha = 0;
	new cjs.ButtonHelper(this.Text, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.Text).to({alpha:1},59).wait(1));

	// Background
	this.instance = new lib.BackgroundImage();
	this.instance.setTransform(-2,-7,0.2407,0.2427);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958,533,965.9000000000001,552.3);
// library properties:
lib.properties = {
	id: 'CC516E5055CC384BA57E564411CAE93A',
	width: 1920,
	height: 1080,
	fps: 45,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BackgroundImage.png", id:"BackgroundImage"},
		{src:"images/FirstQuarterText.png", id:"FirstQuarterText"},
		{src:"images/FullMoonText.png", id:"FullMoonText"},
		{src:"images/LastQuarterText.png", id:"LastQuarterText"},
		{src:"images/Text.png", id:"Text"},
		{src:"images/WaningCresentText.png", id:"WaningCresentText"},
		{src:"images/WaningGibbousText.png", id:"WaningGibbousText"},
		{src:"images/WaxingCresentText.png", id:"WaxingCresentText"},
		{src:"images/WaxingGibbousText.png", id:"WaxingGibbousText"},
		{src:"images/Moon Phases_atlas_.png", id:"Moon Phases_atlas_"},
		{src:"images/Moon Phases_atlas_2.png", id:"Moon Phases_atlas_2"},
		{src:"images/Moon Phases_atlas_3.png", id:"Moon Phases_atlas_3"},
		{src:"images/Moon Phases_atlas_4.png", id:"Moon Phases_atlas_4"},
		{src:"images/Moon Phases_atlas_5.png", id:"Moon Phases_atlas_5"},
		{src:"sounds/FoleyLighterFlicking06wav.mp3", id:"FoleyLighterFlicking06wav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CC516E5055CC384BA57E564411CAE93A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;