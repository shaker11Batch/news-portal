import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"


const Navbar = () => {
    return (
        <header className="py-4 shadow-md">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* logo */}
                <div className="text-xl font-bold">
                    <Link href="/">
                        Daily News
                    </Link>
                </div>

                {/* desktop menu  */}

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>                      <NavigationMenuLink href="/news">News</NavigationMenuLink>
                        </NavigationMenuItem>
                       <NavigationMenuLink href="/services">
                       <NavigationMenuItem>
                            <NavigationMenuTrigger >Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Web Development</NavigationMenuLink>
                                <NavigationMenuLink>Web Development</NavigationMenuLink>
                                <NavigationMenuLink>Web Development</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                       </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>


                {/* color swtcher and login button  */}
            </nav>
        </header>
    )
}

export default Navbar
