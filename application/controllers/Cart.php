<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 15/07/2018
 * Time: 9:52 CH
 */
class Cart extends  MY_controller{
    function __construct()
    {
        parent::__construct();
        $this->load->library('cart');

    }
    function add(){
        //lay ra san pham muon them vao gio hang
        $this->load->model('product_model');
        $id = $_POST['id'];
        $product = $this->product_model->get_info($id);

        if(!$product)
        {
            redirect();
        }
        //tong so san pham
        $qty = 1;
        $price = $product->price;
        if($product->discount > 0)
        {
            $price = $product->price - $product->discount;
        }

        //thong tin them vao gio hang
        $data = array();
        $data['id'] = $product->id;
        $data['qty'] = $qty;
        $data['name'] = url_title($product->name);
        $data['image_link']  = $product->image_link;
        $data['price'] = $price;
        $this->cart->insert($data);
        echo json_encode( $data );

        //chuyen sang trang danh sach san pham trong gio hang


    }

    //hien thị danh sách giỏ hàng
    function index(){
        // thông tin giỏ hàng
        $carts = $this->cart->contents();
        // tổng số sản phẩm trong giỏ hàng.
        $total_items = $this->cart->total_items();

        $this->data['carts'] = $carts;
        $this->data['total_items']  =$total_items;

        $this->data['temp']  ='site/cart/index';
        $this->load->view('site/layout', $this->data);

    }
    // cập nhật ssos lượng sản phẩm
    function update(){

        $id = $_POST['id'];
        $id = intval($id);
        $carts = $this->cart->contents();
        $total_qty = $this->input->post('sl');
        foreach ($carts as $key => $row)
        {
            //tong so luong san pham
            if($row['id'] == $id){
            $data = array();
            $data['rowid'] = $key;
            $data['qty'] = $total_qty;
            $this->cart->update($data);
                }
        }
        echo json_encode( $data );

        //chuyen sang trang danh sach san pham trong gio hang

    }
    function del(){
        $id = $_POST['id'];
        $id = intval($id);
        $carts = $this->cart->contents();
        foreach ($carts as $key => $row)
        {
            if($row['id'] == $id)
            {
                //tong so luong san pham
                $data = array();
                $data['rowid'] = $key;
                $data['qty'] = 0;
                $this->cart->update($data);
                $this->session->set_userdata('cart',$data);
                echo json_encode( $data );
            }

        }

    }


}