
<div class="container">
				<div class="col-md-3 col-sm-3 hidden-xs"></div>
				<div class="col-md-6 col-sm-6 col-xs-12">
					<div id="login">
						<div class="acctitle acctitlec"><i class="acc-closed fa fa-lock"></i>Đăng nhập</div>
						<div class="acc_content clearfix" style="display: block;">

                            <form action=" <?php echo site_url('user/login')?>" method="post" enctype="multipart/form-data">
                                <input name="FormType" type="hidden" value="customer_login">
                                <input name="utf8" type="hidden" value="true">
                                <div class="col_full">
                                    <label for="login-form-username">Email:<span class="require_symbol">* </span></label>
                                    <input type="email" id="login-form-username" name="email" value="" class="form-control" placeholder=" Vui lòng nhập Email">
                                    <div class="error" id="password_error"><?php echo form_error("email")?></div>
                                </div>
                                <div class="col_full">
                                    <label for="login-form-password">Mật khẩu:<span class="require_symbol">* </span></label>
                                    <input type="password" id="login-form-password" name="password" value="" class="form-control" placeholder=" *********">
                                    <div class="error" id="password_error"><?php echo form_error("password")?></div>
                                </div>
                                <div class="col_full nobottommargin">
                                    <button class="button button-3d button-black nomargin pull-left" id="login-form-submit" name="login-form-submit" type="submit" value="login">Đăng nhập</button>
                                    <ul class="pull-right">
                                        <li><a href="#" class="fright">Quên mật khẩu?</a></li>
                                        <li><a href="<?php echo site_url('user/register')?>" class="fright">Người dùng mới? Đăng ký tài khoản</a></li>
                                    </ul>
                                </div>
                            </form>


						</div>
					</div>
				</div>
				<div class="col-md-3 col-sm-3 hidden-xs"></div>
			</div>