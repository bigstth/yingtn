import { Film, Instagram } from "lucide-react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Work, { WorkProps } from "./components/Work";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Profile } from "./assets";
import { CONTENT_YT_COVER, SUPPORT_VDO, LOGO } from "./constant";
import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [offset, setOffset] = useState(12);
  const ALL_CONTENTS = [...CONTENT_YT_COVER, ...SUPPORT_VDO, ...LOGO];

  const PERSONAL_INFO = {
    name: "Tanavan Chinsana",
    image: Profile,
    account: "@yingtn",
    followers: 1266,
    worksCount: ALL_CONTENTS?.length ?? 0,
    description: "Innovative Design for a Digital World.",
    socials: [
      {
        platform: "IG",
        link: "https://instagram.com/ying.tanavan",
        icon: <Instagram className="text-muted-foreground" />,
      },
      {
        platform: "IG Reels",
        link: "https://instagram.com/ying.tanavan/reels",
        icon: <Film className="text-muted-foreground" />,
      },
    ],
  };

  const loadMoreItems = () => {
    setOffset((prev) => prev + 12);
  };
  return (
    <div className="container">
      <PersonalInfo {...PERSONAL_INFO} />
      <Tabs
        defaultValue="all"
        className="flex animate-fade-up flex-col items-start bg-none"
      >
        <TabsList className="h-full w-full flex-wrap justify-center md:justify-start">
          <TabsTrigger value="all" onClick={() => setOffset(12)}>
            All ({ALL_CONTENTS.length})
          </TabsTrigger>
          <TabsTrigger value="thumbnail" onClick={() => setOffset(12)}>
            Thumbnails ({CONTENT_YT_COVER.length})
          </TabsTrigger>
          <TabsTrigger value="support_vdo" onClick={() => setOffset(12)}>
            Support Videos ({SUPPORT_VDO.length})
          </TabsTrigger>
          <TabsTrigger value="logo" onClick={() => setOffset(12)}>
            Logos ({LOGO.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ALL_CONTENTS.slice(0, offset).map(
              (content: WorkProps, i: number) => (
                <Work
                  image={content.image}
                  title={content.title}
                  views={content.views}
                  key={content.title + i}
                />
              ),
            )}
          </div>
          {ALL_CONTENTS.length > offset && (
            <Button
              className="mt-5 animate-fade-up "
              onClick={() => loadMoreItems()}
            >
              Load more
            </Button>
          )}
        </TabsContent>
        <TabsContent value="thumbnail" className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CONTENT_YT_COVER.slice(0, offset).map(
              (content: WorkProps, i: number) => (
                <Work
                  image={content.image}
                  title={content.title}
                  views={content.views}
                  key={content.title + i}
                />
              ),
            )}
          </div>
          {CONTENT_YT_COVER.length > offset && (
            <Button
              className="mt-5 animate-fade-up "
              onClick={() => loadMoreItems()}
            >
              Load more
            </Button>
          )}
        </TabsContent>
        <TabsContent value="support_vdo" className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SUPPORT_VDO.slice(0, offset).map(
              (content: WorkProps, i: number) => (
                <Work
                  image={content.image}
                  title={content.title}
                  views={content.views}
                  key={content.title + i}
                />
              ),
            )}
          </div>
          {SUPPORT_VDO.length > offset && (
            <Button
              className="mt-5 animate-fade-up "
              onClick={() => loadMoreItems()}
            >
              Load more
            </Button>
          )}
        </TabsContent>
        <TabsContent value="logo" className="w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {LOGO.slice(0, offset).map((content: WorkProps, i: number) => (
              <Work
                image={content.image}
                title={content.title}
                views={content.views}
                key={content.title + i}
              />
            ))}
          </div>
          {LOGO.length > offset && (
            <Button
              className="mt-5 animate-fade-up "
              onClick={() => loadMoreItems()}
            >
              Load more
            </Button>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
