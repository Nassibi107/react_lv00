
import "bootstrap/dist/css/bootstrap.css"
import {useState,useEffect } from "react"
import Tdata from "./Tdata";

export default function Prd()
{
    const [data,setData] = useState([]);
    const [cay,setCty] = useState([]);
    const [s,setS] = useState('electronics');
    const [daf,setDaf] = useState([]);
    const ft_getdata = () =>
    {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(response => setData(response));
    }
    const ft_getcat = () =>
    {
        fetch("https://fakestoreapi.com/products/categories")
        .then(response => response.json())
        .then(response => setCty(response));
    }
    useEffect(()=>{
        ft_getdata();
        ft_getcat();
    },[]);
    const hadnleSub = (e) =>
    {
        e.preventDefault();
        const srValue = document.querySelector("#sr").value;
        const cat_s = document.querySelector("#df").value;
        console.log(cat_s);
        setS(cat_s);
        setDaf(srValue);
    }
    const ft_showdata = () => {

        const product = data.filter ( p =>
        {
            return ( s && ( p.title.includes(daf)
                || p.id.toString().includes(daf)
                || p.description.includes(daf)))
        })
        if(product.length > 0)
        {
            return product.map((prd,key) => {
                return <Tdata product = {prd} key = {key} / > })
        }
        else
        {
            return <div className="alert alert-danger"> on item</div>
        }
   }
    return (
        <div className="container">
        <h2> Search :</h2>
       <form>
            <div className="form-group m-3">
                    <label>Search</label>
                    <input type="text"
                  className="form-control" id ="sr"  / >
                    <input type="submit" value='searsh'
              className="btn btn-outline-primary "  onClick={hadnleSub} />
            </div>

            <div class="btn-group" role="group" aria-label="Basic example">
            {
                cay.map((cat)=> {
                    return  <button type="button" class="btn btn-secondary" id = 'df'
                    onClick={hadnleSub}
                    >{cat}</button>
                })
            }
            </div>
        </form>
            <h1 className="h1 m-10">Product :</h1>
            <table className="table">
                <thead>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>descrption</th>
                    <th>categorie</th>
                    <th>imgage</th>
                    <th>price</th>
                    <th>rating</th>
                 </thead>
            <tbody>
              {ft_showdata()}
            </tbody>
            </table>
        </div>
    )
}


