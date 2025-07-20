import CodeModal from "@/app/components/ui-components/CodeModal";
import React from "react";

const WithLabelSwitchCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    "use client";
    import React, { useState } from "react";
    import { Switch, Field, Label } from "@headlessui/react";

    const [enabled, setEnabled] = useState(true);

    <div className="flex flex-wrap gap-3">
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-primary"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-secondary"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-error"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-warning"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-info"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
          <Field>
            <Label className="block text-ld mb-2">Enable</Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-success"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </Field>
        </div>
            `}
      </CodeModal>
    </div>
  );
};

export default WithLabelSwitchCode;
