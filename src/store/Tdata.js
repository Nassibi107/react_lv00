export default function Tdata(props)
{
    return(
            <tr>
            <td>{props.product.id}</td>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <td>{props.product.description}ss</td>
            <td>{props.product.category}</td>
            <td><img width={250} src={props.product.image} alt={props.product.title}/></td>
            <td>{props.product.price}</td>
            <td><Rating rate={props.product.rating.rate}
            count={props.product.rating.count}/></td>
            </tr>
    )
}
export function Rating({count,rate})
{
    return <>
    <span className="badge badge-pill bg-primary">
        {count}
        /
        {rate}
    </span>
    </>
}
