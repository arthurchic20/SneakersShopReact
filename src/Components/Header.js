function Header(props) {
    return (   
        <header className="d-flex justify-between align-center p-40 ">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="Logo"/>
                <div>
                    <h3 className="text-uppercase"> React Sneakers</h3>
                    <p className="opacity-5">Shop of the best Sneakers</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="img/cart.svg" alt="Cart"/>
                    <span>1500 Rub.</span>
                </li>
                <li>
                    <img width={18} height={18} src="img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;