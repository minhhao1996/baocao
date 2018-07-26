
<html>
<head>
    <?php $this->load->view('site/head',$this->data); ?>
</head>
<body>


<div class="wraper">
    <div class="header">
        <?php  $this->load->view('site/header')?>
    </div>
    <div id="container">
        <?php $this->load->view('admin/message') ?>
        <div class="content">
            <?php $this->load->view($temp) ?>
        </div>
    </div>
    <div class="footer">
        <?php  $this->load->view('site/footer')?>
    </div>
</div>

</body>
</html>
