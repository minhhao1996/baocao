<?php
/*
 * Lay ngay tu dang int
 * @$time : int - thoi gian muon hien thi ngay
 * @$full_time : cho biet co lay ca gio phut giay hay khong
 */
function get_date($time)
{
    $fomat = '%d-%m-%Y';
    $date = mdate($fomat , $time);
    return $date;
}