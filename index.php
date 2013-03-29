<? include 'config.php'; ?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <title><?= $meta['title']; ?></title>

        <meta name="author" content="<?= $meta['author']; ?>"/>
		<meta name="keywords" content="<?= $meta['keywords']; ?>"/>
		<meta name="title" content="<?= $meta['title']; ?>"/>
		<meta name="viewport" content="width = device-width, height = device-height, maximum-scale = 1.0, initial-scale = 1.0, user-scalable = no">
		<meta name="apple-touch-fullscreen" content="yes" />
		
		<meta name="application-name" content="<?= $meta['title']; ?>" />
		<meta name="msapplication-tooltip" content="<?= $meta['description']; ?>" />
		<meta name="msapplication-starturl" content="/" />
		<meta name="msapplication-TileImage" content="apple-touch-icon-114x114-precomposed.png">
		<meta name="msapplication-TileColor" content="#ffffff">
		
		<link rel="icon" href="favicon.ico" type="image/x-icon"/>
		<link rel="fluid-icon" href="apple-touch-icon-114x114-precomposed.png" title="<?= $meta['title']; ?>" />
		<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png" />
		<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png" />

		<meta name="twitter:card" content="summary">
		<meta name="twitter:site" content="<?= $meta['twitter']; ?>">
		<meta name="twitter:creator" content="<?= $meta['twitter']; ?>">
		<meta property="og:url" content="<?= $meta['url']; ?>"/>
		<meta property="og:title" content="<?= $meta['title']; ?>"/>
		<meta property="og:description" content="<?= $meta['description']; ?>"/>
		<meta property="og:image" content="apple-touch-icon-114x114-precomposed.png"/> 
		<meta property="og:type" content="website"/>

		<script data-main="js/main" src="js/components/require.js"></script>

        <link type="text/plain" rel="author" href="http://jonathankelley.me/humans.txt" />
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,300italic,600,400' rel='stylesheet' type='text/css'>
    </head>
    <body class="loading">

    	<div class="loader table">
    		<div class="cell">
    			<div class="loading">
    				<div class="percentage progress"></div>
    				<img src="images/loading.png" />
    			</div>
    		</div>
    	</div>

        <header>
            <div class="wrapper clearfix">
                <div class="scroll">Scroll to view work</div>
                <div class="boxes">
                    <div class="j box"><span>Jonathan</span></div>
                    <div class="k box"><span>Kelley</span></div>
                </div>
            </div>
            <div class="arrow-cover">
                <div class="arrow up"></div>
            </div>
            <div class="arrow down"></div>
        </header>

        <div id="content">

            <ul class="frames">
                <li id="home" class="active frame">
                    <video autoplay loop>
                        <source src="video/home/main.mp4" type="video/mp4">
                        <source src="video/home/main.ogv" type="video/ogv">
                        <source src="video/home/main.webm" type="video/webm">
                    </video>
                    <div class="table banner">
                        <div class="cell">
                            <div class="title-container">
                                <div class="title-inner">
                                    <h1>Hi there, I'm Jonathan Kelley</h1>
                                    <h2>A <span>Web Designer</span> based in <span>London, UK</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li id="outfitr" class="frame">
                    <img src="images/work/outfitr-mac.png" class="hero" />
                </li>
                <li id="emi" class="frame">
                    <img src="images/work/emi-mac.png" class="hero" />
                </li>
                <li id="everton" class="frame">
                    <img src="images/work/everton-mac.png" class="hero" />
                </li>
                <li id="piccsy" class="frame">
                    <img src="images/work/piccsy-mac.png" class="hero" />
                </li>
            </ul>

            <footer>
                <div class="wrapper">
                    Designed by <strong>Jonathan Kelley</strong>
                    <div class="copyright">&copy;<?= date('Y'); ?></div>
                </div>
            </footer>

        </div>

        <script>
            var _gaq=[['_setAccount','UA-39343545-1'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
