<div id="content">
<div class="container account">
    <div class="col-main col-md-8 col-sm-12">
        <div class="dashboard">
            <div class="recent-orders">
                <div class="table-responsive">
                    <table class="data-table" id="my-orders-table" style="padding-right: 10px;color: black;">
                        <thead>
                        <tr class="first last">
                            <th class="text-left" style="width: 85px; ">Đơn hàng
                            </th>
                            <th style="  width: 150px;">Ngày</th>
                            <th>Địa chỉ giao hàng</th>
                            <th style="width: 150px;text-align: center;"><span class="nobr">Giá trị đơn hàng</span></th>
                            <th style="width: 100px;text-align: center;">Xem
                            </th>
                        </tr>
                        </thead>
                        <?php foreach ( $transaction as $row): ?>
                        <tbody>
                        <tr class="first odd">
                            <td><?php echo $row->id?></td>
                            <td><?php echo get_date($row->created)?></td>
                            <td><?php echo $row->address?></td>
                            <td style="text-align: center;"><span class="price-2"><?php echo number_format($row->amount)?> đ</span></td>
                            <td class="a-center last"><span class="nobr"> <a
                                            href="<?php echo base_url('user/info_order/'.$row->id) ?>">Xem chi tiết</a></span></td>
                        </tr>
                        </tbody>
                        <?php endforeach; ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <aside class="col-right sidebar col-md-4 col-xs-12">
        <div class="block block-account">
            <div class="general__title">
                <h2><span>Thông tin tài khoản</span></h2>
            </div>
            <div class="block-content">
                <p>Họ và tên: <strong><?php echo $user->name ?></strong></p>
                <p>Địa chỉ: <strong><?php echo $user->address ?></strong></p>
                <p>Số điện thoại: <strong><?php echo $user->phone ?></strong></p>
                <p>Email: <strong><?php echo $user->email ?></strong></p>
                <p><a href="<?php echo base_url('user/edit') ?>" class="button">Chỉnh sửa</a></p>
            </div>
        </div>
    </aside>
</div>
</div>