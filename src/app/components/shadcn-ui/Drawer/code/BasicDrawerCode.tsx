import React from 'react'
import CodeModal from '../../CodeModal'

const BasicDrawerCode = () => {
  return (
    <CodeModal>
        {
            `
import { Minus, Plus } from "lucide-react"
import { Button } from "@/app/components/shadcn-ui/Default-Ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/app/components/shadcn-ui/Default-Ui/drawer"
 
<Drawer>
    <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent className='border-border' >
        <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                    >
                        <Minus />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                            {goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                            Calories/day
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                    >
                        <Plus />
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
            </div>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </div>
    </DrawerContent>
</Drawer>
<Drawer>
    <DrawerTrigger asChild>
        <Button variant="secondary" >Open Drawer</Button>
    </DrawerTrigger>
    <DrawerContent className='border-border' >
        <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
                <div className="flex items-center justify-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(-10)}
                        disabled={goal <= 200}
                    >
                        <Minus />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                        <div className="text-7xl font-bold tracking-tighter">
                            {goal}
                        </div>
                        <div className="text-[0.70rem] uppercase text-muted-foreground">
                            Calories/day
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 shrink-0 rounded-full"
                        onClick={() => onClick(10)}
                        disabled={goal >= 400}
                    >
                        <Plus />
                        <span className="sr-only">Increase</span>
                    </Button>
                </div>
            </div>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </div>
    </DrawerContent>
</Drawer>            
            `
        }
    </CodeModal>
  )
}

export default BasicDrawerCode