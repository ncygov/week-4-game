//set up variables	

	var yourWins= 0;
 	var yourLosses= 0;
 	var addition=0;
 	var total= Math.floor((Math.random() * 100) + 19);
 	
 //set up for random number	
 	var diamond = Math.floor((Math.random() * 12) + 1);
 	var emerald = Math.floor((Math.random() * 12) + 1);
 	var ruby = Math.floor((Math.random() * 12) + 1);
 	var purple = Math.floor((Math.random() * 12) + 1);


// update total...addition...wins...losses
 	var updateAdditions = function () {
 		$('.total').empty();
 		$('.total').text("Number To Reach: ");
 		$('.total').append(total);
 		

 		$('.addition').empty();
 		$('.addition').text("Your Total: ");
 		$('.addition').append(addition);

 		$('.yourWins').empty();
 		$('.yourWins').text("Wins: ");
 		$('.yourWins').append(yourWins);

 		$('.yourLosses').empty();
 		$('.yourLosses').text("Losses: ");
 		$('.yourLosses').append(yourLosses);
 	}

 // reset game variables
 		var reset = function (){
 			addition = 0;
 			total= Math.floor((Math.random() * 100) + 19);
 			
 			$('.total').empty();
 			$('.total').append(total);


			diamond = Math.floor((Math.random() * 12) + 1);
 			emerald = Math.floor((Math.random() * 12) + 1);
 			ruby = Math.floor((Math.random() * 12) + 1);
 			purple = Math.floor((Math.random() * 12) + 1);

 			updateAdditions();
 		}	


//game functions if you get the number and if you dont or go over

var game = function (){
 		if (addition == total) {
 			yourWins = yourWins + 1;
 			alert("You win!");
 			reset();
 		} else if (addition > total) {
 			yourLosses = yourLosses + 1;
 			alert("You lost");
 			reset();
 		  } else {
 			updateAdditions();
 			}
 		// console.log(total);
 		// console.log(addition);

 	}

//set up function for when image is clicked to follow game function
$(document).ready(function() {
 		$('#diamond').click(function(){
 			addition = addition + diamond;
 			game();
 		})

 		$('#emerald').click(function(){
 			addition = addition + emerald;
 			game();
 		})

 		$('#ruby').click(function(){
 			addition = addition + ruby;
 			game();
 		})

 		$('#purple').click(function(){
 			addition = addition + purple;
 			game();

 		});
 	});

	// console.log(total);
 // 	console.log(addition);
 // 	console.log(diamond);
 // 	console.log(emerald);
 // 	console.log(ruby);
 // 	console.log(purple);

 	
