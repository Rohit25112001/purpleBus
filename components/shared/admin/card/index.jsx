import {Row,Col,Image} from "antd";
const Card = ({data})=>{
    return(
        <Row>
            {
                data.map((productItem,productIndex)=>{
                    <h1>{productItem.productName}</h1>
                })
            }
        </Row>
    );
}
export default Card;