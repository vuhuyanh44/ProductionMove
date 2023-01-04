import './statistical.css';
import Sidebar from "../sidebar/sidebar";
import Navbar from "../../../../components/navbar/navbar";
import BarChart from "../../../../components/charts/barChart/barChart";
import PieChart from "../../../../components/charts/pieChart/pieChart";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Statistical() {
    const ManufactureFactory = "Cơ sở sản xuất";
    const ServiceCenter = "Trung tâm bảo hành";
    const Distributor = "Đại lý";
    const productStatis = "Thống kê theo trạng thái của tất cả sản phẩm";
    const datakey1 = "chiếc"
    const datakey2 = "phần trăm"

    const dataKeyProduct = "grossProduct";
    const dataKeyProductLine = "grossProductLine";

    const [dataManufacture, setDataManufacture] = useState([]);
    var dataProduct = [
        { name: "Vios", "chiếc": 7 },
        { name: "Fortuner", "chiếc": 6 },
        { name: "Raize", "chiếc": 5 },
        { name: "Altis", "chiếc": 13 },
        { name: "Camry", "chiếc": 5 },
        { name: "Yaris", "chiếc": 6 },
    ]
    console.log(dataManufacture);

    const dataStatisManufacture = [
        { name: "Đại lí 1", "chiếc": 50 },
        { name: "Đại lí 2", "chiếc": 28 },
        { name: "Đại lí 3", "chiếc": 35 },
        { name: "Đại lí 4", "chiếc": 19 },
        { name: "Đại lí 5", "chiếc": 41 },
    ];
    const dataDistributor = [
        { name: "Vios", "phần trăm": 3 },
        { name: "Fortuner", "phần trăm": 6 },
        { name: "Raize", "phần trăm": 5 },
        { name: "Altis", "phần trăm": 1 },
        { name: "Camry", "phần trăm": 2 },
        { name: "Yaris", "phần trăm": 6 },
    ];
    const dataServiceCenter = [
        { name: "Đại lí 1", "phần trăm": 5 },
        { name: "Đại lí 2", "phần trăm": 2 },
        { name: "Đại lí 3", "phần trăm": 3 },
        { name: "Đại lí 4", "phần trăm": 1 },
        { name: "Đại lí 5", "phần trăm": 4 },
    ];

    return (
        <div className="statistical">
            <Sidebar />
            <div className="wrapper">
                <Navbar />
                <div className="mainStatistical">
                    <BarChart
                        {...{
                            title: "Số xe đã bảo hành thành công",
                            data: dataProduct,
                            dataKey: datakey1,
                        }}
                    />
                    <BarChart
                        {...{
                            title: "Tỉ lệ bị lỗi theo dòng xe",
                            data: dataDistributor,
                            dataKey: datakey2,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
