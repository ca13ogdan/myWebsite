$('.gallery_img').click(function(e){
	//Get Image src And Img alt
	var getImg = $(this).attr('src');
	var imgNumber = $(this).attr('alt');

	//Set Image src, alt and Number of Image
	$('.viewerImage').attr('src',getImg);
	$('.viewerImage').attr('alt',imgNumber);
	$('#imageNumber').text('Image ' + imgNumber + ' of 10');
	
	//Display Image FullScreen
	$('#viewer').fadeIn('slow').css('display','flex');

	//SET BACKGROUND FROM FIRST CLICKED DOT
	var getImgAlt = $(this).attr('alt');
	$('.dot').css('background','#867E7E');
	$('.dot[alt="'+getImgAlt+'"]').css('background','#333');
	
});

//DOTS CLICK
	$('.dot').click(function(e){				
		//Get alt from dot and select image with the same alt
		let dot = $(this).attr('alt');
		let img = $('.gallery_img[alt="'+dot+'"]').attr('src');

		//Get number of selected dot and add to Image number
		let number = $('.gallery_img[alt="'+dot+'"]').attr('alt');
		$('#imageNumber').text('Image ' + number + ' of 10');
		
		//Set Displayer Image Attribute src and alt
		$('.viewerImage').attr('src',img);
		$('.viewerImage').attr('alt',number);

		//Display Image
		$('#viewer').css('display','none');
		$('#viewer').css('display','flex');

		//Set Active Dot Background
		$('.dot').css('background','#867E7E');
		$(this).css('background','#333');
	});

//REMOVE IMAGE VIEWER BY PRESING ESC KEY
	$(document).keyup(function(e){
		if(e.which==27){ //27 = ESC Key
			$('#viewer').css('display','none');
		}
	});

//CLOSSING IMAGE VIEWER BY PRESSING X BUTTON
	$('#closeViewer').click(function(){
		$('#viewer').css('display','none');
	});

//RIGHT ARROW CLICK 
	$('#rightArrow').click(function(){ 
		//Get Next Image Data
		let getImg = $('.viewerImage').attr('alt');
		let getNextImg = $('.gallery_img[alt="'+getImg+'"]').next();
		
		//Select Active Dot
		let dot = $('.dot[alt="'+getNextImg.attr('alt') +'"');

		$('.dot').css('background','#867E7E');
		$(dot).css('background','#333');
		
		//Pressing Next Button on the Last Image, Get the First Image
		if(!getNextImg.attr('alt')){

			let firstImage = $('.gallery_img').first();

			$('.viewerImage').attr('src',firstImage.attr('src'));
			$('.viewerImage').attr('alt',firstImage.attr('alt'));
			$('#imageNumber').text('Image ' + firstImage.attr('alt') + ' of 10');

			let dot = $('.dot[alt="'+firstImage.attr('alt') +'"');
			$('.dot').css('background','#867E7E');
			$(dot).css('background','#333');

		}else{
			//View Photo by Pressing Next Button(right arrow)
			$('.viewerImage').attr('src',getNextImg.attr('src'));
			$('.viewerImage').attr('alt',getNextImg.attr('alt'));
			$('#imageNumber').text('Image ' + getNextImg.attr('alt') + ' of 10');
			//Display Next Image
			$('#viewer').css('display','none');
			$('#viewer').css('display','flex');
		}	
	});	

