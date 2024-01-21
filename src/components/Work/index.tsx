import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { numberWithCommas } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export interface WorkProps {
  image: string;
  title: string;
  views: number;
}

const Work = ({ image, title, views }: WorkProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer border-none shadow-none">
            <CardHeader className="max-h-[172px] max-w-[305px] p-0 hover:animate-ping-1">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-0 text-left">
              <p className="font-semibold">{title}</p>
            </CardContent>
            <CardFooter className="p-0">
              <small className="text-muted-foreground">
                {numberWithCommas(views)} views
              </small>
            </CardFooter>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-[80%] p-0">
          <DialogTrigger asChild>
            <img src={image} alt={title} className="h-full w-full" />
          </DialogTrigger>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Work;
