import React from "react";
import Nav from "./Nav";

function Home({Toggle}){
    return (
        <div className="px-3">
            <Nav Toggle={Toggle}/>
            <div className="container-fluid">
                <div className="row g-3 my-2">
                    <div className="col-md-3 ">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">240</h3>
                                <p className="fs-5">products</p>
                            </div>
                            <i className="bi bi-cart-plus p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">1888</h3>
                                <p className="fs-5">delivery</p>
                            </div>
                            <i className="bi bi-truck p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">20000</h3>
                                <p className="fs-5">sales</p>
                            </div>
                            <i className="bi bi-currenncy-dollar p-3 fs-1"></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2">20%</h3>
                                <p className="fs-5">increase</p>
                            </div>
                            <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table caption-top bg-white rounded mt-2">
                <caption className="text-white fs-4"> Recent orders</caption>
                <thead>
                    <tr>
                        <th scope="col">$</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>mark</td>
                        <td>mazzu</td>
                        <td>yougus</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>walter</td>
                        <td>tugume</td>
                        <td>nathen</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>shak</td>
                        <td>jesca</td>
                        <td>shavin</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Home;