import SocialAccountButton from "@/components/contact/social-account-button";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as AvatarWrapper,
} from "@/components/ui/avatar";
import Card from "@/components/ui/card";
import { socialConfigs } from "@/config/social";
import { Metadata } from "next";
import NewsletterForm from '../../../components/home/optin-form';


export const metadata: Metadata = {
  title: "Pantaleone.net | Contact Us",
};

export default async function ContactPage() {
  const title = "Contact";
  const description = "Let's Connect!";
  const imageUrl = "favicons/android-chrome-192x192.png";
  const imageAlt = "Avatar";
  const initials = "MP";
  return (
    <Card>
      <div className="mx-auto py-6 sm:py-8">
        <div>
          <div className="text-center">
            <AvatarWrapper className="mx-auto size-24 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
              <AvatarImage src={imageUrl} alt={imageAlt} />
              <AvatarFallback>{initials}</AvatarFallback>
            </AvatarWrapper>
            <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-zinc-400">
              {title}
            </h1>
            <NewsletterForm />
            <p className="mt-2 text-base text-gray-600 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </div>
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {socialConfigs.map((item, index) => (
            <li key={index}>
              <SocialAccountButton social={item} />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
