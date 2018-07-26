
<div class="container">
		<div class="col-md-3 col-sm-3 hidden-xs"></div>
		<div class="col-md-6 col-sm-6 col-xs-12">
			<div class="products-wrap">
				<div class="accordion accordion-lg divcenter nobottommargin clearfix" style="max-width: 550px;">
					<div id="register">
						<div class="acctitle acctitlec"><i class="acc-closed fa fa-user"></i><i class="acc-open fa fa-user-plus"></i>Đăng ký tài khoản</div>
						<div class="acc_content clearfix" style="display: block;">
                            <input name="FormType" type="hidden" value="customer_register">
                            <input name="utf8" type="hidden" value="true">
                            <form action=" <?php echo site_url('user/register')?>" method="post" enctype="multipart/form-data">
                                <div class="col_full">
                                    <label for="register-form-email">Email:<span class="require_symbol">*</span></label>
                                    <input type="text" id="register-form-email" name="email" value="<?php echo set_value('email')?>" class="form-control" placeholder="Nhập email">
                                    <div class="error" id="email_error"><?php echo form_error("email")?></div>
                                </div>
                                <div class="col_full">
                                    <label for="register-form-password">Mật khẩu:<span class="require_symbol">*</span></label>
                                    <input type="password" id="register-form-password" name="password" placeholder="Mật khẩu" class="form-control">
                                    <div class="error" id="password_error"><?php echo form_error("password")?></div>
                                </div>

                                <div class="col_full">
                                    <label for="register-form-password">Nhập lại mật khẩu:<span class="require_symbol">*</span></label>
                                    <input type="password" id="register-form-password" name="re_password" placeholder="Mật khẩu" class="form-control">
                                    <div class="error" id="password_error"><?php echo form_error("re_password")?></div>
                                </div>
                                <div class="col_full">
                                    <label for="first_name">Họ tên:<span class="require_symbol">*</span></label>
                                    <input type="text" id="first_name" name="name" placeholder="Họ tên" class="form-control" value="<?php echo set_value('name')?>">
                                    <div class="error" id="name_error"><?php echo form_error("name")?></div>
                                </div>

                                <div class="col_full">
                                    <label for="first_name">Số điện thoại:<span class="require_symbol">*</span></label>
                                    <input type="text" id="first_name" name="phone" placeholder="Số điện thoại" class="form-control" value="<?php echo set_value('phone')?>">
                                    <div class="error" id="name_error"><?php echo form_error("phone")?></div>
                                </div>
                                <div class="col_full">
                                    <label for="first_name">Đia chỉ:<span class="require_symbol">*</span></label>
                                    <input type="text" id="first_name" name="address" value="<?php echo set_value('address')?>" class="form-control" placeholder="Tên địa chỉ">
                                    <div class="error" id="username_error"><?php echo form_error("address")?></div>
                                </div>
                                <div class="col_full nobottommargin">
                                    <button class="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" type="submit" style="margin-bottom: 20px">Đăng ký</button>
                                    <ul>
                                        <li class="right" style="font-size: 0.9em">Nếu đã có tài khoản, nhấp vào <a href=" <?php echo site_url('user/login')?>" style="padding-right:3px;font-size: 0.9em"> đây</a>để đăng nhập !</li>
                                    </ul>
                                </div>
                            </form>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-sm-3 hidden-xs"></div>
	</div>