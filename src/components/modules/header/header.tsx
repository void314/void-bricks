'use client';

import { useEffect, useState } from 'react';

import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { ThemeSwitcher } from '../theme-switcher';

// import { useCart } from './cart-provider';

export const Header = () => {
    // const { cart } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // const cartItemCount = mounted ? cart.reduce((total, item) => total + item.quantity, 0) : 0;
    const cartItemCount = 0;

    return (
        <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-20 w-full border-b backdrop-blur">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2 md:gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <nav className="mt-8 flex flex-col gap-4">
                                <Link href="/" className="text-lg font-semibold">
                                    Home
                                </Link>
                                <Link href="/products" className="text-lg font-semibold">
                                    Products
                                </Link>
                                <Link href="/categories" className="text-lg font-semibold">
                                    Categories
                                </Link>
                                <Link href="/about" className="text-lg font-semibold">
                                    About
                                </Link>
                                <Link href="/contact" className="text-lg font-semibold">
                                    Contact
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold">ModernShop</span>
                    </Link>
                </div>
                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="/" className="text-sm font-medium">
                        Home
                    </Link>
                    <Link href="/products" className="text-sm font-medium">
                        Products
                    </Link>
                    <Link href="/categories" className="text-sm font-medium">
                        Categories
                    </Link>
                    <Link href="/about" className="text-sm font-medium">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-2">
                    {isSearchOpen ? (
                        <div className="flex items-center">
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-[200px] md:w-[300px]"
                                autoFocus
                            />
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                                <span className="sr-only">Close search</span>
                                &times;
                            </Button>
                        </div>
                    ) : (
                        <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                    )}
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/wishlist">
                            <Heart className="h-5 w-5" />
                            <span className="sr-only">Wishlist</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="/account">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" className="relative" asChild>
                        <Link href="/cart">
                            <ShoppingCart className="h-5 w-5" />
                            {cartItemCount > 0 && (
                                <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs">
                                    {cartItemCount}
                                </span>
                            )}
                            <span className="sr-only">Cart</span>
                        </Link>
                    </Button>
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};
