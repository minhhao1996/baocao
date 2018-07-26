
    <section>
        <div class="container">
            <div id="register">
            <div class="col-md-7 ">
                <div class="section-article contactpage" style="">

                    <input name="FormType" type="hidden" value="contact">
                    <input name="utf8" type="hidden" value="true">
                    <h1 style="color: black">Liên hệ với chúng tôi</h1>
                    <form action=" <?php echo site_url('contact/index')?>" method="post" enctype="multipart/form-data">
                        <div class="col_full">
                            <label for="first_name">Họ tên:<span class="require_symbol">*</span></label>
                            <input type="text" id="first_name" name="name" placeholder="Họ tên của bạn" class="form-control">
                            <div class="error" id="name_error"><?php echo form_error("name")?></div>
                        </div>
                        <div class="col_full">
                            <label for="register-form-email">Email:<span class="require_symbol">*</span></label>
                            <input type="text" id="register-form-email" name="email" value="<?php echo set_value('email')?>" class="form-control" placeholder="Nhập email">
                            <div class="error" id="email_error"><?php echo form_error("email")?></div>
                        </div>
                        <div class="col_full">
                            <label for="first_name">Số điện thoại:<span class="require_symbol">*</span></label>
                            <input type="text" id="first_name" name="phone" placeholder="Số điện thoại" class="form-control" value="">
                            <div class="error" id="name_error"><?php echo form_error("phone")?></div>
                        </div>
                        <div class="col_full">
                            <label for="first_title">tiêu đề:<span class="require_symbol">*</span></label>
                            <input type="text" id="first_name" name="title" value="<?php echo set_value('title')?>" class="form-control" placeholder="Tên tiêu đề">
                            <div class="error" id="title_error"><?php echo form_error("title")?></div>
                        </div>
                        <div class="col_full">
                            <label for="first_title">Nội dung:<span class="require_symbol">*</span></label>
                            <textarea class="form-control" rows="5" name="content"></textarea>
                            <div class="error" id="content_error"><?php echo form_error("content")?></div>
                        </div>
                        <div class="col_full nobottommargin">
                            <button class="button button-3d button-black nomargin" id="register-form-submit"  type="submit" style="margin-bottom: 20px">Gửi Yêu Cầu</button>
                        </div>
                    </form>


                </div>
            </div>
            <div class="col-md-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11083.26477810041!2d106.78299037810392!3d10.847552088703457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752772b245dff1%3A0xb838977f3d419d!2zSOG7jWMgVmnhu4duIEPDtG5nIE5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5nIEPGoSBT4bufIDI!5e0!3m2!1svi!2s!4v1531493986285"
                        width="500" height="450" frameborder="0" style="border:0; margin-top: 95px; padding-left: 50px" allowfullscreen ></iframe>
            </div>

            <div>
            </div>
        </div>

    </section>
