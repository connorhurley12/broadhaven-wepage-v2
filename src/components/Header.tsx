import { Building2 } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Building2 className="h-8 w-8 text-primary" />
          <span className="font-semibold text-xl">Broadhaven</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>What We Offer</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        to="/services"
                      >
                        <Building2 className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Technology Solutions
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Streamline your operations with custom-tailored tech solutions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem to="/services/automation" title="Process Automation">
                    Automate quoting, invoicing, and customer management
                  </ListItem>
                  <ListItem to="/services/crm" title="CRM Optimization">
                    Enhance customer relationships and service delivery
                  </ListItem>
                  <ListItem to="/services/mobile" title="Mobile Solutions">
                    Empower your mobile workforce with the right tools
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Our Process</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem to="/process#discovery" title="Discovery">
                    We analyze your business needs and pain points
                  </ListItem>
                  <ListItem to="/process#strategy" title="Strategy">
                    Develop a customized technology implementation plan
                  </ListItem>
                  <ListItem to="/process#implementation" title="Implementation">
                    Guide you through the entire transformation process
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem to="/about#team" title="Our Team">
                    Meet our experienced consultants
                  </ListItem>
                  <ListItem to="/about#mission" title="Our Mission">
                    Learn about our commitment to your success
                  </ListItem>
                  <ListItem to="/about#testimonials" title="Success Stories">
                    See how we've helped businesses like yours
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem to="/contact" title="Book a Consultation">
                    Schedule your free initial consultation
                  </ListItem>
                  <ListItem to="/assessment" title="Business Assessment">
                    Take our quick tech readiness assessment
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, to, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            to={to}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Header;