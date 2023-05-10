import Image from "@/components/Image";
import Link from "@/components/Link";

import SponsorImage from "@/public/sponsor.png";

export default function Sponsor() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/harshraj8843?frequency=one-time"
        externalIcon={false}
        className="mt-1 p-[2px] rounded-lg border border-transparent bg-origin-border bg-gradient-to-r from-red-500 to-blue-500"
      >
        <div className="p-3 rounded-lg bg-white dark:bg-gray-800">
          <div className="flex justify-center">
            <Image src={SponsorImage} alt="Sponsor" width={200} height={200} />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Sponsor</h1>
            <p className="text-lg">Sponsor us on GitHub</p>
          </div>
        </div>
      </Link>
    </>
  );
}
