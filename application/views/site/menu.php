<?php $this->load->view('site/head', $this->data) ?>
<section id="menu-slider">
    <div class="slider">
        <div class="container">
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 list-menu pull-left">
                <ul class="main-ul">
                    <?php foreach ($catalog_list as $row): ?>
                        <li><a href="<?php echo base_url('product/catalog/'.$row->id)?>" title="<?php echo $row->name ?>"><?php echo $row->name ?><i
                                        class="fa fa-angle-right pull-right" aria-hidden="true"></i></a>
                            <?php if (!empty($row->subs)): ?>
                                <ul class="sub">
                                    <?php foreach ($row->subs as $sub): ?>
                                        <li>
                                            <a href="<?php echo base_url('product/catalog/'.$sub->id)?>"
                                               title=" <?php echo $sub->name ?> "> <?php echo $sub->name ?></a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 slider-main pull-left">
                <div id="carousel-id" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-id" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-id" data-slide-to="1" class=""></li>
                        <li data-target="#carousel-id" data-slide-to="2" class=""></li>
                    </ol>

                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="https://cdn3.tgdd.vn/qcao/13_07_2018_07_01_31_0-02-06-ba3ba54d2620edbe9c429238b43db7b44ad2c4fcc68e0fedf3a78a58e412b6dc_1c6d8fb87db73b.jpg">
                        </div>
                        <div class="item">
                            <img src="https://cdn2.tgdd.vn/qcao/05_07_2018_16_39_30_Big-Oppo-800-300.png">
                        </div>
                        <div class="item">
                            <img src="http://[::1]/baocaoshop/public/images/636241444899572912_H1.jpg">
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            </div>
    </div>

</section>

