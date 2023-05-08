import Image from "@/components/Image";
import Link from "@/components/Link";

import SponsorImage from "@/public/sponsor.png";

export default function Sponsor() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/harshraj8843?frequency=one-time"
        externalIcon={false}
      >
        <div className="border-2 border-gradient-r-blue-pink rounded-lg p-4 mt-1">
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
