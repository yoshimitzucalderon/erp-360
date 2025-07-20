import CodeModal from "@/app/components/ui-components/CodeModal";
import React from "react";

const BasicRadioGroupCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    "use client";
    import React from 'react'
    import { Radio, RadioGroup } from '@headlessui/react'
    import { useState } from 'react'
    import { Icon } from "@iconify/react";

    const plans = [
    { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },
    { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },
    { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1TB SSD disk' },
    ]

    const [selected, setSelected] = useState(plans[0])

    <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-4">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan}
              className="group relative flex cursor-pointer rounded-md bg-lightgray dark:bg-dark py-4 px-5 text-ld shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-primary data-[checked]:bg-primary dark:data-[checked]:bg-primary"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm">
                  <p className="font-semibold text-ld text-base group-data-[checked]:text-white">{plan.name}</p>
                  <div className="flex gap-2 text-darklink text-sm group-data-[checked]:text-white/50">
                    <div>{plan.ram}</div>
                    <div aria-hidden="true">&middot;</div>
                    <div>{plan.cpus}</div>
                    <div aria-hidden="true">&middot;</div>
                    <div>{plan.disk}</div>
                  </div>
                </div>
                
                <Icon icon="solar:check-circle-linear" height={20} className="opacity-0 transition group-data-[checked]:opacity-100 text-white"/>
                {/* <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" /> */}
              </div>
            </Radio>
          ))}
        </RadioGroup>
    
        `}
      </CodeModal>
    </div>
  );
};

export default BasicRadioGroupCode;
