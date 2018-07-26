<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 05/07/2018
 * Time: 8:31 CH
 */
class Home extends MY_controller{
    function index(){
        //lay danh sach slide
        $this->load->model('slide_model');
        $slide = $this->slide_model->get_list();
        $this->data['slide_list'] = $slide;

        //lay danh sach san pham moi
        $this->load->model('product_model');
        $input['order'] = array();
        $input['limit'] = array(6, 0);
        $product_new = $this->product_model->get_list($input);
        $this->data['product_new'] = $product_new;


        // lấy danh sách sản phẩm mua nhiều
        $input['order'] = array('buyed', 'DESC');
        $product_buy = $this->product_model->get_list($input);
        $this->data['product_buy']  = $product_buy;



        // lấy danh sách sản phẩm thuộc thư mục cha
        $i =0;
        $dk['where']= array('parent_id'=>$i);
        $catalog_sdt = $this->catalog_model->get_list($dk);

        $catalog_subs_id = array();
        foreach ($catalog_sdt as $row)
        {
            $catalog_subs_id[] = $row->id;
        }
        //lay tat ca san pham thuoc cac danh mục con do
        $this->db->where_in('catalog_id', $catalog_subs_id);

        $product_sdt = $this->product_model->get_list($catalog_subs_id);
        $this->data['product_sdt']  = $product_sdt;











        //lay nội dung của biến message
        $message = $this->session->flashdata('message');
        $this->data['message'] = $message;

        $this->data['temp'] = 'site/home/index';
        $this->load->view('site/layout', $this->data);
    }
}