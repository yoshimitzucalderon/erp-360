import React from 'react'
import CodeModal from '../../CodeModal'

const ContactDrawerCode = () => {
  return (
    <div>
      <CodeModal>
        {`
    "use client";
    import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
    import { useState } from "react";
    
    const [isContact, setIsContact] = useState(false);
    const contactClose = () => setIsContact(false);
    <Drawer open={isContact} onClose={contactClose} className="p-4">
          <Drawer.Header title="CONTACT US" titleIcon={HiEnvelope} />
          <Drawer.Items>
            <form action="#">
              <div className="mb-6 mt-3">
                <Label htmlFor="email" className="mb-2 block">
                  Your email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="subject" className="mb-2 block">
                  Subject
                </Label>
                <TextInput
                  id="subject"
                  name="subject"
                  placeholder="Let us know how we can help you"
                  className="form-control"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="message" className="mb-2 block">
                  Your message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={4}
                />
              </div>
              <div className="mb-6">
                <Button
                  type="submit"
                  className="w-full rounded-md"
                  color="primary"
                >
                  Send message
                </Button>
              </div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <a href="mailto:info@company.com" className="hover:underline">
                  info@company.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href="tel:2124567890" className="hover:underline">
                  212-456-7890
                </a>
              </p>
            </form>
          </Drawer.Items>
    </Drawer>
    `}
      </CodeModal>
    </div>
  )
}

export default ContactDrawerCode
