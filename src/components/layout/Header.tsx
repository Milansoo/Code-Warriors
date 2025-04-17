
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Bell,
  MessageSquare,
  HelpCircle,
  User,
  Home,
  Utensils,
  Building,
  HandHelping,
  BarChart,
  Info,
  Contact,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile();
  
  const MainNav = () => (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      <Link to="/" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><Home className="h-4 w-4" /> Home</span>
      </Link>
      <Link to="/donors" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><Utensils className="h-4 w-4" /> Donors</span>
      </Link>
      <Link to="/ngos" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> NGOs</span>
      </Link>
      <Link to="/volunteers" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><HandHelping className="h-4 w-4" /> Volunteers</span>
      </Link>
      <Link to="/tracking" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><BarChart className="h-4 w-4" /> Tracking</span>
      </Link>
      <Link to="/impact" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><Info className="h-4 w-4" /> Impact</span>
      </Link>
      <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
        <span className="flex items-center gap-1.5"><Contact className="h-4 w-4" /> Contact</span>
      </Link>
    </nav>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col space-y-4 pt-10">
          <Link to="/" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><Home className="h-4 w-4" /> Home</span>
          </Link>
          <Link to="/donors" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><Utensils className="h-4 w-4" /> Donors</span>
          </Link>
          <Link to="/ngos" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><Building className="h-4 w-4" /> NGOs</span>
          </Link>
          <Link to="/volunteers" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><HandHelping className="h-4 w-4" /> Volunteers</span>
          </Link>
          <Link to="/tracking" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><BarChart className="h-4 w-4" /> Tracking</span>
          </Link>
          <Link to="/impact" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><Info className="h-4 w-4" /> Impact</span>
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary px-2 py-1 rounded-md transition-colors">
            <span className="flex items-center gap-2"><Contact className="h-4 w-4" /> Contact</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <MobileNav />
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-500 rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-sm">LF</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">FoodShare</span>
          </Link>
        </div>
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>
          </div>
          <Button variant="outline" className="gap-1">
            <User className="h-4 w-4" /> 
            {!isMobile && <span>Sign In</span>}
          </Button>
        </div>
      </div>
    </header>
  );
}
