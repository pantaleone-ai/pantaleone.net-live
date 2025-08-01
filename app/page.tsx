import Profile from "@/components/home/main";
import ProjectItem from "@/components/project/main";
import { getAllProjectsFilteredByOrder } from "@/lib/mdx";
import { ProjectType } from "@/types";
import { Metadata } from "next";
import React, { Fragment } from "react";
// import NewsletterForm from '../components/home/optin-form';

export const metadata: Metadata = {
  title: "Pantaleone.net | Home",
};

export default async function HomePage() {
  const projects: ProjectType[] = await getAllProjectsFilteredByOrder({
    featured: true,
  });
  return (
    <Fragment>
      <Profile />
       {/* <NewsletterForm /> */}
      <section id="selected-projects" className="relative mb-10 mt-10">
        {projects.map((project, index) => (
          <Fragment key={index}>
            <ProjectItem project={project} />
            {projects.length !== index + 1 && (
              <div className="mx-auto my-6 size-10 text-center text-gray-300 dark:text-zinc-600" />
            )}
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
}
