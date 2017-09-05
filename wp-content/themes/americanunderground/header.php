<!DOCTYPE html>
<html dir="ltr" lang="en-US">

<!--
========================================================================================================
=============================== Site by Manufactur.co ==================================================
========================================================================================================
-->

<head>

<!-- Basic Page Needs
================================================== -->
<meta charset="utf-8">
<title><?php wp_title(); ?></title>
<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url') ?>" />
<meta http-equiv="content-type" content="<?php bloginfo('html_type') ?>; charset=<?php bloginfo('charset') ?>" />
<link rel="alternate" type="application/rss+xml" href="<?php bloginfo('rss2_url') ?>" title="<?php printf( __( '%s latest posts', 'sandbox' ), wp_specialchars( get_bloginfo('name'), 1 ) ) ?>" />



<!-- Mobile Specific Metas
================================================== -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta name="format-detection" content="telephone=yes" />


<!-- Wordpress Header
================================================== -->
<?php wp_head(); // For plugins ?>



<!-- fonts -->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
<link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/eb79d482-0ac9-423b-bef4-686b76815a32.css"/>


<!-- Photoswipe -->
<!--
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/photoswipe/photoswipe.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/photoswipe/default-skin/default-skin.css">
<script src="<?php echo get_template_directory_uri(); ?>/assets/photoswipe/photoswipe.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/photoswipe/photoswipe-ui-default.js"></script>
-->


</head>


<body <?php if (function_exists('body_class')) body_class(); ?>>

<header>

    <div class="row">

        <div class="columns small-12 uppercase">
            <nav>
                <?php

                    wp_nav_menu(
                        array(
                            'menu'              => 'Main Menu'
                            ,'fallback_cb'      => false
                            ,'container'        => ''
                            ,'items_wrap'       => '<ul id="%1$s" class="%2$s main">%3$s</ul>'
                            ,'link_before'      => '<span>'
                            ,'link_after'       => '</span>'
                        )
                    );

                ?>
            </nav>
        </div>

    </div>

</header>
