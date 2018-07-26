<div class="container order-page">
    <div class="general__title">
        <h2>Chi tiết đơn hàng</h2>
    </div>
    <div class="table-responsive">
        <fieldset>
            <table class="table table-bordered tb-detail-or">
                <thead>
                <tr class="">
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
                </thead>
                <tbody>

                <?php foreach ($query->result() as $row):?>
                        <tr>
                            <td><p style = "text-align: left;"><a href="<?php echo site_url('product/view/').$row->id?> "><?php echo $row->name;?></a></p></td>
                            <td><p style = "text-align: left;"><?php echo number_format($row->price);?>đ</p></td>
                            <td><p style = "text-align: left;"><?php echo $row->qty;?></p></td>
                            <td><p style = "text-align: left;"><?php echo number_format( $row->amount);?>đ</p></td>
                        </tr>
                    <?php endforeach; ?>

                </tbody>


            </table>
        </fieldset>
    </div>
    <div class="or-detail-c">

        <div class="col-sm-6">
            <div class="general__title">
                <h3>Thông tin giao hàng</h3>
            </div>
            <div class="content-order">
                <table class="table">
                    <tbody>
                    <?php foreach ( $transaction as $sub):?>
                        <tr>
                            <td> Họ tên </td>
                            <td class="text-right"><span class="price-2"><?php echo $sub->user_name;?></span></td>
                        </tr>

                        <tr>
                            <td>Điện thoại:</td>
                            <td class="text-right"><span class="price-2"><?php echo $sub->user_phone;?></span></td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td class="text-right"><span class="price-2"><?php echo $sub->user_email;?></span></td>
                        </tr>
                        <tr>
                            <td>Điạ Chỉ:</td>
                            <td class="text-right"><span class="price-2"><?php echo $sub->address;?></span></td>
                        </tr>

                        <tr>
                            <td>Thời gian:</td>
                            <td class="text-right"><span class="price-2"><?php echo get_date($sub->created);?></span></td>
                        </tr>

                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-sm-5">
            <div class="general__title">
                <h3>Tổng tiền hóa đơn</h3>
            </div>
            <div class="content-order">
                <table class="table">
                    <tbody>
                    <?php foreach ( $transaction as $sub):?>
                    <tr>
                        <td> Đã thanh toán </td>
                        <td class="text-right"><span class="price-2"><?php echo number_format( $sub->amount);?> VNĐ</span></td>
                    </tr>

                    <tr>
                        <td>Vận Chuyển:</td>
                        <td class="text-right"><span class="price-2">30.000VNĐ</span></td>
                    </tr>
                        <tr>
                            <td>Hình thức thanh toán:</td>
                            <td class="text-right"><span class="price-2"><?php echo $sub->payment;?></td>
                        </tr>

                    <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-xs-12">
            <a href="javascript:;" onclick="window.history.go(-1);" class="viewMore pull-left" style="font-size: 15px;"><i class="fa fa-angle-left" aria-hidden="true"></i> Trở về trang trước</a>
        </div>
    </div>
</div>