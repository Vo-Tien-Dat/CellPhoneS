

import React from "react";
import '../Styles/TenVaDanhSachSanPham.css';
import './SanPham';
import SanPham from "./SanPham";
class TenVaDanhSachSanPham extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <div className = "TenVaDanhSachSanPham">
                <div className = "Ten">{item.name}</div>
                <div className = "DanhSachSanPham">
                    {
                        item.listproduct.map((item) => <SanPham item = {item}/>)    
                    }
                </div>
                <div className = "DanhSachSanPham">
                    {
                        item.listproduct.map((item) => <SanPham item = {item}/>)    
                    }
                </div>
            </div>
        )
    }
}
export default TenVaDanhSachSanPham;