<script type="text/javascript" charset="utf8" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.2.min.js"></script>
<script type="text/javascript" charset="utf8" src="http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min.js"></script>
<script language="javascript" src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
<div class="row content-cart">
    <div class="container">
        <?php if ($total_items > 0): ?>

        <form action="/cart" method="post" id="cartformpage">
            <div class="cart-index">
                <div class="tbody text-center">


                    <div class="col-xs-12 col-sm-12 col-md-8">
                        <table class="table table-list-product">
                            <thead>
                            <tr style="background: #f4f4f4;">
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th class="text-center">Đơn giá</th>
                                <th class="text-center">Số lượng</th>
                                <th class="text-center">Thành tiền</th>
                                <th class="text-center">Xóa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <?php $total_amount = 0; ?>
                            <?php foreach ($carts as $row):?>
                            <?php $total_amount = $total_amount + $row['subtotal'] ?>

                            <tr>
                                <td class="img-product-cart">
                                    <a href="<?php echo base_url('product/view/'.$row['id'])?>">
                                        <img src="<?php echo base_url('upload/product/'.$row['image_link']) ?>" alt="<?php echo $row['name'];?>">
                                    </a>
                                </td>
                                <td>
                                    <a href="<?php echo base_url('product/view/'.$row['id'])?>" class="pull-left"><?php echo $row['name'];?></a>
                                </td>
                                <td>
												<span class="amount">
							        <?php echo number_format($row['price']); ?>đ</span>
                                </td>
                                <td>
                                    <div class="quantity clearfix">
                                        <input name="qty_<?php echo $row['id']?>" id="<?php echo $row['id']?>" class="form-control" type="number" value="<?php echo $row['qty'];?>"
                                               min="1" max="10" onchange="onChangeSL(id)">

                                    </div>
                                </td>
                                <td>
												<span class="amount">
											<?php  echo number_format($row['subtotal'])?>đ</span>
                                </td>
                                <td>
                                    <a class="remove" title="Xóa" onclick="onRemoveProduct(id)" id="<?php echo $row['id']?>"><i
                                                class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            </tbody>
                            <?php endforeach; ?>
                        </table>
                    </div>


                    <div class="col-xs-12 col-sm-12 col-md-4">
                        <div class="clearfix btn-submit" style="padding-left: 10px;margin-top: 20px;">
                            <table class="table total-price" style="border: 1px solid #ececec;">
                                <tbody>
                                <tr style="background: #f4f4f4;">
                                    <td>Tổng tiền</td>
                                    <td><strong><?php echo number_format($total_amount)?>đ</strong></td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <button type="button" onclick="window.location.href='<?php echo site_url('order/checkout')?>'"
                                                class="btn-next-checkout">Đặt hàng
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <button type="button" onclick="window.history.go(-1);" class="btn-update-order">
                                            Tiếp tục mua hàng
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </form>
            <?php else:?>
            <p id = "cart-info">Không có sản phẩm nào trong giỏ hàng !</p>
            <a onclick="window.history.go(-1);" class="fa fa-undo undo">Tiếp tục mua hàng</a>
        <?php endif; ?>
    </div>
</div>
<script>
    function onChangeSL(id){
        var sl = document.getElementById(id).value;
        var strurl="<?php echo base_url();?>"+'/cart/update';
        jQuery.ajax({
            url: strurl,
            type: 'POST',
            dataType: 'json',
            data: {id: id, sl:sl},
            success: function(data) {
                document.location.reload(true);
            }
        });
    }
    function onRemoveProduct(id){
        var strurl="<?php echo base_url();?>"+'/cart/del';
        jQuery.ajax({
            url: strurl,
            type: 'POST',
            dataType: 'json',
            data: {id: id},
            success: function(data) {
                document.location.reload(true);
            }
        });
    }
</script>