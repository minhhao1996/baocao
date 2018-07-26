<?php $this->load->view('site/menu') ?>
<?php $this->load->view('site/services') ?>

<section id="content">
    <div class="container">
        <div class="list-product">
            <div class="list-header-z">
                <h2><a href="dien-thoai" style="color: #ff9800">SẢN PHẨM MỚI</a></h2>
            </div>
            <div class="list-product-content">
                <?php foreach ($product_new as $row): ?>
                    <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 product-one">
                        <div class="image-product">
                            <a href="<?php echo base_url('product/view/' . $row->id) ?>"
                               title=" <?php echo $row->name ?>  ">
                                <img src="<?php echo base_url('upload/product/' . $row->image_link) ?>" class="img-bg"
                                     style="height: 90% ">
                            </a>
                            <h4>
                                <a href="<?php echo base_url('product/view/' . $row->id) ?>" title=" <?php echo $row->name ?>  "
                                   class="ws-nw overflow ellipsis">
                                    <?php echo $row->name ?>     </a>
                            </h4>
                        </div>
                        <div class="price-product-item">
                            <?php if ($row->discount > 0): ?>
                                <?php $price_new = $row->price - $row->discount; ?>
                                <span> <?php echo number_format($price_new) ?> đ</span>
                                <span
                                        class="price_old" "><?php echo number_format($row->price) ?> đ</span>
                            <?php else: ?>
                                <span><?php echo number_format($row->price) ?> đ</span>
                            <?php endif; ?>
                        </div>
                        <div class="btn-action">
                            <button type="submit" class="fa fa-shopping-cart" onclick="onAddCart(<?php echo $row->id ?>) "></button>
                            <button type="" class="fa fa-eye">
                            </button>
                        </div>
                    </div>
                <?php endforeach; ?>


            </div>
        </div>
        <div class="list-product">
            <div class="list-header-z">
                <h2><a href="<?php echo base_url('product/view/' . $row->id) ?>" style="color: #ff9800">SẢN PHẨM HOT</a></h2>
            </div>
            <div class="list-product-content">
                <?php foreach ($product_buy as $row): ?>
                    <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 product-one">
                        <div class="image-product">
                            <a href="<?php echo base_url('product/view/' . $row->id) ?>"
                               title=" <?php echo $row->name ?>  ">
                                <img src="<?php echo base_url('upload/product/' . $row->image_link) ?>" class="img-bg"
                                     style="height: 90% ">
                            </a>
                            <h4>
                                <a href="<?php echo base_url('product/view/' . $row->id) ?>" title=" <?php echo $row->name ?>  "
                                   class="ws-nw overflow ellipsis">
                                    <?php echo $row->name ?>     </a>
                            </h4>
                        </div>
                        <div class="price-product-item">
                            <?php if ($row->discount > 0): ?>
                                <?php $price_new = $row->price - $row->discount; ?>
                                <span> <?php echo number_format($price_new) ?> đ</span>
                                <span
                                        class="price_old" "><?php echo number_format($row->price) ?> đ</span>
                            <?php else: ?>
                                <span><?php echo number_format($row->price) ?> đ</span>
                            <?php endif; ?>
                        </div>
                        <div class="btn-action">
                            <button type="submit" class="fa fa-shopping-cart" onclick="onAddCart(<?php echo $row->id ?>)"></button>
                            <button type="" class="fa fa-eye"> </button>
                        </div>
                    </div>
                <?php endforeach; ?>


            </div>
        </div>

            <div class="list-product">

                <div class="list-header-z">
                    <?php $i=0; foreach ($catalog_list as $row): ?>
                    <h2><a href="<?php echo base_url('product/catalog/'.$row->id)?>" style="color: #ff9800"><?php echo $row->name ?></a></h2>
                    <ul class="sub-category">
                        <?php foreach ($row->subs as $sub): ?>
                            <li>
                                <a href="<?php echo base_url('product/catalog/' . $sub->id) ?>" '=""
                                title="<?php echo $sub->name ?>" class="ws-nw overflow ellipsis">
                                <?php echo $sub->name ?> </a>
                            </li>

                        <?php endforeach; ?>
                    </ul>
                    <?php endforeach; ?>
                </div>

                <div class="list-product-content">
                    <?php $i++;  foreach ($product_sdt as $row): ?>

                        <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 product-one">
                            <div class="image-product">
                                <a href="<?php echo base_url('product/view/' . $row->id) ?>"
                                   title=" <?php echo $row->name ?>  ">
                                    <img src="<?php echo base_url('upload/product/' . $row->image_link) ?>"
                                         class="img-bg"
                                         style="height: 90% ">
                                </a>
                                <h4>
                                    <a href="<?php echo $row->name ?>" title=" <?php echo $row->name ?>  "
                                       class="ws-nw overflow ellipsis">
                                        <?php echo $row->name ?>     </a>
                                </h4>
                            </div>
                            <div class="price-product-item">
                                <?php if ($row->discount > 0): ?>
                                    <?php $price_new = $row->price - $row->discount; ?>
                                    <span> <?php echo number_format($price_new) ?> đ</span>
                                    <span
                                            class="price_old" "><?php echo number_format($row->price) ?> đ</span>
                                <?php else: ?>
                                    <span><?php echo number_format($row->price) ?> đ</span>
                                <?php endif; ?>
                            </div>
                            <div class="btn-action">
                                <button type="button" class="fa fa-shopping-cart" onclick="onAddCart(9)"></button>
                                <button type="button" class="fa fa-eye"
                                "=""></button>
                            </div>
                        </div>
                    <?php endforeach; ?>


                </div>
            </div>

    </div>

</section>

