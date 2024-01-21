import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { numberWithCommas } from "@/lib/utils";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PersonalInfoProps {
  name: string;
  image: string;
  account: string;
  followers: number;
  worksCount: number;
  description: string;
  socials: Social[];
}

interface Social {
  platform: string;
  link: string;
  icon: ReactNode;
}

const PersonalInfo = ({
  name,
  image,
  account,
  followers,
  worksCount,
  description,
  socials,
}: PersonalInfoProps) => {
  return (
    <div className="mb-5 flex animate-fade-in flex-wrap gap-6 max-sm:justify-center">
      <Avatar className="h-[160px] w-[160px]">
        <AvatarImage
          src={image}
          className="h-full w-full object-cover"
          alt="Tanavan Chinsana"
        />
      </Avatar>
      <div className="flex flex-col items-center gap-2 md:items-start">
        <h1 className="text-xl md:text-4xl">{name}</h1>
        <p className="text-xs text-muted-foreground md:text-sm">{`${account} ‧ ${numberWithCommas(followers)} followers ‧ ${numberWithCommas(worksCount)} works`}</p>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex gap-2">
          {socials?.map((social: Social) => (
            <TooltipProvider key={social.link}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="cursor-pointer p-0"
                    onClick={() => window.open(social.link, "_blank")}
                  >
                    {social.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.platform}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
