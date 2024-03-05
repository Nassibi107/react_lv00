
import "bootstrap/dist/css/bootstrap.css"
import {useState,useEffect } from "react"
import Tdata from "./Tdata";

export default function Prd()
{
    const [data,setData] = useState([]);
    const ft_getdata = () =>
    {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => setData(response));
    }
    useEffect(()=>ft_getdata(),[])
    const ft_showdata = () => {
        return data.map((prd,key) => {
            return <Tdata product = {prd} key = {key} / >
    })
    }
    return (
        <div className="container">
            <h1>list of product :</h1>
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>descrption</th>
                    <th>categorie</th>
                    <th>imgage</th>
                    <th>price</th>
                 </tr>
              {  ft_showdata()}
            </table>
        </div>
    )
}

