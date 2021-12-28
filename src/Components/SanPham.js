


import React from "react";
import '../Styles/SanPham.css';

class SanPham extends React.Component{
    render(){
        const {item} = this.props;
        return(
            <div className = "SanPham">
                <div className = "DoDaiSanPham">
                    <img src = {item.picture}/>
                    <div className = "ThongTinSanPham">
                        <h1 className = "TenSanPham"> {item.content}</h1>
                        <h1 className = "GiaSanPham">{item.cost}</h1>
                    </div>
                </div>
                
                
            </div>
        );
    }
}
export default SanPham;