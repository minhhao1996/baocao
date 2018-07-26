<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 29/06/2018
 * Time: 6:12 CH
 */
Class Home extends MY_controller{
    function index(){
        $this->data['temp']= 'admin/home/index';
        $this->load->view('admin/main',$this->data);

    }
}