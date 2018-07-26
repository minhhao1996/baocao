<?php

/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 29/06/2018
 * Time: 4:51 CH
 */
class MY_controller extends CI_Controller
{
    public $data = array();

    public function __construct()
    {
        //kê thừa từ CI contronler
        parent::__construct();

        $controller = $this->uri->segment(1);
        switch ($controller) {
            case 'admin':
                {
                    $this->load->helper('admin');
                    $this->_check_login();
                    //kiem tra xem thanh vien da dang nhap hay chua
                    $admin_id_login = $this->session->userdata('admin_id_login');
                    $this->data['admin_id_login'] = $admin_id_login;
                    //neu da dang nhap thi lay thong tin cua Admin
                    if($admin_id_login)
                    {
                        $this->load->model('admin_model');
                        $admin_info = $this->admin_model->get_info($admin_id_login);
                        $this->data['admin_info'] = $admin_info;
                    }
                    break;

                }
            default :
                {
                    //xủ lý bên ngoài
                    // Lấy danh sách danh mục
                    $this->load->model('catalog_model');
                    $this->load->model('product_model');
                    $input = array();
                    $input['where'] = array('parent_id' => 0);
                    $catalog_list = $this->catalog_model->get_list($input);

                    foreach ($catalog_list as $row) {
                        $input['where'] = array('parent_id' => $row->id);
                        $sub = $this->catalog_model->get_list($input);
                        $row->subs = $sub;
                    }
                    $this->data['catalog_list'] = $catalog_list;

                    // lấy số tổng sản phẩm trong giỏ hàng
                    $this->load->library('cart');
                    $this->data['total_items'] = $this->cart->total_items();

                    //kiem tra xem thanh vien da dang nhap hay chua
                    $user_id_login = $this->session->userdata('user_id_login');
                    $this->data['user_id_login'] = $user_id_login;
                    //neu da dang nhap thi lay thong tin cua thanh vien
                    if($user_id_login)
                    {
                        $this->load->model('user_model');
                        $user_info = $this->user_model->get_info($user_id_login);
                        $this->data['user_info'] = $user_info;
                    }

                }

        }
    }

    private function _check_login()
    {
        $controller = $this->uri->rsegment('1');
        $controller = strtolower($controller);
        //nếu chưa đang nhập thì chỉ cho phép truy cập vào trang login;
        $login = $this->session->userdata('login');
        if (!$login && $controller != 'login') {

            redirect(admin_url('login'));
        }

        return true;

        // kiem tra ad nao dang nhap.

    }
}
