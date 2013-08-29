$(function() {
	
	
	//Store frequently elements in variables
	var p1slider  = $('#p1-slider .v-slider'),
		p1tooltip = $('#p1-slider .v-tooltip');

	//Hide the Tooltip at first
	p1tooltip.hide();

	//Call the Slider
	p1slider.slider({
		//Config
		range: 'min',
		min: 0,
		max: 100,
		value: 80,

		start: function(event,ui) {
			p1tooltip.css('left', ui.value).text(ui.value);
			p1tooltip.fadeIn('fast');
		},

		//Slider Event
		slide: function(event, ui) { //When the slider is sliding

			var value  = ui.value,
				volume = $('#p1-slider .v-r-volume');

			$('#player1').setYTPVolume(value);
			p1tooltip.css('left', value).text(value);  //Adjust the tooltip accordingly

			if(value <= 5) { 
				volume.css('background-position', '0 0');
			} 
			else if (value <= 25) {
				volume.css('background-position', '0 -25px');
			} 
			else if (value <= 75) {
				volume.css('background-position', '0 -50px');
			} 
			else {
				volume.css('background-position', '0 -75px');
			};

		},

		stop: function(event,ui) {
			p1tooltip.fadeOut('fast');
		},
	});
	
	//Store frequently elements in variables
	var p2slider  = $('#p2-slider .v-slider'),
		p2tooltip = $('#p2-slider .v-tooltip');

	//Hide the Tooltip at first
	p2tooltip.hide();

	//Call the Slider
	p2slider.slider({
		//Config
		range: 'min',
		min: 0,
		max: 100,
		value: 20,

		start: function(event,ui) {
			p2tooltip.css('left', ui.value).text(ui.value);
			p2tooltip.fadeIn('fast');
		},

		//Slider Event
		slide: function(event, ui) { //When the slider is sliding

			var value  = ui.value,
				volume = $('#p2-slider .v-r-volume');

			$('#player2').setYTPVolume(value);
			p2tooltip.css('left', value).text(value);  //Adjust the tooltip accordingly

			if(value <= 5) { 
				volume.css('background-position', '0 0');
			} 
			else if (value <= 25) {
				volume.css('background-position', '0 -25px');
			} 
			else if (value <= 75) {
				volume.css('background-position', '0 -50px');
			} 
			else {
				volume.css('background-position', '0 -75px');
			};

		},

		stop: function(event,ui) {
			p2tooltip.fadeOut('fast');
		},
	});
	
	
	//Store frequently elements in variables
	var mixslider  = $('#mix-slider .mix-v-slider'),
		mixtooltip = $('#mix-slider .v-tooltip');

	//Hide the Tooltip at first
	mixtooltip.hide();

	//Call the Slider
	mixslider.slider({
		//Config
		range: false,
		min: 0,
		max: 100,
		value: 20,

		start: function(event,ui) {
			// p1tooltip.fadeIn('fast');
			// p2tooltip.fadeIn('fast');
			
			p1slider.slider({value:100 - ui.value});
			
			p1tooltip.css('left', 100 - ui.value).text(100 - ui.value);
			p2tooltip.css('left', ui.value).text(ui.value);
			mixtooltip.css('left', ui.value*2.5).text(Math.abs(ui.value*2 - 100));
			mixtooltip.fadeIn('fast');
		},

		//Slider Event
		slide: function(event, ui) { //When the slider is sliding

			var value  = ui.value;
			var p1volume = $('#p1-slider .v-r-volume');
			var p2volume = $('#p2-slider .v-r-volume');
			var lvolume = $('#mix-slider .v-l-volume');
			var rvolume = $('#mix-slider .v-r-volume');

			var p1vol = 100 - value;
			var p2vol = value;
			var mixvol = Math.abs(value * 2 - 100);
			
			$('#player1').setYTPVolume(p1vol);
			p1slider.slider({value:p1vol});
			
			$('#player2').setYTPVolume(p2vol);
			p2slider.slider({value:p2vol});
			
			p1tooltip.css('left', p1vol).text(p1vol);  //Adjust the tooltip accordingly
			p2tooltip.css('left', p2vol).text(p2vol);  //Adjust the tooltip accordingly
			mixtooltip.css('left', value*2.5).text(mixvol);  //Adjust the tooltip accordingly

			if(p1vol <= 5) {
				p1volume.css('background-position', '0 0');
				lvolume.css('background-position', '0 0'); 
			} 
			else if (p1vol <= 25) {
				p1volume.css('background-position', '0 -25px');
				lvolume.css('background-position', '0 -25px');
			} 
			else if (p1vol <= 75) {
				p1volume.css('background-position', '0 -50px');
				lvolume.css('background-position', '0 -50px');
			} 
			else {
				p1volume.css('background-position', '0 -75px');
				lvolume.css('background-position', '0 -75px');
			};
			
			if(p2vol <= 5) { 
				p2volume.css('background-position', '0 0');
				rvolume.css('background-position', '0 0');
			} 
			else if (p2vol <= 25) {
				p2volume.css('background-position', '0 -25px');
				rvolume.css('background-position', '0 -25px');
			} 
			else if (p2vol <= 75) {
				p2volume.css('background-position', '0 -50px');
				rvolume.css('background-position', '0 -50px');
			} 
			else {
				p2volume.css('background-position', '0 -75px');
				rvolume.css('background-position', '0 -75px');
			};

		},

		stop: function(event,ui) {
			// p1tooltip.fadeOut('fast');
			// p2tooltip.fadeOut('fast');
			mixtooltip.fadeOut('fast');
		},
	});
			
	// dotdotdot
	$('#p1-title').dotdotdot();
	$('#p2-title').dotdotdot();
	
    // initiallize videos
    var videos = [ 
    		{videoURL:'zSygB1VwZpU', containment:'self', autoPlay:false, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'FOIjvHjK0Rw', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'7_hRGlByHm4', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'iI3qo9NXLI8', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'zNvsIrj0JJA', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'EDir9-UoPjo', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'Rns0_x40EEE', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'u-uf_AEcXEs', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'kkIZHYrL4v4', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
    		{videoURL:'heJBwBUStXU', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
			{videoURL:'3RBb4375FAk', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},	
    		{videoURL:'VIrBecB746c', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true},
            {videoURL:'OBl4pp0Sfko', containment:'self', autoPlay:true, mute:false, startAt:0, opacity:1, showControls:true, addRaster:true}
            
        ];
		
    $('#player1, #player2').tooltipster({
		animation :'fade',
		delay : 50,
		position : 'bottom',
		offsetY : 5,
		theme: '.my-custom-theme'
	});
		
    // initiallize playlist
	$("#player1").YTPlaylist(videos, false, function(video){
		
		var p1title = $('#p1-title');
		var p1duration = $('#p1-duration');
		var player1 = $('#player1')
		
		player1.attr('title','');
		// player1.setYTPVolume(p1slider.slider('value'));
		
		p1title.text(video.videoData.title);
		player1.tooltipster('update', video.videoData.title);
		// $.jGrowl(video.videoData.title, {position: 'center', life: 5000 });
		
		p1duration.text(formatTime(video.videoData.duration));
		
		
		p1title.lettering().animateLetters({opacity:0},null,{randomOrder:true,time:1000,reset:false});
		p1duration.lettering().animateLetters({opacity:0},null,{randomOrder:true,time:1000,reset:false});
		
	});
	
	$("#player2").YTPlaylist(videos, false, function(video){
		
		var p2title = $('#p2-title');
		var p2duration = $('#p2-duration');
		var player2 = $('#player2')
		
		player2.attr('title','');
		// player2.setYTPVolume(p2slider.slider('value'));
		
		p2title.text(video.videoData.title);
		player2.tooltipster('update', video.videoData.title);
		// $.jGrowl(video.videoData.title, {position: 'center', life: 5000 });
		
		p2duration.text(formatTime(video.videoData.duration));
		p2title.lettering().animateLetters({opacity:0},null,{randomOrder:true,time:1000,reset:false});
		p2duration.lettering().animateLetters({opacity:0},null,{randomOrder:true,time:1000,reset:false});
		
	});
    
    // focus to searchbox
    $("#q").focus();
    
	// playlist is sortable
    $('#playlist').sortable({
		cursor: 'move',
    	opacity: 0.6,
    	connectWith:"#result"
    });
    
    // set up playlist tooltip
	$('#playlist li').tooltipster({
		animation :'swing',
		delay : 50,
		offsetY : 0,
		theme: '.my-custom-theme'
	});
		
    // result is sortable
    $('#result').sortable({
		cursor: 'move',
    	opacity: 0.6,
    	connectWith:"#playlist",
    	beforeStop:function(event, ui){
    		
    		var item = ui.item;
    		
    		// hide add
	    	item.find(".add").hide();
	    	
	    	// show del
	    	item.find(".del").show();
	    	
    		// destroy tooltip
    		item.tooltipster('destroy');
    		
    		// set up playlist tooltip
			item.tooltipster({
				animation :'swing',
				delay : 50,
				position : 'bottom',
				offsetY : -150,
				theme: '.my-custom-theme'
			});
    	}
    });
    
    // result is draggable
    $("#result li").draggable({
		connectToSortable: "#playlist",
		revert: "invalid"
	});
	
	// keyup events
	$(window).keyup(function(e){
		switch(e.keyCode){
			case 27: // [Esc] clear
				$("#clear").click();
				break;
			default:
				break;
		}
	});
			        
    // keydown events
    $(window).keydown(function(e){
		
		var player1 = $('#player1');
		var player2 = $('#player2');
				
    	switch(e.keyCode){
    		case 112: // [F1] TODO
    			break;
    		case 113: // [F2] TODO
    			break;
			case 114: // [F3] hide/show
				$("#hideNshow").click();
				break;
			case 115: // [F4] TODO
				break;
			case 13: // [Enter]
				if (e.target.tagName == 'INPUT'){
					$('#search').click();
					break;
				}
    		case 119: // [F8] play/pause
    		
				/*
				 -1 (unstarted)
				 0 (ended)
				 1 (playing)
				 2 (paused)
				 3 (buffering)
				 5 (video cued).
				 */
				
    			if(player1.getPlayer().getPlayerState() == 1){
					player1.pauseYTP();
				}else{
					player1.playYTP();
				}
				
				if(player2.getPlayer().getPlayerState() == 1){
					player2.pauseYTP();
				}else{
					player2.playYTP();
				}
    			break;
    		case 118: // [F8] playprevious
    			player1.playPrev();
    			break;
    		case 120: // [F9] playnext
    			player1.playNext();
    			break;
			case 121: // [F10] play/mute
				$("#muteNunmute").click();
    			break;
			case 122: // [F11] volume down
				var volume = parseInt(player1.getPlayer().getVolume());
				volume = volume - 10;
				var min = 0;
				
				if (volume >= min) {
					player1.setYTPVolume(volume);
				} else {
					player1.setYTPVolume(min);
				}
				
    			break;
			case 123: // [F12] volume up
				var volume = parseInt(player1.getPlayer().getVolume());
				volume = volume + 10;
				var max = 100;
				
				if(volume <= max){
					player1.setYTPVolume(volume);
				} else {
					player1.setYTPVolume(max);
				}
				
    			break;
    		default:
    			break;
    	}
	});
	
	$('input').keypress(function(e) {
		if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
			return false;
		} else {
			return true;
		}
	});
	
	$("#back-top").hide();
	
	$(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').stop().fadeOut();
        }
    });
    
    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    
    // if u click video
    $(document).on('click', '.pleft', function() {
		var videoId = $(this).closest('li').attr("id");
		var videoUrl = 'http://youtu.be/' + videoId;
		var option ={'videoURL': videoUrl,'ratio':'16/9'}

		$('#player1').changeMovie(option);
	});
	
	// if u click video
    $(document).on('click', '.pright', function() {
		var videoId = $(this).closest('li').attr("id");
		var videoUrl = 'http://youtu.be/' + videoId;
		var option ={'videoURL': videoUrl,'ratio':'16/9'}

		$('#player2').changeMovie(option);
	});
	
    $("#hideNshow").click(function(){
    	
    	var YTPlayer = $('#player1').get(0);
    	var target = $(YTPlayer.playerEl);
    	
		if (target.is(':visible')) {
			YTPlayer.overlay.removeClass("raster");
			YTPlayer.overlay.removeClass("retina");

			target.hide();
			$('#hideNshow').val('show');
		}else{
			var retina = (window.retina || window.devicePixelRatio > 1);
			YTPlayer.overlay.addClass(retina ? "raster retina" : "raster");

			target.show();
			$('#hideNshow').val('hide');
		}
    });
    
    $("#muteNunmute").click(function(){
    	$('#player1').toggleVolume();
    });
    
    $("#search-button").click(function(){
    	$("#search").click();
    });
    
    var searchedOnce = false;
    var searching = false;
    
	$("#search").click(function() {
		
		// if q is blank don't search
		if(!$.trim($('#q').val())){
			return false;
		}
		
		// if still searching
		if(searching){
			return false;
		}
		
		$('#resultMsg').text('');
		
		searching = true;
		
		
		// only first time search
		if(!searchedOnce){
			
			// Empty
       }

			var data = {
				'q' : $("#q").val(),
				'maxResults' : '14',
				'nToken' : $('#nToken').val(),
				'pToken' : $('#pToken').val(),
				'videoDuration' : $('input[name=duration]:checked').val()
			};
			
			var data4compare = {
				'q' : data['q'],
				'maxResults' : data['maxResults'],
				'videoDuration' : data['videoDuration']
			};
			
			// if query is different
			if($('#pq').val() != JSON.stringify(data4compare)){
				// clear token
				data['nToken'] = "";
				data['pToken'] = "";
			}

            $.ajax({
                type: "POST",
				dataType:"json",
                url: "search.php",
                data: data,
                success: function(data, dataType){
					callBackSearchResult(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown){
	                alert('Error : ' + errorThrown);
                }
            });
            
			// remember previous data
			$('#pq').val(JSON.stringify(data4compare));

			// don't reload
            return false;
	});
	
	// todo
	$('#player1').on("YTPStart",function(){
		var player1 = $('#player1').get(0);
		var videoData = player1.videoData;
		
		// set text
		$('#p1-title').text(videoData.title);
		$('#p1-duration').text(formatTime(videoData.duration));
		
		  			// $("#example01r").find(".outro").fadeOut(0);
		  			// $("#example01r").find(".intro").fadeIn(0);
		// $('#player1').tooltipster('update', videoData.title);
		
//		// set background
//		$('body').css('background','url('+ videoData.thumbnail.hqDefault + ') no-repeat center center fixed');
//		$('body').css('background-size','cover');
//		
	
        //$.ajax({
//            type: "POST",
//			dataType:"json",
//            url: "play.php",
//            data: {data: videoData},
//            error: function(XMLHttpRequest, textStatus, errorThrown){
//	            alert('Error : ' + errorThrown);
//            }
//        });
//		
	});

	// todo
	$('#player2').on("YTPStart",function(){
		var player2 = $('#player2').get(0);
		var videoData = player2.videoData;
		
		// $('#p2-title').text(videoData.title);
		// $('#p2-duration').text(formatTime(videoData.duration));
		// $('#player2').tooltipster('update', videoData.title);
		
		// set background
//		$('body').css('background','url('+ videoData.thumbnail.hqDefault + ') no-repeat center center fixed');
//		$('body').css('background-size','cover');
//		
        //$.ajax({
//            type: "POST",
//			dataType:"json",
//            url: "play.php",
//            data: {data: videoData},
//            error: function(XMLHttpRequest, textStatus, errorThrown){
//	            alert('Error : ' + errorThrown);
//            }
//        });
//		
	});


	/*
	 * function clear
	 */
	$("#clear").click(function() {
		
		// clear search
		$('#q').val("");
		
		// clear store
		$('#store').val("");
		
		// clear token
		$('#pToken').val("");
		$('#nToken').val("");
		
		// back to top
		$('#back-top a').click();
		
		// clear result;
		$('#result').children().fadeOut(1000).promise().then(function() {
	    	$("#result").empty();
		});
		
		// set focus
		$('#q').focus();
	});
	
	callBackSearchResult = function(data){
		
		if(data['errorMsg'] || data['pageInfo']['totalResults'] == 0){
			
			// update flag
			searchedOnce = true;
			searching = false;
			
			$('#resultMsg').text('no results');
			return;
		}
		
		// store the data to hidden
		if(!$('#store').size()){
			var store = $('<input type="hidden" id="store">');
			$('#resultArea').append(store);
		}
		
		// set previous page token;
		if(!$('#pToken').size()){
			var pToken = $('<input type="hidden" id="pToken">');
			$('#searchArea').append(pToken);
		}
		$('#pToken').val(data['prevPageToken']);
		
		// set next page token;
		if(!$('#nToken').size()){
			var nToken = $('<input type="hidden" id="nToken">');
			$('#searchArea').append(nToken);
		}
		$('#nToken').val(data['nextPageToken']);
		
		$.each(data['items'], function(key, val) {
			
			// if the data type is except for video
			if (val['id']['kind'] != 'youtube#video') {
				return true; // means continue(skip)
			}
			
			var title = val['snippet']['title'];
			var videoId = val['id']['videoId'];
			var thumbnails = val['snippet']['thumbnails']['default']['url'];
			var description = val['snippet']['description'];
			var duration = val['contentDetails']['duration']

			// list
			var str = $('<li />')
				.attr('title',title)
				.addClass("mosaic-block bar")
				.addClass("tooltip")
				.attr('id',videoId);
			
			var add = $('<div />')
				.addClass('add')
				.text('[add]');
			
			var del = $('<div />')
				.addClass('del')
				.text('[del]')
				.hide();
				
			var con = $('<div />')
				.addClass('con')
				.append(add)
				.append(del);
				
			// backdrop
			$(str).append(
				$('<div />')
					.addClass("mosaic-backdrop clearfix")
					.append($('<img>').attr('src',thumbnails))
					.append($('<div />').addClass('pleft').addClass('float-left'))
					.append($('<div />').addClass('pright').addClass('float-right')));
			
			// overlay			
			$(str).append($('<div />')
					.addClass("mosaic-overlay")
					.text(duration)
					.append(con));
					
			// hide the item and put in ul.
			$(str).hide().prependTo('#result');
			
		});
		
		// hover
	
		$('.pleft').hover(
		function(){
			$(this).text('<<<<<');
			$(this).lettering().animateLetters({top:0,opacity:1},{top:20,opacity:0},{randomOrder:true,time:100,reset:true},function()
			{
				$(this).lettering().animateLetters({top:0,opacity:1},null,{randomOrder:true,time:0,reset:true});
			});
		},function(){
			$(this).text('');
		});
		
		$('.pright').hover(
		function(){
			$(this).text('>>>>>');
			$(this).lettering().animateLetters({top:0,opacity:1},{top:20,opacity:0},{randomOrder:true,time:100,reset:true},function()
			{
				$(this).lettering().animateLetters({top:0,opacity:1},null,{randomOrder:true,time:0,reset:true});
			});
		},function(){
			$(this).text('');
		});
		
		// set up result tooltip
		$('#result li').tooltipster({
			animation :'fade',
			delay : 50,
			position : 'bottom',
			offsetY : 0,
			theme: '.my-custom-theme'
		});
	
		// load mosaic
		$('.bar').mosaic({
			animation	:	'slide'
		});
		
		// set up add
		$(".add").on('click',function(){
	    	
	    	var target = $(this).closest("li");
	    	
	    	target.hide();
	    	
	    	// hide add button
	    	$(this).hide();
	    	
	    	// because of mosaic
	    	$(this).closest(".mosaic-overlay").mouseleave();
	    	
	    	// show del button
	    	$(this).parent().children(".del").show();
	    	
			// scroll to bottom TODO
					
			// append to playlist
			target.appendTo("#playlist").fadeIn();
		
    	});
    	
    	// set up del
		$(".del").on('click',function(){
			
			// destroy tooltip first
			$(this).closest("li").tooltipster('destroy');
			
	    	var target = $(this).closest("li").remove();
    	});
    
		// fadein the list
		$('#result li').fadeIn(1500);
		
		// update flag
		searchedOnce = true;
		searching = false;
		
	};
	
	formatTime = function (s) {
		var min = Math.floor(s / 60);
		var sec = Math.floor(s - (60 * min));
		return (min <= 9 ? "0" + min : min) + " : " + (sec <= 9 ? "0" + sec : sec);
	};
});