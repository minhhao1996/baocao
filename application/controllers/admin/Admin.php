<?php


Class Admin extends MY_controller {
    function __construct()
    {
        parent::__construct();
        $this->load->model('admin_model');
    }
    // lấy danh sách admin_MD
     function index(){
        $input = array();
        $list = $this->admin_model->get_list($input);
        $this->data['list']=$list;

        $total = $this->admin_model->get_total($input);
        $this->data['total']=$total;
        // lấy ra nội dung của biến message
        $message= $this->session->flashdata('message');
        $this->data['message']= $message;

        $this->data['temp'] = 'admin/admin/index';
        $this->load->view('admin/main',$this->data);

    }

    //check username ton tại chưa
    function check_username() {
        $username = $this->input->post('username');
        $where= array('username'=>$username);
        // nếu username lấy ra trùng với username trong csdl thì trả về false
        if($this->admin_model->check_exists($where)){
            $this->form_validation->set_message(__FUNCTION__,'Tài Khoản đã tồn tại');
            return false;
        }
        return true;
    }
//    Thêm quản trị viên.
    function add(){
        $this->load->library('form_validation');
        $this->load->helper('form');

        // nếu có dữ liệu lên thì kt
        if($this->input->post()){

            $this->form_validation->set_rules('name','Name','required|min_length[6]');
            $this->form_validation->set_rules('username','User Name','required|callback_check_username');
              $this->form_validation->set_rules('password','Password', 'required|min_length[1]');
             $this->form_validation->set_rules('re_password','Request password','required|matches[password]');
            if($this->form_validation->run()){
                $name = $this->input->post('name');
                $username = $this->input->post('username');
                $password = $this->input->post('password');
                $data = array('name'=>$name,
                    'username'=>$username,
                    'password'=>md5($password));

                if ($this->admin_model->create($data)) {
                    // tạo ra nội dung thông báo.
                    $this->session->set_flashdata('message','Thêm thành công');
                } else {
                    $this->session->set_flashdata('message','Thêm thất bại');
                }
                redirect(admin_url('admin'));
            }


        }
        $this->data['temp'] = 'admin/admin/add';
        $this->load->view('admin/main',$this->data);

    }

    function edit(){
        $this->load->library('form_validation');
        $this->load->helper('form');

         $id = $this->uri->rsegment('3');
        $info = $this->admin_model->get_info($id);

        if(!$info){
            $this->form_validation->set_message(__FUNCTION__,'Tài Khoản Không tồn tại');
            redirect(admin_url('admin'));
        }
        $this->data['info']=$info;

        if($this->input->post()){
            $this->form_validation->set_rules('name','Name','required|min_length[6]');
            $this->form_validation->set_rules('username','User Name','required|callback_check_username');
            // kem tra co nhap pass k ,neu nhap thi cap nhat
            $password = $this->input->post('password');
            if($password){
                $this->form_validation->set_rules('password','Password', 'required|min_length[6]');
                $this->form_validation->set_rules('re_password','Request password','matches[password]');
            }

            if($this->form_validation->run()){
                $name = $this->input->post('name');
                $username = $this->input->post('username');


                $data = array('name'=>$name,
                    'username'=>$username);
                if ($password){
                    $data['password']=md5($password);
                }
                if ($this->admin_model->update($id,$data)) {
                    // tạo ra nội dung thông báo.
                    $this->session->set_flashdata('message','Cập nhật thành công');
                } else {
                    $this->session->set_flashdata('message','Cập nhật thất bại');
                }
                redirect(admin_url('admin'));
            }


        }
            $this->data['temp'] = 'admin/admin/edit';
        $this->load->view('admin/main',$this->data);
    }

    function del(){
        $id = $this->uri->rsegment('3');
        $id=intval($id); // ép kiểu dữ liệu
        //lấy thông tin qtv
        $info = $this->admin_model->get_info($id);
        if(!$info){
            $this->session->set_flashdata('message','Tài khoản QTV không tồn tại');
            redirect(admin_url('admin'));
        }
        $this->admin_model->delete($id,$info);

        $this->session->set_flashdata('message','Xóa quản trị viên thành công');
        redirect(admin_url('admin'));
    }

    // đăng xuất
    function  logout(){

        if($this->session->userdata('login'))
        {
            $this->session->unset_userdata('login');

        }
        redirect(admin_url('login'));
    }

  /*  function create()
    {
        $data = array();
        $data['username'] = 'admin_MD';
        $data['password'] = '1234';
        $data['name'] = 'hocphp';
        if ($this->admin_model->create($data)) {
            echo "Them thanh cong";
        } else {
            echo "Thất Bại";
        }
    }

    function update(){
        $id='8';
        $data=array();
        $data['username'] = 'admin2';
        $data['password'] = '12000045';
        $data['name'] = 'hahahha';
        if ($this->admin_model->update($id, $data)) {
            echo "Cập nhật thành công";
        }else{
            echo "Cập nhật thất bại";
        }
    }
    function delete(){
        $id='8';
        if ($this->admin_model->delete($id)) {
            echo "Xóa thành công";
        }else{
            echo "Xóa nhật thất bại";
        }
    }function get_info(){
        $id ='1';
        $info=$this->admin_model->get_info($id,'username,password');
        echo '<pre>';
        print_r ($info) ;
    }
    function  get_list(){ // lấy ra danh sách
        $input= array();
       // $input['where']= array('id'=>1);
       // $input['order'] = array('id','asc');
        //$input['limit'] = array(1,0);
         $input['like'] = array('name','mod');
        $list = $this->admin_model->get_list($input);
        echo '<pre>';
        print_r($list);

    }*/
}