//LEFT ARROW CLICK
	$('#leftArrow').click(function(){ 		
		//Get Next Image Data
		let getImg = $('.viewerImage').attr('alt');
		let getPrevImg = $('.gallery_img[alt="'+getImg+'"]').prev();
		
		//Select Active Dot
		let dot = $('.dot[alt="'+getPrevImg.attr('alt') +'"');

		$('.dot').css('background','#867E7E');
		$(dot).css('background','#333');

		//Pressing Previous Button on the First Image, Get the Last Image
		if(!getPrevImg.attr('alt')){
			let lastImage = $('.gallery_img').last();

			$('.viewerImage').attr('src',lastImage.attr('src'));
			$('.viewerImage').attr('alt',lastImage.attr('alt'));
			$('#imageNumber').text('Image ' + lastImage.attr('alt') + ' of 10');

			//Select Active Dot
			let dot = $('.dot[alt="'+lastImage.attr('alt') +'"');

			$('.dot').css('background','#867E7E');
			$(dot).css('background','#333');

		}else{
			//View Photo by Pressing Previous Button(left arrow)
			$('.viewerImage').attr('src',getPrevImg.attr('src'));
			$('.viewerImage').attr('alt',getPrevImg.attr('alt'));
			$('#imageNumber').text('Image ' + getPrevImg.attr('alt') + ' of 10');
			//Display Next Image
			$('#viewer').css('display','none');
			$('#viewer').css('display','flex');
		}
	});	

//CHANGE IMAGE VIEWER BY PRESSING LEFT / RIGHT ARROW KEY
	$(document).keyup(function(e){
		if(e.which==39){ // right arrow key
			//Get Next Image Data
			let getImg = $('.viewerImage').attr('alt');
			let getNextImg = $('.gallery_img[alt="'+getImg+'"]').next();
				
			//Select Active Dot
			let dot = $('.dot[alt="'+getNextImg.attr('alt') +'"');

			$('.dot').css('background','#867E7E');
			$(dot).css('background','#333');

			//Pressing Next Button on the Last Image, Get the First Image
			if(!getNextImg.attr('alt')){
				let firstImage = $('.gallery_img').first();

				$('.viewerImage').attr('src',firstImage.attr('src'));
				$('.viewerImage').attr('alt',firstImage.attr('alt'));
				$('#imageNumber').text('Image ' + firstImage.attr('alt') + ' of 10');

				let dot = $('.dot[alt="'+firstImage.attr('alt') +'"');
				$('.dot').css('background','#867E7E');
				$(dot).css('background','#333');

			}else{
				//View Photo by Pressing Next Button(right arrow)
				$('.viewerImage').attr('src',getNextImg.attr('src'));
				$('.viewerImage').attr('alt',getNextImg.attr('alt'));
				$('#imageNumber').text('Image ' + getNextImg.attr('alt') + ' of 10');
				//Display Next Image
				$('#viewer').css('display','none');
				$('#viewer').css('display','flex');
			}
		}else if(e.which==37){ //left arrow key
			//Get Next Image Data
			let getImg = $('.viewerImage').attr('alt');
			let getPrevImg = $('.gallery_img[alt="'+getImg+'"]').prev();
			
			//Select Active Dot
			let dot = $('.dot[alt="'+getPrevImg.attr('alt') +'"');

			$('.dot').css('background','#867E7E');
			$(dot).css('background','#333');

			//Pressing Previous Button on the First Image, Get the Last Image
			if(!getPrevImg.attr('alt')){
				let lastImage = $('.gallery_img').last();

				$('.viewerImage').attr('src',lastImage.attr('src'));
				$('.viewerImage').attr('alt',lastImage.attr('alt'));
				$('#imageNumber').text('Image ' + lastImage.attr('alt') + ' of 10');

				//Select Active Dot
				let dot = $('.dot[alt="'+lastImage.attr('alt') +'"');

				$('.dot').css('background','#867E7E');
				$(dot).css('background','#333');

			}else{
				//View Photo by Pressing Previous Button(left arrow)
				$('.viewerImage').attr('src',getPrevImg.attr('src'));
				$('.viewerImage').attr('alt',getPrevImg.attr('alt'));
				$('#imageNumber').text('Image ' + getPrevImg.attr('alt') + ' of 10');
				//Display Next Image
				$('#viewer').css('display','none');
				$('#viewer').css('display','flex');
			}
		}
	})
