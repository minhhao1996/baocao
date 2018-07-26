<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 23/07/2018
 * Time: 9:51 CH
 */
class Transaction extends MY_controller{
    function __construct()
    {
        parent::__construct();
        //load ra file model
        $this->load->model('transaction_model');
    }

    /*
     * Hien thi danh sach gao dich
     */
    function index()
    {
        //lay tong so luong ta ca cac gao dich trong websit
        $total_rows = $this->transaction_model->get_total();
        $this->data['total_rows'] = $total_rows;

        //load ra thu vien phan trang
        $this->load->library('pagination');
        $config = array();
        $config['total_rows'] = $total_rows;//tong tat ca cac gao dich tren website
        $config['base_url']   = admin_url('transaction/index'); //link hien thi ra danh sach gao dich
        $config['per_page']   = 5;//so luong gao dich hien thi tren 1 trang
        $config['uri_segment'] = 4;//phan doan hien thi ra so trang tren url
        $config['next_link']   = 'Trang kế tiếp';
        $config['prev_link']   = 'Trang trước';
        //khoi tao cac cau hinh phan trang
        $this->pagination->initialize($config);

        $segment = $this->uri->segment(4);
        $segment = intval($segment);

        $input = array();
        $input['limit'] = array($config['per_page'], $segment);

        //kiem tra co thuc hien loc du lieu hay khong
        $id = $this->input->get('id');
        $id = intval($id);
        $input['where'] = array();
        if($id > 0)
        {
            $input['where']['id'] = $id;
        }

        //lay danh sach san pha
        $list = $this->transaction_model->get_list($input);
        $this->data['list'] = $list;


        //lay nội dung của biến message
        $message = $this->session->flashdata('message');
        $this->data['message'] = $message;

        //load view
        $this->data['temp'] = 'admin/transaction/index';
        $this->load->view('admin/main', $this->data);
    }
    /*
    * Xoa du lieu
    */
    function del()
    {
        $id = $this->uri->rsegment(3);
        $this->_del($id);
    }

    /*
     * Xóa nhiều sản phẩm
     */
    function delete_all()
    {
        $ids = $this->input->post('ids');
        foreach ($ids as $id)
        {
            $this->_del($id);
        }
    }

    /*
     *Xoa giao dich
     */
    private function _del($id)
    {
        $transaction = $this->transaction_model->get_info($id);
        if(!$transaction)
        {
            //tạo ra nội dung thông báo
            $this->session->set_flashdata('message', 'không tồn tại sản phẩm này');
            redirect(admin_url('transaction'));
        }
        //thuc hien xoa giao dich
        $this->transaction_model->delete($id);
        $this->session->set_flashdata('message', 'Xóa thành công !!');
        redirect(admin_url('transaction'));
    }
    public function status($id)
    {

        $this->data['temp'] = 'admin/transaction/index';
        $this->load->view('admin/main', $this->data);

    }
}