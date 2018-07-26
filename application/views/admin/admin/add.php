
<div class="line"></div>
<div class="wrapper">
    <div class="widget">

        <div class="title">
            <span class="titleIcon"><input type="checkbox" id="titleCheck" name="titleCheck"></span>
            <h6>Thêm Mới Admin</h6>
        </div>
        <form class="form" id="form" action="" method="post" enctype="multipart/form-data">
            <fieldset>
                <div class="formRow">
                    <label class="formLeft" for="param_name">Name:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="name" id="param_name" _autocheck="true" type="text" value="<?php echo set_value("name")?>"></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("name")?></div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="formRow">
                    <label class="formLeft" for="param_username">Username:<span class="req">*</span></label>
                    <div class="formRight">
                        <span class="oneTwo"><input name="username" id="param_username" _autocheck="true" type="text" value="<?php echo set_value("username")?> "></span>
                        <span name="name_autocheck" class="autocheck"></span>
                        <div name="name_error" class="clear error"><?php echo form_error("username")?></div>
                    </div>
                    <div class="clear"></div>
                </div>

            <div class="formRow">
                <label class="formLeft" for="param_password">Password:<span class="req">*</span></label>
                <div class="formRight">
                    <span class="oneTwo"><input name="password" id="param_password" _autocheck="true" type="password"></span>
                    <span name="name_autocheck" class="autocheck"></span>
                    <div name="name_error" class="clear error"><?php echo form_error("password")?></div>
                </div>
                <div class="clear"></div>
            </div>

            <div class="formRow">
                <label class="formLeft" for="param_password">Request Password:<span class="req">*</span></label>
                <div class="formRight">
                    <span class="oneTwo"><input name="re_password" id="prama_re_password" _autocheck="true" type="password"></span>
                    <span name="name_autocheck" class="autocheck"></span>
                    <div name="name_error" class="clear error"><?php echo form_error("re_password")?></div>
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