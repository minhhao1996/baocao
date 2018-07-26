<?php $this->load->view('site/head', $this->data) ?>
<section id="product-detail">
    <div class="container">
        <div class="products-wrap">
            <form action="" method="post" id="ProductDetailsForm">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 listimg-desc-product">
                    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10" style="padding-bottom: 50px;">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="item active">
                                    <img src="<?php echo base_url('upload/product/' . $product->image_link) ?>"
                                         style="height: 350px;width:500px " title="<?php echo $product->name ?>">
                                </div>
                                <?php if (is_array($image_list)): ?>
                                    <?php foreach ($image_list as $img): ?>
                                        <div class="item">
                                            <img src="<?php echo base_url('upload/product/' . $img) ?>"
                                                 style="height: 350px;width:500px ">
                                        </div>

                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                            <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="product-view-content">
                        <div class="product-view-name">
                            <h1><?php echo $product->name ?></h1>
                        </div>
                        <div class="product-view-price">
                            <div class="pull-left">
                                <span class="price-label">Giá bán:</span>
                                <span class="price">
                                     <?php if ($product->discount > 0): ?>
                                         <?php $price_new = $product->price - $product->discount; ?>
                                         <span class='product_price'><?php echo number_format($price_new) ?>đ</span>

                                         <strike><span
                                                     style="font-size: large; color: black"><?php echo number_format($product->price) ?>
                                                 đ</span></strike>
                                     <?php else: ?>
                                         <span class='product_price'><?php echo number_format($product->price) ?>
                                             đ</span>
                                     <?php endif; ?>
                                </span>
                            </div>
                        </div>
                        <div class="product-status ">
                            <p style=" float: left;margin-right: 10px;">Thương hiệu:
                                <a href="<?php echo base_url('product/catalog/' . $catalog->id) ?>"
                                   title="<?php echo $catalog->name ?>">
                                    <b><?php echo $catalog->name ?></b>
                                </a></p>
                            <p class='option'>| Tình trạng: Còn hàng</b></p>
                            <p style=" float: left;margin-right: 10px;">Lượt xem :<b><?php echo $product->view ?></b>
                            </p>
                            <p>|| Lượt mua :<b><?php echo $product->buyed ?></b></p>
                            <?php if ($product->warranty != ''): ?>
                                <p>
                                    Bảo hành: <b><?php echo $product->warranty ?></b>
                                </p>
                            <?php endif; ?>
                            <?php if ($product->gifts != ''): ?>
                                <p>
                                    Tặng quà: <b><?php echo $product->gifts ?></b>
                                </p>
                            <?php endif; ?>
                        </div>
                        <div class="product-view-desc">
                            <h4>Mô tả:</h4>
                            <p><?php echo $product->site_title ?> </p>
                        </div>
                        <div class="actions-qty">
                            <label for="qty">Số lượng</label>
                            <input type="number" class="input-text qtyDetail" title="Qty" value="1" min="1"
                                   maxlength="10" id="qtyDetail" name="quantity">
                            <div class="actions-qty__button">
                                <button class="button btn-cart add_to_cart_detail detail-button" title="Mua ngay"
                                        aria-label="Mua ngay" onclick="onAddCart(<?php echo $product->id ?>)"><span><i class="fa fa-shopping-cart"
                                                                       aria-hidden="true"></i> Mua ngay</span></button>
                                <buttion class="hotline detail-hotline" aria-label="Hotline" title="Holine: 01666403210"
                                         onclick="window.location.href='tel:01666403210'"><i
                                            class="fa fa-volume-control-phone" aria-hidden="true"></i>01666403210
                                </buttion>
                            </div>
                        </div>
                        <div class="product-view-payments">
                            <label>Chấp nhận thanh toán</label>
                            <img src="<?php echo public_url() ?>site/images/payment/baokim.png">
                            <img src="<?php echo public_url() ?>site/images/payment/nganluong.png">
                        </div>
                    </div>
                </div>
                <div class="product-v-desc">
                    <h3>Đặc điểm nổi bật</h3>

                </div>
                <div class="product-comment product-v-desc">
                    <h3>Bình luận</h3>
                    <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                        <!-- 								<p>Bạn chưa đăng nhập, nhấn vào <a href="dang-nhap"> đây </a> để đăng nhập !</p>
                         -->
                        <div class="fb-comments fb_iframe_widget"
                             data-href="http://[::1]/baocaoshop/dien-thoai-samsung-galaxy-s7" data-numposts="5"
                             fb-xfbml-state="rendered"><span style="height: 178px; width: 550px;"><iframe
                                        id="f296c324797ea8" name="f1b84b4a42793f8" scrolling="no"
                                        title="Facebook Social Plugin" class="fb_ltr"
                                        src="https://www.facebook.com/plugins/comments.php?api_key=&amp;channel_url=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F1e2RywyANNe.js%3Fversion%3D42%23cb%3Df21b7638afca6e%26domain%3D%255B%253A%253A1%255D%26origin%3Dhttp%253A%252F%252F%255B%253A%253A1%255D%252Ffe071056a07e1%26relation%3Dparent.parent&amp;href=http%3A%2F%2F%5B%3A%3A1%5D%2Fbaocaoshop%2Fdien-thoai-samsung-galaxy-s7&amp;locale=vi_VN&amp;numposts=5&amp;sdk=joey&amp;version=v2.8&amp;width=550"
                                        style="border: none; overflow: hidden; height: 178px; width: 550px;"></iframe></span>
                        </div>
                    </div>
                </div>
                <div class="product-comment product-v-desc product-">
                    <h3>Sản phẩm cùng loại</h3>

                </div>

            </form>
        </div>
    </div>
</section>