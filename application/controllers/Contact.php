<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 13/07/2018
 * Time: 7:46 CH
 */
class  Contact extends MY_controller{
    function __construct()
    {
        parent::__construct();
        $this->load->model('contact_model');
    }

    function index(){

        $this->load->library('form_validation');
        $this->load->helper('form');

        // nếu có dữ liệu lên thì kt
        if($this->input->post()){
            $this->form_validation->set_rules('email','Email','required|valid_email');
            $this->form_validation->set_rules('name','Name','required|min_length[6]');
            $this->form_validation->set_rules('phone','Phone','required|min_length[9]');
            $this->form_validation->set_rules('title','Title','required|min_length[9]');
            $this->form_validation->set_rules('content','content','required|min_length[9]');

            if($this->form_validation->run()){
                $email = $this->input->post('email');
                $name = $this->input->post('name');
                $phone = $this->input->post('phone');
                $title = $this->input->post('title');
                $content = $this->input->post('content');

                $data = array(
                    'email'=>$email,
                    'name'=>$name,
                    'phone'=>$phone,
                    'title'=>$title,
                    'content'=>$content,
                    'created'=>now());
                if ($this->contact_model->create($data)) {
                    // tạo ra nội dung thông báo.
                    $this->session->set_flashdata('message','gửi yêu cầu  thành công');
                } else {
                    $this->session->set_flashdata('message','Gửi yêu cầu thất bại');
                }
                redirect();
            }

        }
        $this->data['temp'] = 'site/contact/index';
        $this->load->view('site/layout',$this->data);
    }

}