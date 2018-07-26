<?php $this->load->helper('date'); ?>
<section id="checkout-cart">
    <div class="container">
        <div class="col-md-12">
            <div class="wrapper overflow-hidden">
                <div class="checkout-header _block bg-pri hidden-xs">
                    <div class="checkout-header _container">
                        <a href="#" class="checkout-header _logo">
                            <!-- <h1 class="color-fff">24hStore</h1> -->
                        </a>
                        <div class="checkout-header _progress-bar">
                            <ol class="step-breadcrumb _list">
                                <li class="step-breadcrumb _item">
                                    <span class="step-breadcrumb _text">1.Cửa hàng</span>
                                </li>
                                <li class="step-breadcrumb _item">
                                    <span class="step-breadcrumb _text">2.Địa chỉ</span>
                                </li>
                                <li class="step-breadcrumb _item -current">
                                    <span class="step-breadcrumb _text">3.Kết quả</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="checkout-content">
                    <div class="tks-header">
                        <h3 class="fa fa-check-circle">  Một email vừa được gửi đến địa chỉ
                            <?php echo isset($user_tran->user_email) ? $user_tran->user_email : '' ?>. Hãy đăng nhập để kiểm tra thông tin đơn hàng.
                        </h3>
                    </div>
                    <div class="tks-content" style="min-height: 1px;
    overflow: hidden;">
                        <div class="col-xs-12 col-sm-12 col-md-7 col-login-checkout" style="margin-bottom: 20px">
                            <table class="table tks-tabele-info-cus">
                                <thead>
                                <tr>
                                    <th>Thông tin giao hàng</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        Tên khách hàng : <strong> <?php echo isset($user_tran->user_name) ? $user_tran->user_name : '' ?></strong></td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại : <strong><?php echo isset($user_tran->user_phone) ? $user_tran->user_phone : '' ?></strong></td>
                                </tr>
                                <tr>
                                    <td> Địa chỉ :<strong><?php echo isset($user_tran->address) ? $user_tran->address : '' ?></strong></td>
                                </tr>
                                <tr>
                                    <td>Thanh toán :<strong><?php echo isset($user_tran->payment) ? $user_tran->payment : '' ?></strong></td>
                                </tr>
                                <tr>
                                    <td>Thời gian đặt :<strong> <?php echo isset($user_tran->created) ? get_date($user_tran->created) : '' ?></strong></td>
                                </tr>


                                </tbody>
                            </table>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4 products-detail">
                            <div class="no-margin-table" style="width: 95%; float: right;">
                                <table class="table" style="color: #333;">
                                    <thead>
                                    <tr>
                                        <th colspan="3" style="font-weight: 600;">Thông tin đơn hàng</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr style="background: #fafafa; color: #333;"
                                        class="text-transform font-weight-600">
                                        <td>Sản phẩm</td>
                                        <td class="text-center">Số lượng</td>
                                        <td class="text-center">Thành tiền</td>
                                    </tr>
                                    <?php foreach ($carts as $row):?>
                                        <tr>
                                            <td><?php echo $row['name'];?></td>
                                            <td class="text-center"><?php echo $row['qty'];?></td>
                                            <td class="text-center">
                                                <?php echo number_format($row['subtotal'])?>đ
                                            </td>
                                        </tr>
                                    <?php  endforeach;?>

                                    <tr style="background: #fafafa">
                                        <td colspan="2">Tạm tính</td>
                                        <td class="text-center"><?php echo  number_format($total_amount)?>đ</td>
                                    </tr>
                                    <tr style="background: #fafafa">
                                        <td colspan="2">Giao hàng tiêu chuẩn</td>
                                        <td class="text-center">30.000đ</td>
                                    </tr>

                                    <tr style="background: #fafafa">
                                        <td colspan="2" class="font-weight-600">Thành tiền<br><span
                                                style="font-weight: 100; font-style: italic;">(Tổng số tiền thanh toán)</span>
                                        </td>
                                        <td class="text-center"><?php echo  number_format($total_amount+30000)?>đ</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    <div class="btn-tks clearfix">
                        <button type="button" onclick="window.location.href='<?php echo base_url()?>'" class="btn-next-checkout pull-left">Tiếp tục mua hàng</button>
                        <button type="button" onclick="window.print()" class="btn-update-order pull-left">In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>