<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 29/06/2018
 * Time: 4:55 CH
 */
    Class Login extends MY_controller{
        function index(){
            $this->load->library('form_validation');
            $this->load->helper('form');

            if($this->input->post()){
                $this->form_validation->set_rules('login','login','callback_check_login');
                if($this->form_validation->run()){
                    $this->session->set_userdata('login',true);
                    // lay name admin dang nhap luu vao session
                    $admin =$this->_get_admin_info();
                    // gắn seesion id
                    $this->session->set_userdata('admin_id_login',$admin->id);
                    redirect(admin_url('home'));
                }
            }
            $this->load->view('admin/login/index');
        }
        // kiêm tra user name vs password
        function check_login(){
            $admin =$this->_get_admin_info();
            if($admin){

                return true;

            }
             $this->form_validation->set_message(__FUNCTION__,'Kiểm tra lai thông tin');
            return false;
        }
        private function _get_admin_info(){
            $username =$this->input->post('username');
            $pass = $this->input->post('password');
            $pass = md5($pass);
            $this->load->model('admin_model');
            $where = array('username'=>$username, 'password'=>$pass);
            $admin =$this->admin_model->get_info_rule($where);
            return $admin;
        }

    }
