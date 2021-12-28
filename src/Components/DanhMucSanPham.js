import React from "react";
import '../Styles/DanhMucSanPham.css';
import TenVaDanhSachSanPham from './TenVaDanhSachSanPham';
class DanhMucSanPham extends React.Component{
    constructor(){
        super();
        this.DanhMucSanPham = [
            {
                name:'ĐIỆN THOẠI NỔI BẬT NHẤT',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'LAPTOP',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'MÀN HÌNH, MÁY TÍNH ĐỂ BÀN',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'TABLET',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'ÂM THANH',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'ĐỒNG HỒ THÔNG MINH',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            },
            {
                name: 'NHÀ THÔNG MINH',
                listproduct : [
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                    {
                        picture:"https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
                        content: "sam sung",
                        cost: "15.000.000"
                    },
                ]
            }

        ]
    }
    render(){
        return(
            <div>
                {
                    this.DanhMucSanPham.map((item) => <TenVaDanhSachSanPham item = {item}/>)
                }
            </div>
        )
    }
}

export default DanhMucSanPham;