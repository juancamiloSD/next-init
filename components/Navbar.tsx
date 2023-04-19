import style from './style.module.css'
import { ActiveLink } from "./ActiveLink"

export const Navbar = () => {

  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
  ];

  return (
    <>
        <nav className={ style.menuContainer }>
            {
              menuItems.map( ({ text, href }) => {
                return <ActiveLink key={ href } text={ text } href={ href }/>
              })
            }
        </nav>
    </>
  )
}
