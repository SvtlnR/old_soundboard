$(document).ready(function(){
	$(".hdr").show("slow");
	$(".btn").click(btnPlay);
	$('html').keydown(function(e){
  	if (e.keyCode == 81) { 
  			var idbtn="#g1";
  		}
  	if (e.keyCode == 87) { 
  			var idbtn="#g2";
  		}
  	if (e.keyCode == 69) { 
  			var idbtn="#g3";
  		}
  	if (e.keyCode == 65) { 
  			var idbtn="#p1";
  		}
  	if (e.keyCode == 83) { 
  			var idbtn="#p2";
  		}
  	if (e.keyCode == 68) { 
  			var idbtn="#p3";
  		}
  	if (e.keyCode == 70) { 
  			var idbtn="#p4";
  		}
  	if (e.keyCode == 90) { 
  			var idbtn="#d1";
  		}
  	if (e.keyCode == 88) { 
  			var idbtn="#d2";
  		}
  	if (e.keyCode == 67) { 
  			var idbtn="#d3";
  		}
  	if (e.keyCode == 86) { 
  			var idbtn="#d4";
  		}
  	if (e.keyCode == 73) { 
  			var idbtn="#br1";
  		}
  	if (e.keyCode == 79) { 
  			var idbtn="#br2";
  		}
  	if (e.keyCode == 80) { 
  			var idbtn="#br3";
  		}
  	if (e.keyCode == 74) { 
  			var idbtn="#b1";
  		}
  	if (e.keyCode == 75) { 
  			var idbtn="#b2";
  		}
  	if (e.keyCode == 76) { 
  			var idbtn="#b3";
  		}
  		btnIdPlay(idbtn);

  	});
  	function btnPlay(){
		var audio=$(this).find("audio");
		audio.trigger('play');
	}
	function btnIdPlay(idbtn){
		var audio=$(idbtn).find("audio");
		audio.trigger('play');	
	}
});