import '../App.css'
import Logo from '../assets/creeptar-high-resolution-logo-transparent.png'
import MenuBtn from '../assets/menu-alt-03.svg'

export default function Header() {


    return (
        <>
            <div className="header-container">
                <div>
                    <div className="app-menu">
                        <img src={MenuBtn} alt="Menu" />
                    </div>
                    <div className="app-logo">
                        <img src={Logo} alt="Menu" />
                    </div>
                </div>
            </div>
        </>
    )
}