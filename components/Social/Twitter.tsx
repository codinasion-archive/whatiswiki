import { FaTwitter } from "react-icons/fa";

import Link from "@/components/Link";

import { SiteMetadata } from "@/data";

export default function Twitter() {
  return (
    <>
      <Link
        href={SiteMetadata.twitter_url}
        externalIcon={false}
        className="text-2xl mx-1"
      >
        <FaTwitter />
      </Link>
    </>
  );
}
