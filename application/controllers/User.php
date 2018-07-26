<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 20/07/2018
 * Time: 12:58 CH
 */
class User extends MY_controller{
    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
        $this->load->model('product_model');
        $this->load->model('transaction_model');
    }
    /***
     * Đăng ký
     */
    function check_email() {
        $email = $this->input->post('email');
        $where= array('email'=>$email);
        // nếu email lấy ra trùng với username trong csdl thì trả về false
        if($this->user_model->check_exists($where)){
            $this->form_validation->set_message(__FUNCTION__,'Email đã tồn tại');
            return false;
        }
        return true;
    }
    // tạo tài khoản .
    function register(){
        $this->load->library('form_validation');
        $this->load->helper('form');

        // nếu có dữ liệu lên thì kt
        if($this->input->post()){
            $this->form_validation->set_rules('email','Email','required|valid_email|callback_check_email');
            $this->form_validation->set_rules('password','Password', 'required|min_length[1]');
            $this->form_validation->set_rules('re_password','Request password','required|matches[password]');
            $this->form_validation->set_rules('name','Name','required|min_length[6]');
            $this->form_validation->set_rules('address','Address','required|min_length[6]');
            $this->form_validation->set_rules('phone','Phone','required|min_length[9]');
            if($this->form_validation->run()){
                $email = $this->input->post('email');
                $password = $this->input->post('password');
                $name = $this->input->post('name');
                $address = $this->input->post('address');
                $phone = $this->input->post('phone');

                $data = array('email'=>$email,
                    'password'=> md5($password),
                    'name'=>$name,
                    'address'=>$address,
                    'phone'=>$phone,
                    'created'=>now());


                if ($this->user_model->create($data)) {
                    // tạo ra nội dung thông báo.
                    $this->session->set_flashdata('message','Đăng ký thành  viên  thành công');
                } else {
                    $this->session->set_flashdata('message','Đăng ký thành  viên thất bại');
                }
                redirect(site_url('user/login'));

            }


        }
        $this->data['temp']= 'site/user/register';
        $this->load->view('site/layout',$this->data);
    }
    /*
    * Kiem tra đăng nhập
    */
    function login()
    {
        //neu dang dang nhap thi chuyen ve trang thong tin thanh vien
        if($this->session->userdata('user_id_login'))
        {
            redirect(site_url('user'));
        }

        $this->load->library('form_validation');
        $this->load->helper('form');

        if($this->input->post())
        {
            $this->form_validation->set_rules('email', 'Email đăng nhập', 'required|valid_email');
            $this->form_validation->set_rules('password', 'Mật khẩu', 'required|min_length[1]');
            $this->form_validation->set_rules('login' ,'login', 'callback_check_login');
            if($this->form_validation->run())
            {
                //lay thong tin thanh vien
                $user = $this->_get_user_info();
                //gắn session id của thành viên đã đăng nhập
                $this->session->set_userdata('user_id_login', $user->id);
                redirect();
            }
        }

        //hiển thị ra view

        $this->data['temp'] = 'site/user/login';
        $this->load->view('site/layout', $this->data);
    }
    /*
     * Kiem tra email va password co chinh xac khong
     */
    function check_login()
    {
        $user = $this->_get_user_info();
        if($user)
        {
            return true;
        }
        $this->form_validation->set_message(__FUNCTION__, ' đăng nhập thành công');
        return false;
    }

    /*
     * Lay thong tin cua thanh vien
     */
    private function _get_user_info()
    {
        $email = $this->input->post('email');
        $password = $this->input->post('password');
        $password = md5($password);

        $where = array('email' => $email , 'password' => $password);
        $user = $this->user_model->get_info_rule($where);
        return $user;
    }
    /***
     * Logout
     */
    function logout(){

        if($this->session->userdata('user_id_login'))
        {
            $this->session->unset_userdata('user_id_login');
        }
        redirect();
        $carts = $this->cart->contents();
        $this->data['carts']=$carts;
        $this->cart->destroy();
    }
    /**
     * Thong tin user
     */
    function index(){
        if(!$this->session->userdata('user_id_login')){
            $this->seesion->unset_userdata(user_id_login);
        }
        $user_id = $this->session->userdata('user_id_login');
        $user = $this->user_model->get_info($user_id);
        if (!$user){
            redirect();
        }
        $this->data['user'] = $user;
        /***
         * lấy thông tin đơn hàng của user
         */
        $this->load->model('transaction_model');
        $input['where']= array('user_id'=>$user_id);
        $transaction = $this->transaction_model->get_list($input);
        $this->data['transaction'] = $transaction;


        // hiển thi ra view
        $this->data['temp']= 'site/user/index';
        $this->load->view('site/layout',$this->data);
    }
    function info_order(){

        // hiển thi ra view

        $id = $this->uri->rsegment(3);

        $this->load->model('transaction_model');
        $input['where']= array('id'=>$id);
        $transaction = $this->transaction_model->get_list($input);
        $this->data['transaction']= $transaction;
        //lay tat ca san pham thuoc cac danh mục con do




        $this->db->select('*');
        $this->db->from('transaction');
        $this->db->where(array('transaction.id' => $id));
        $this->db->join('order', 'transaction.id = order.id_transaction');
        $this->db->join('product', 'order.id_product = product.id');
        $query = $this->db->get();
        $this->data['query'] = $query;






        $this->data['temp']= 'site/user/info_order';
        $this->load->view('site/layout',$this->data);
        }

    /**
     * Edit thông tin user
     */
    function edit(){
        $user_id = $this->session->userdata('user_id_login');
        $user = $this->user_model->get_info($user_id);
        $this->data['user']=$user;

        $this->load->library('form_validation');
        $this->load->helper('form');

        // nếu có dữ liệu lên thì kt
        if($this->input->post()){

            $this->form_validation->set_rules('name','Name','required|min_length[6]');
            $this->form_validation->set_rules('address','Address','required|min_length[6]');
            $this->form_validation->set_rules('phone','Phone','required|min_length[9]');
            if($this->form_validation->run()){
                $email = $this->input->post('email');
                $name = $this->input->post('name');
                $address = $this->input->post('address');
                $phone = $this->input->post('phone');

                $data = array('email'=>$email,
                    'name'=>$name,
                    'address'=>$address,
                    'phone'=>$phone);

                if ($this->user_model->update($user_id,$data)) {
                    // tạo ra nội dung thông báo.
                    $this->session->set_flashdata('message','Đăng ký thành  viên  thành công');
                } else {
                    $this->session->set_flashdata('message','Đăng ký thành  viên thất bại');
                }
                redirect(site_url('user/index'));

            }

        }
        $this->data['temp']= 'site/user/edit';
        $this->load->view('site/layout',$this->data);
    }

}