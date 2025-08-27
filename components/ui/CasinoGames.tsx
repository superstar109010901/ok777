import { cn } from "@/lib/utils";
import Link from "next/link";

interface GameItemProps {
  icon: string;
  name: string;
  timeLabel?: string;
  timeColor?: "red" | "blue";
  isHighlighted?: boolean;
    href?: string; // Optional link for the game item
}

const GameItem = ({ icon, href, name, timeLabel, timeColor }: GameItemProps) => {
  return (
    <Link href={"/hashgames/"+href+"/active"} className={cn(
      "flex h-[50px] items-center gap-2 rounded-xl px-2 py-0 cursor-pointer transition-all duration-200",
      "hover:bg-white/10 hover:scale-105 active:scale-95",
    )}>
      <img
        src={icon}
        alt={name}
        className="h-9 w-9 object-contain flex-shrink-0"
      />
      <div className="flex h-9 flex-1 items-center gap-2 rounded-lg px-3 py-0 min-w-0">
        <span className="font-montserrat text-sm font-bold text-white whitespace-nowrap">
          {name}
        </span>
        {timeLabel && (
          <div className="flex h-[19px] items-center justify-center rounded-[4px] bg-[#111923] px-2 py-0.5 backdrop-blur-[32px] flex-shrink-0 ml-auto">
            <span className={cn(
              "font-montserrat text-xs font-bold whitespace-nowrap",
              timeColor === "red" && "text-[#ED1D49]",
              timeColor === "blue" && "text-[#2283F6]"
            )}>
              {timeLabel}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default function CasinoGames() {
  const leftColumnGames = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/da342dfa109290dea3cd6fb22813a92612c23db8?width=72",
      name: "Odd/Even",
      href: "oddeven",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/78761bfd1e40fc2a7c0bd4e6c6f7780788612e72?width=72",
      name: "Odd/Even",
      href: "oddeven",
      timeLabel: "1 min",
      timeColor: "red" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/99ce24426f356fe255117a42a039d0e5267e2fd0?width=72",
      name: "Odd/Even",
      href: "oddeven",
      timeLabel: "3min",
      timeColor: "blue" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/1ea94f3b4307e70d888465f41246b9517dfa3aa6?width=72",
      name: "Lucky",
      href: "lucky",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/edb79ab3787cb270a967176b2ba65777e0e726a6?width=72",
      name: "Lucky",
      href: "lucky",
      timeLabel: "1 min",
      timeColor: "red" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7d7b650707fa1260cedc05e71318150d4325743b?width=72",
      name: "Lucky",
      href: "lucky",
      timeLabel: "3min",
      timeColor: "blue" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/eb30a520328713978abb13379807852385e664ba?width=72",
      name: "NiuNiu",
      href: "niuniu",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/9edc4a7001ca56098ea6c3394c3270ec57b54a17?width=72",
      name: "NiuNiu",
      href: "niuniu",
      timeLabel: "1 min",
      timeColor: "red" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/10f3efc3b5263194cc9d57fb73a8e64d2ad26c5a?width=72",
      name: "NiuNiu",
      href: "niuniu",
      timeLabel: "3min",
      timeColor: "blue" as const
    }
  ];

  const rightColumnGames = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/e9ae8c4c557d022d9c88631af82eabe3c1c4bb00?width=72",
      name: "Big/Small",
      href: "bigsmall",
      isHighlighted: true
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/d94d953e66f744fcdc5e53408fa1a09b7538f906?width=72",
      name: "Big/Small",
      href: "bigsmall",
      timeLabel: "1 min",
      timeColor: "red" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/734bdd5bf7de717cb6f4059ce34c4d6539d44096?width=72",
      name: "Big/Small",
      href: "bigsmall",
      timeLabel: "3min",
      timeColor: "blue" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/91d3509c50308b39a9e2f49788baa0091da12b55?width=72",
      name: "Banker/Player",
      href: "bankerplayer",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/3abb46454d929afeb1328284e943f075bb0ba0f0?width=72",
      name: "Banker/Player",
      href: "bankerplayer",
      timeLabel: "1 min",
      timeColor: "red" as const
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ea86b2fe33c847045b3e63f66027c518b628a060?width=72",
      name: "Banker/Player",
      href: "bankerplayer",
      timeLabel: "3min",
      timeColor: "blue" as const
    }
  ];

  return (
    <div className="inline-flex w-[507px] items-start absolute justify-center bg-mirage-54 p-6 backdrop-blur-[32px] rounded-xl">
      <div className="flex w-full gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-0">
          {leftColumnGames.map((game, index) => (
            <GameItem
              key={index}
              icon={game.icon}
              name={game.name}
              timeLabel={game.timeLabel}
              timeColor={game.timeColor}
               href={game.href}
            />
          ))}
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col items-start gap-0">
          {rightColumnGames.map((game, index) => (
            <GameItem
              key={index}
              icon={game.icon}
              name={game.name}
              timeLabel={game.timeLabel}
              timeColor={game.timeColor}
              isHighlighted={game.isHighlighted}
              href={game.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
