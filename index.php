<?php
session_start();
?>
<!--
~ jquery.mb.components
~ Copyright (c) 2001-2010. Matteo Bicocchi (Pupunzi); Open lab srl, Firenze - Italy
~ email: mbicocchi@open-lab.com
~ site: http://pupunzi.com
~
~ Licences: MIT, GPL
~ http://www.opensource.org/licenses/mit-license.php
~ http://www.gnu.org/licenses/gpl.html
-->
<!--
~ Mosaic - Sliding Boxes and Captions jQuery Plugin
~ Version 1.0.1
~ www.buildinternet.com/project/mosaic
~
~ By Sam Dunn / One Mighty Roar (www.onemightyroar.com)
~ Released under MIT License / GPL License
-->
<!doctype html>
<html lang="en" xmlns:fb="http://ogp.me/ns/fb#">
<head>
<meta charset="UTF-8">
<meta name="google" value="notranslate" >
<meta name="keywords" content="BGM4work,YouTube,作業用BGM,勉強用BGM," >
<meta name="description" content="Just listen BGM for your work!">
<!--[if lt IE 9]>
<script src="js/plugin/html5shiv/html5shiv.js"></script>
<![endif]-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src="js/plugin/mosaic/mosaic.1.0.1.js"></script>
<script src="js/plugin/ytplayer/jquery.mb.YTPlayer.js"></script>
<script src="js/plugin/tooltipster/js/jquery.tooltipster.min.js"></script>
<script src="js/plugin/dotdotdot/jquery.dotdotdot.min.js"></script>
<script src="js/plugin/lettering/jquery.lettering.js"></script>
<script src="js/plugin/lettering-animate/jquery.lettering.animate.compressed.js"></script>
<script src="js/plugin/jgrowl/jquery.jgrowl.min.js"></script>
<script src="js/original/bgm4work.js"></script>
<link rel="stylesheet" href="css/html5-doctor-reset-stylesheet.min.css" >
<link rel="stylesheet" href="css/bgm4work.css" >
<link rel="stylesheet" href="js/plugin/ytplayer/css/YTPlayer.css" >
<link rel="stylesheet" href="js/plugin/mosaic/css/mosaic.css" >
<link rel="stylesheet" href="js/plugin/tooltipster/css/tooltipster.css" >
<link rel="stylesheet" href="css/slider.css" >
<link rel="stylesheet" href="css/jquery.jgrowl.css" >
<link rel='stylesheet' href='//fonts.googleapis.com/css?family=Quicksand' >
<title>BGM4work (beta)</title>
</head>
<body>
<div id="wrapper"> 
  <script>
			( function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id))
						return;
					js = d.createElement(s);
					js.id = id;
					js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
  </script>
  <header>
    <div id="header" class="clearfix">
      <div id="titleArea" class="float-left">
        <h3>BGM4work (beta)</h3>
        <div id="socialArea">
          <fb:like href="http://www.facebook.com/BGM4work/" width="450" show_faces="false" send="false"></fb:like>
        </div>
      </div>
      <div id="searchArea" class="float-right">
        <div class="powered float-right clearfix" title="powered by YouTube"> <a href="http://www.youtube.com/""><img src="image/yt_powered_by.png"></a></div>
        <form method="POST">
          <div class="float-left">
            <input type="radio" id="d_any" name="duration" checked="checked" value="any">
            <label for="d_any">any</label>
            <input type="radio" id="d_long" name="duration" value="long">
            <label for="d_long">long</label>
            <input type="radio" id="d_medium" name="duration" value="medium">
            <label for="d_medium">medium</label>
            <input type="radio" id="d_short" name="duration" value="short">
            <label for="d_short">short</label>
          </div>
          <div style="margin-top: 15px">
            <input type="search" id="q" name="q" placeholder="relax, rain, house, cinematic and more..." value="">
            <input id="pq" type="hidden" value="">
            <input id="search" type="hidden" value="search">
            <input id="clear" type="hidden" value="clear">
          </div>
        </form>
      </div><!-- /#searchArea -->
    </div><!-- /#header -->
  </header>
  <div id="container">
    <input id="hideNshow" type="hidden" value="hide/show">
    <input id="muteNunmute" type="hidden" value="mute/unmute">
    <div id="player-wrapper" class="clearfix">
      <div id="p1-wrapper" class="float-left">
        <div id="p1-info">
          <div id="p1-title">&nbsp; </div>
          <div id="p1-duration"> &nbsp; </div>
        </div><!-- /#p1-info -->
        <div id="player1" class="player" data-property=""></div>
        <div id="p1-slider" class="slider-wrapper">
			<span class="v-tooltip"></span>
			<div class="v-slider"></div>
            <span class="v-r-volume"></span>
		</div><!-- /#p1-slider -->
      </div><!-- /#p1-wrapper -->
      <div id="p2-wrapper" class="float-left">
        <div id="p2-info">
          <div id="p2-title"> &nbsp; </div>
          <div id="p2-duration"> &nbsp; </div>
        </div><!-- /#p2-info -->
        <div id="player2" class="player" data-property=""></div>
        <div id="p2-slider" class="slider-wrapper">
			<span class="v-tooltip"></span>
			<div class="v-slider"></div>
            <span class="v-r-volume"></span>
		</div><!-- /#p2-slider -->
      </div><!-- /#p2-wrapper -->
    </div><!-- /#player-wrapper -->
	<div id="mix-slider" class="mix-slider-wrapper clearfix">
		<span class="v-tooltip"></span>
		<span class="v-l-volume"></span>
		<div class="mix-v-slider"></div>
		<span class="v-r-volume"></span>
	</div><!-- /#mix-slider -->
    <div id="resultArea" class="clearfix"><ul id="result"></ul></div>
  </div><!-- /#container -->
  <footer></footer>
  <p id="back-top"> <a href="top"><img src="image/193.png" title="Back to Top"</a> </p>
</div><!-- /#wrapper -->
<!-- .loadingWrap -->
<div class="loadingWrap">
	<img src="image/now-loading.gif">
</div><!-- /.loadingWrap -->
</body>
</html>
