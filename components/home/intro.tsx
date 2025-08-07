"use client";

import Card from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";


interface Props {
  className?: string;
}

const Intro = ({ className }: Props) => {
  return (
          <div className="mx-auto mt-8 max-w-2xl px-6 text-center md:px-2 lg:px-2">
            <h2 className="text-accent-foreground mb-4 text-2xl font-bold sm:text-3xl">
              How We Help Your Teams
            </h2>
            <div className="text-foreground space-y-6 text-lg leading-8">
              <p className="text-foreground text-md text-center sm:text-left sm:text-lg">
                We design the autonomous core that replaces your broken workflows, redundant vendors, and manual processes.
This isn&apos;t just automation; it&apos;s the intelligent engine that runs your business.

              </p>

                          <h4 className="tracking-tight text-accent-foreground mb-4 text-xl font-bold sm:text-2xl">
              Some of our AI and Automation Services
            </h4>
                <Card className="text-foreground text-md p-2 text-center sm:text-left sm:text-lg">  AI vision & strategy definition </Card>
                <Card className="text-foreground text-md p-2 text-center sm:text-left sm:text-lg"> AI model training and customization</Card>
                <Card className="text-foreground text-md p-2 text-center sm:text-left sm:text-lg"> Workflow design & process automation</Card>
                <Card className="text-foreground text-md p-2 text-center sm:text-left sm:text-lg"> Agency & vendor rationalization</Card>
                <Card className="text-foreground text-md p-2 text-center sm:text-left sm:text-lg"> Business, technology & marketing consulting</Card>
            
            </div>
          </div>
  );
};

export default Intro;