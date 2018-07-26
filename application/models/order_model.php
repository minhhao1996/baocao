<?php
/**
 * Created by PhpStorm.
 * User: MyPC
 * Date: 21/07/2018
 * Time: 9:18 CH
 */
class order_model extends MY_Model{
    var  $table = 'order';


    public function getListDetail($id){
        return $this->db->select('*')
            ->where(array('transcton.id' => $id))
            ->from($this->order)
            ->join($this->product,'product.id = orders.id_product')
            ->get()->result_array();
    }

}