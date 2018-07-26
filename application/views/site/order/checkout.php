
<form action="<?php echo site_url('order/checkout')?>" method="post" enctype="multipart/form-data" accept-charset="utf-8">
    <section id="checkout-cart">
        <div class="container">
            <div class="col-md-12">
                <div class="wrapper overflow-hidden">
                    <div class="checkout-header _block bg-pri hidden-xs">
                        <div class="checkout-header _container">
                            <a href="#" class="checkout-header _logo">
                              <h1 class="color-fff">24hStore</h1>
                            </a>
                            <div class="checkout-header _progress-bar">
                                <ol class="step-breadcrumb _list">
                                    <li class="step-breadcrumb _item">
                                        <span class="step-breadcrumb _text">1.Cửa hàng</span>
                                    </li>
                                    <li class="step-breadcrumb _item -current">
                                        <span class="step-breadcrumb _text">2.Địa chỉ</span>
                                    </li>
                                    <li class="step-breadcrumb _item">
                                        <span class="step-breadcrumb _text">3.Kết quả</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div class="checkout-content">
                        <div class="col-xs-12 col-sm-12 col-md-8 col-login-checkout" style="margin-bottom: 20px">
                            <p class="text-center">Địa chỉ giao hàng của quý khách</p>
                            <div class="wrap-info"
                                 style="width: 100%; min-height: 1px; overflow: hidden; padding: 10px;">
                                <table class="table tinfo" style="width: 80%;">
                                    <tbody>
                                    <?php if(isset($user_info)):?>
                                    <tr>
                                        <td class="width30 text-right td-right-order">Email:</td>
                                        <td>
                                            <input type="text" class="form-control" name="email"
                                                   value="<?php echo isset($user->email) ? $user->email : '' ?>"
                                                   placeholder="Email" readonly>
                                        </td>
                                    </tr>
                                    <?php else:?>
                                        <tr>
                                            <td class="width30 text-right td-right-order">Email:</td>
                                            <td>
                                                <input type="text" class="form-control" name="email"
                                                       value="<?php echo isset($user->email) ? $user->email : '' ?>"
                                                       placeholder="Email">
                                            </td>
                                        </tr>

                                    <?php endif; ?>
                                    <tr>
                                        <td class="width30 text-right td-right-order">Tên:</td>
                                        <td>
                                            <input type="text" class="form-control" id="first_name"placeholder="Họ và tên"
                                                   name="name"
                                                   value="<?php echo isset($user->name) ? $user->name : '' ?>">
                                            <div class="error"><?php echo form_error('name') ?></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="width30 text-right td-right-order">Số điện thoại:</td>
                                        <td>
                                            <input type="number" class="form-control" id="first_name" placeholder="Số điện thoại"
                                                   name="phone"
                                                   value="<?php echo isset($user->phone) ? $user->phone : '' ?>">
                                        </td>
                                        <div class="error"><?php echo form_error('phone') ?></div>
                                    </tr>
                                    <tr>
                                        <td class="width30 text-right td-right-order">Vui lòng điền CHÍNH XÁC "tầng, số
                                            nhà, đường" để tránh trường hợp đơn hàng bị hủy ngoài ý muốn:
                                        </td>
                                        <td>
                                            <textarea name="address" id="input"
                                                      placeholder="Vui lòng điền CHÍNH XÁC 'tầng, số nhà, đường' để tránh trường hợp đơn hàng bị hủy ngoài ý muốn"
                                                      class="form-control" rows="6" =""="" style=
                                            "height: auto !important
                                            ;"></textarea>
                                            <div class="error"><?php echo form_error("address") ?></div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="width30 text-right td-right-order">Thanh toán:</td>
                                        <td>
                                            <select name="payment" class="form-control next-select">
                                                <option >-- Chọn cổng thanh toán --</option>
                                                <option value="offline">-- Thanh toán khi nhận hàng --</option>
                                                <option value="nganluong">-- Thanh toán Ngân lượng --</option>
                                                <option value="baokim">-- Thanh toán Bao Kim --</option>
                                            </select>
                                            <div class="error"><?php echo form_error("payment") ?></div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
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
                    </div>
                    <div class="btn-checkout frame-100-1 overflow-hidden border-pri">
                        <button type="submit" style="width: 400px" class="pull-left bg-pri border-pri col-fff" onclick="window.location.href='<?php echo site_url('order/info')?>'">
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</form>

