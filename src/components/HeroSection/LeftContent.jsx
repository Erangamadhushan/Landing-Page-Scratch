import React from 'react'
import { ArrowRight } from "lucide-react";
import { Button } from 'primereact/button';

export const LeftContent = () => {
    return (
        <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="pl-8">
                <p className="text-primary text-lg mb-4">Interior Design Agency</p>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                    We create more
                    <br />
                    <span className="text-primary">than just Interior.</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
                </p>
                <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 text-base"
                >
                    Know more
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
