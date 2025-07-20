import React from 'react'
import CodeModal from '../../CodeModal'

const BasicCommandCode = () => {
  return (
    <CodeModal>
        {
            `
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/app/components/shadcn-ui/Default-Ui/command";
 
 <Command className="rounded-lg border border-ld mt-4">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
        <CommandItem>
        <Calendar />
        <span>Calendar</span>
        </CommandItem>
        <CommandItem>
        <Smile />
        <span>Search Emoji</span>
        </CommandItem>
        <CommandItem disabled>
        <Calculator />
        <span>Calculator</span>
        </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
        <CommandItem>
        <User />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
        <CreditCard />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
        <Settings />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
    </CommandGroup>
    </CommandList>
</Command>
            `
        }
    </CodeModal>
  )
}

export default BasicCommandCode