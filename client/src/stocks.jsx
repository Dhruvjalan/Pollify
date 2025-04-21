import React from "react";

function Stocks({stockData,theme}) {
    // const stockData = [
    //     { name: "Apple", price: 150, change: "+2%"},
    //     { name: "Google", price: 2800, change: "-1.5%"},
    //     { name: "Amazon", price: 3400, change: "+0.8%"},
    //     { name: "Tesla", price: 900, change: "-3%"},
    // ];

    return (
        <div>
            <h5>Stocks</h5>
            <table border="0" style={{ borderCollapse:'collapse', width: "100%",alignSelf:'center'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map((stock, index) => (
                        <tr key={index} >
                            <td style={{borderBottom: `1px solid ${theme==='light'?'black':'white'}`, padding:'0 0.5rem',color:parseFloat(stock.change.replace('%', ''))>0?'green':'red'}}>{stock.name}</td>
                            <td style={{borderBottom: `1px solid ${theme==='light'?'black':'white'}`, padding:'0 0.5rem',color:parseFloat(stock.change.replace('%', ''))>0?'green':'red'}}>${stock.price}</td>
                            <td style={{borderBottom: `1px solid ${theme==='light'?'black':'white'}`, padding:'0 0.5rem',color:parseFloat(stock.change.replace('%', ''))>0?'green':'red'}}>{stock.change}</td>
                            {/* <hr/> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Stocks;