function Drawer({onClose, onRemove, items = [] }) {
    return (    
        <div className="overlay">
            <div  className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Basket
                    <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close"/>
                </h2>
                
                <div className="items">
                   {
                    items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{backgroundImage: `url(${obj.imageUrl})`}}
                                className='cartItemImg'></div>
                            
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} Rub.</b>
                            </div> 
                            <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                        </div>   
                    ))}
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                        <span>Total:</span>
                        <div></div>
                        <b>21 498 rub. </b>
                        </li>
                        <li>
                        <span>Tax 5%:</span>
                        <div></div>
                        <b>1074 rub.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Checkout
                        <img src="/img/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;