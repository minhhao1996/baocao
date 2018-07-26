<div class="container">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 product-content">

        <div class="collection__title">
            <h1><span>Tất cả sản phẩm </span></h1>

            <div id="sort-by" class="hidden-xs">
                <label class="left hidden-xs" for="sort-select">Sắp xếp theo: </label>
                <form class="form-inline form-viewpro">
                    <div class="form-group">
                        <select id="sortControl" class="sort-by form-control input-sm"
                                onchange="sortby(this.value)">
                            <option value="">Bán chạy nhất</option>
                            <option value="name-asc">A → Z</option>
                            <option value="name-desc">Z → A</option>
                            <option value="price-asc">Giá tăng dần</option>
                            <option value="price-desc">Giá giảm dần</option>
                            <option value="created-desc">Hàng mới nhất</option>
                            <option value="created-desc">Hàng cũ nhất</option>
                        </select></div>
                </form>
            </div>
            <div class="list-product-content">
                <?php foreach ($product as $row): ?>
                    <div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 product-one">
                        <div class="image-product">
                            <a href="<?php echo base_url('product/view/' . $row->id) ?>"
                               title=" <?php echo $row->name ?>  ">
                                <img src="<?php echo base_url('upload/product/' . $row->image_link) ?>" class="img-bg"
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
</div>