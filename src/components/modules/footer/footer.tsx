import { Facebook, Instagram, Twitter } from 'lucide-react';

import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-background border-t">
            <div className="container px-4 py-8 md:px-6 md:py-12">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Shop</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/categories/electronics"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Electronics
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/categories/clothing"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Clothing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/categories/home-kitchen"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    Home & Kitchen
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">About</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Connect</h3>
                        <div className="mb-4 flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">Newsletter</h3>
                        <p className="text-muted-foreground mb-2 text-sm">
                            Subscribe to get special offers, free giveaways, and new product announcements.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ModernShop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
