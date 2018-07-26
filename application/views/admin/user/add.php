<?php $this->load->view('admin/user/head', $this->data) ?>
<div class="line"></div>
<div class="wrapper">
    <div class="widget">

        <div class="title">
            <span class="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck"></span>
            <h6>Thêm Thành Viên</h6>
        </div>
        <form class="form" id="form" action="" method="post" enctype="multipart/form-data">
            <fieldset>
                <div class="formRow">
                    <label class="formLeft" for="param_name">Tên:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="name" id="param_name" _autocheck="true" type="text" value="<?php echo set_value("name")?>"></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("name")?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft" for="param_username">Email:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="email" id="param_email" _autocheck="true" type="text" value="<?php echo set_value("email")?> "></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("email")?></div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="formRow">
                    <label class="formLeft" for="param_password">Số điện thoại:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="phone" id="param_phone" _autocheck="true" type="text" value="<?php echo set_value("phone")?> "></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("phone")?></div>
                    </div>
                    <div class="clear"></div>
                </div>

                <div class="formRow">
                    <label class="formLeft" for="param_password">Địa chỉ:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="address" id="prama_address" _autocheck="true" type="text" value="<?php echo set_value("address")?> "></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("address")?></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </fieldset>
            <div class="formSubmit">
                <input type="submit" value="Thêm mới" class="redB">
            </div>
        </form>

    </div>

</div>