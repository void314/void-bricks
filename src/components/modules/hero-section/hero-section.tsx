import React from 'react';

import { ShoppingBag } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const HeroSection = () => {
    return (
        <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Discover Quality Products for Your Lifestyle
                            </h1>
                            <p className="text-muted-foreground max-w-[600px] md:text-xl">
                                Shop our curated collection of premium products designed to enhance your everyday life.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/products">
                                <Button size="lg" className="gap-1">
                                    <ShoppingBag className="h-5 w-5" />
                                    Shop Now
                                </Button>
                            </Link>
                            <Link href="/categories">
                                <Button size="lg" variant="outline">
                                    Browse Categories
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/placeholder.svg?height=550&width=550"
                            alt="Hero Image"
                            width={550}
                            height={550}
                            className="rounded-xl object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
