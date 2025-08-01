import { mdxComponents } from "@/components/mdx/mdx-components";
import Card from "@/components/ui/card";
import { getPageBySlug } from "@/lib/mdx";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Fragment } from "react";


export const metadata: Metadata = {
  title: "Pantaleone.net | Terms of Use",
};

export default async function TermsPage() {
  const { content, data } = getPageBySlug("terms");

  return (
    <Fragment>
      <Card className="pb-2">
        <div className="relative mx-auto flex max-w-3xl flex-col text-pretty px-8 pb-6 pt-4 sm:px-14">
          <div className="flex items-center justify-start">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white/90">
              {data.title}
            </h1>
          </div>
          <article id="about-me" className="mt-2">
            <MDXRemote source={content} components={mdxComponents} />
            
          </article>
        </div>
      </Card>
    </Fragment>
  );
}
