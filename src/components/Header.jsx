import {useLocation} from 'react-router-dom'
import {brainwave} from "../assets"
import {navigation} from "../constants"
import { Button } from './Button'
import MenuSvg from '../assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'

const Header = () => {
    const pathName = useLocation()
    // const [openNavigation, setOpenNavigation] = useState(false)
    return(
        <div className="fixed left-0 w-full top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-neutral-900 lg:bg-n-8/90 lg:backdrop-blur-sm" >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8 mt-2"  href="#hero">
                    <img src={brainwave} width={190} height={40} alt="" />
                </a>
                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                          <a href={item.url} key={item.id}
                            className={`block relative font-medium text-1xl uppercase text-white transition-colors hover:text-purple-600 ${item.onlyMobile ? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:-mr-0-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash ? "z-2 lg:text-white" : "lg:text-gray-400"} lg:leading-5 lg:hover:text-white xl:px-12`} >
                            {item.title}
                          </a>  
                        ))}
                    </div>
                </nav>
                <a href="#signup" className="button hidden mr-8 text-gray-400 transition-colors hover:text-white lg:block">
                    New Account
                </a>
                <Button className="hidden lg:flex" href="#login">
                    Sign Into Account
                </Button>
            </div>
        </div>
    )
}

export default Header;