<div class="container">
    <div class="form-group" style="padding-left: 10%; color: black; ">
        <form  action="" method="post" enctype="multipart/form-data" >
            <div class="form-group row">
                <label for="inputtext" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input type="text" readonly class="form-control" name="email" value="<?php echo $user->email?>">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputtext" class="col-sm-2 col-form-label">Họ tên:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="name" value="<?php echo $user->name?>">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputtext" class="col-sm-2 col-form-label">Địa chỉ:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="address" value="<?php echo $user->address?>">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputtext" class="col-sm-2 col-form-label">Số điện thoại:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" name="phone"value="<?php echo $user->phone?>">
                </div>
            </div>
            <div style="padding-left: 16%"  >
                <button  type="submit" style="color: white ; border:solid 1px; width: 25%;height: 5%; background-color: #00CC00;  ">
                  <strong> EDIT </strong>
                </button>

            </div>
        </form>
    </div>

</div>
