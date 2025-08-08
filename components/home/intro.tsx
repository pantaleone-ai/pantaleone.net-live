"use client";

import Card from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Brain, Cpu, Workflow, PenTool, Briefcase } from "lucide-react";


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
              <p className="text-foreground text-md text-center font-bold sm:text-left sm:text-lg">
                We design the autonomous core that replaces your broken processes, redundant vendors, and disconnection across your company.
This isn&apos;t just automation; it&apos;s the intelligent engine that runs your business.

              </p>

                          <h4 className="tracking-tight text-accent-foreground mb-4 text-xl font-black sm:text-2xl">
              AI and Automation Services
            </h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="flex items-center text-foreground text-md p-2 text-center sm:text-left sm:text-lg">
                  <Brain className="h-6 w-6 text-primary mr-2" />
                  AI Vision & Strategy Definition
                </Card>
                <Card className="flex items-center text-foreground text-md p-2 text-center sm:text-left sm:text-lg">
                  <Cpu className="h-6 w-6 text-primary mr-2" />
                  AI Model Training and Customization
                </Card>
                <Card className="flex items-center text-foreground text-md p-2 text-center sm:text-left sm:text-lg">
                  <Workflow className="h-6 w-6 text-primary mr-2" />
                  Workflow Design & Process Automation
                </Card>
                <Card className="flex items-center text-foreground text-md p-2 text-center sm:text-left sm:text-lg">
                  <PenTool className="h-6 w-6 text-primary mr-2" />
                  Rapid Experience Design & Build
                </Card>
                <Card className="flex items-center text-foreground text-md p-2 text-center sm:text-left sm:text-lg">
                  <Briefcase className="h-6 w-6 text-primary mr-2" />
                  Business, Technology & Marketing Consulting
                </Card>
              </div>
            </div>
          </div>
  );
};

export default Intro;