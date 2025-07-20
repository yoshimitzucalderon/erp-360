import React from "react";
import CodeModal from "../../CodeModal";

const FormCardCode = () => {
  return (
    <CodeModal>
      {`
import { Button } from "@/app/components/shadcn-ui/Default-Ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/shadcn-ui/Default-Ui/card"
import { Input } from "@/app/components/shadcn-ui/Default-Ui/input"
import { Label } from "@/app/components/shadcn-ui/Default-Ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/shadcn-ui/Default-Ui/select"
 
<Card className="w-full">
      <CardHeader className="flex flex-row justify-between w-full items-center">
        <CardTitle>Form Card</CardTitle>
        <FormCardCode />
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
</Card>            
            `}
    </CodeModal>
  );
};

export default FormCardCode;
