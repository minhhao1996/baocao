
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>
        24hStore.vn - Vua bán lẻ điện thoại di động, máy tính bảng chính hãng    </title>
    <link href="<?php echo public_url()?>images/24hstore-favicon.png" rel="shortcut icon" type="image/png">
    <link href="<?php echo public_url()?>css/bootstrap.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/font-awesome.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/lte.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/AdminLTE.min.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/owl.carousel.min.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/owl.theme.default.css" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo public_url()?>css/style-jc.css">
    <link href="<?php echo public_url()?>css/menu-tab.css" rel="stylesheet">
    <link href="<?php echo public_url()?>css/jquery.bxslider.css" rel="stylesheet" />
    <link href="<?php echo public_url()?>css/style.css" rel="stylesheet">

    <script src="//code.jquery.com/jquery-1.12.4.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script

    <script src="<?php echo public_url('site')?>js/jquery-2.2.3.min.js"></script>
    <script src="<?php echo public_url()?>js/bootstrap.js"></script>
    <script src="<?php echo public_url()?>js/app.min.js"></script>
    <script src="<?php echo public_url()?>js/owl.carousel.js"></script>
    <script src="<?php echo public_url()?>js/jquery.jcarousel.js"></script>
    <script src="<?php echo public_url()?>js/jquery.bxslider.js"></script>
    <script src="<?php echo public_url()?>js/jcarousel.connected-carousels.js"></script>
    <script src="<?php echo public_url()?>js/menu-tab.js"></script>


    <script>(function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <script>
        function onAddCart(id){
            var strurl="<?php echo base_url();?>"+'/cart/add';
            jQuery.ajax({
                url: strurl,
                type: 'POST',
                dataType: 'json',
                data: {id: id},
                success: function(data) {
                    document.location.reload(true);
                    alert('Thêm sản phẩm vào giỏ hàng thành công !');
                }
            });
        }
    </script>