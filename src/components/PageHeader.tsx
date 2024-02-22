import { Menu } from "lucide-react";
import Button from "./Button";

const PageHeader = () => {
  return (
    <div className="flex justify-between gap-10 lg:gap-20">
      {/* left side */}
      <div className="flex  gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img
            className="h-6 w-8"
            src="https://i.pinimg.com/736x/e5/b4/62/e5b46258e1062330ac3f08aa33624b9d.jpg"
            alt="logo_img"
          />
        </a>
      </div>
      {/* right side */}
      <div></div>
      <div></div>
    </div>
  );
};

export default PageHeader;
