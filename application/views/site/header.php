

<script src="<?php echo public_url()?>js/autocomplete.js"></script>

<link href="<?php echo public_url()?>css/smoothness/autocomplete.min.css" rel="stylesheet">
<script type="text/javascript">
    $(function() {
        $( "#text-search" ).autocomplete({
            source: "<?php echo site_url('product/search/1')?>",
        });

    });
</script>
<section id="header">
    <nav class="navbar navbar-inverse" style="z-index: 9999">
        <div class="container">
            <div class="col-md-12 col-lg-12">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed pull-right" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div class="icon-cart-mobile hidden-md hidden-lg">
                        <a href="<?php echo base_url('cart ')?>">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span><?php echo $total_items?></span>
                        </a>
                    </div>
                    <!-- <div class="site-container">
                        <a href="#" class="header__icon pull-left" id="header__icon"></a>
                    </div> -->
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar navbar-nav" id="nav1">
                        <li><a href="<?php echo base_url('product/catalog/')?>">Trang chủ</a></li>
                        <li><a href="<?php echo site_url('product/product_all')?>">Sản phẩm</a></li>
                        <li><a href="tin-tuc/1">Tin tức</a></li>
                        <li><a href="gioi-thieu">Giới thiệu</a></li>
                        <li><a href="<?php echo base_url('contact/index/')?>">Liên hệ</a></li>
                        <?php if(isset($user_info)):?>
                        <li><a href="<?php echo site_url('user')?>">Xin Chào :<?php echo  $user_info->name?></a></li>
                        <li><a href="<?php echo site_url('user/logout')?>">Thoát</a></li>
                        <?php else:?>
                            <li><a href="<?php  echo site_url('user/register')?>">Đăng ký</a></li>
                            <li><a href="<?php  echo site_url('user/login')?>">Đăng nhập</a></li>
                        <?php endif;?>
                    </ul>
                    <ul class="nav navbar navbar-nav pull-right" id="nav2">
                        <?php if(isset($user_info)):?>
                            <li><a href="<?php echo site_url('user')?>">Xin Chào: <?php echo  $user_info->name?></a></li>
                            <li><a href="<?php echo site_url('user/logout')?>">Thoát</a></li>
                        <?php else:?>
                            <li><a href="<?php  echo site_url('user/register')?>">Đăng ký</a></li>
                            <li><a href="<?php echo site_url('user/login')?>">Đăng nhập</a></li>
                        <?php endif;?>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</section>
<section class="logo-search">
    <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 logo">
            <a href="<?php echo base_url()?>"><img src="http://[::1]/baocaoshop/public/images/logo_FULL_PNG.png"
                                                    alt="Green Construction"></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 search">
            <form action="<?php echo site_url('product/search')?>" method="get" role="form">
                <div class="input-search">
                    <input type="text" aria-haspopup="true" aria-autocomplete="list" role="textbox" autocomplete="off" class="form-control" name="search" placeholder="Nhập từ khóa để tìm kiếm..." value="<?php echo isset($key) ? $key : ''?>" id="text-search">
                   <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </form>
        </div>

        <div class="col-md-2 cart hidden-xs hidden-sm">
            <a href="<?php echo base_url('cart ')?>">
                <img src="http://[::1]/baocaoshop/public/images/cart.png" alt="Cart">
                <span>
                    <?php echo $total_items?>
                </span>
            </a>
        </div>
    </div>
</section>
<section id="menu-slider">
    <div class="menu-pri">
        <div class="container">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 panel-left">
                <!--MOBILE-->
                <nav class="navbar navbar-default hidden-md hidden-lg" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-ex1-collapse">
                                <span class="icon-bar primary-color"></span>
                                <span class="icon-bar primary-color"></span>
                                <span class="icon-bar primary-color"></span>
                                <span class="icon-bar primary-color"></span>
                            </button>
                            <a class="navbar-brand primary-color" href="#">Danh mục sản phẩm</a>
                        </div>
                        <div class="navbar-collapse navbar-ex1-collapse hidden-md hidden-lg collapse in"
                             aria-expanded="true" style="">
                            <ul class="nav navbar-nav">
                                <?php foreach ($catalog_list as $row): ?>
                                    <li class="dropdown"><a href="san-pham/dien-thoai " title="<?php echo $row->name ?>"
                                                            class="dropdown-toggle" data-toggle="dropdown"><?php echo $row->name ?><i
                                                    class="fa fa-angle-right pull-right" aria-hidden="true"></i></a>
                                        <?php if (!empty($row->subs)): ?>
                                            <ul class="dropdown-menu">
                                                <?php foreach ($row->subs as $sub): ?>
                                                    <li><a href="san-pham/khac " title=" <?php echo $sub->name ?> "> <?php echo $sub->name ?></a></li>
                                                <?php endforeach; ?>
                                            </ul>
                                        <?php endif; ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!--MD LG-->
                <div class="panel-left-md-768">
                    <div class="header-768">
                        <i class="fa fa-bars fa-1x primary-color"></i>
                        <h4 class="primary-color">Danh mục sản phẩm</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-9 col-lg-9 panel-right">
                <ul class="menu-right pull-right">
                    <li class="pull-left"><a href="<?php echo base_url('product/catalog/')?>">Trang chủ</a></li>
                    <li class="pull-left"><a href="<?php echo site_url('product/product_all/')?>"">Sản phẩm</a></li>
                    <li class="pull-left"><a href="tin-tuc/1">Tin tức</a></li>
                    <li class="pull-left"><a href="gioi-thieu">Giới thiệu</a></li>
                    <li class="pull-left"><a href="<?php echo base_url('contact/index/')?>">Liên hệ</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

