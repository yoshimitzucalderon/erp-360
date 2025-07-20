import { Checkbox, Label } from 'flowbite-react'
import React from 'react'
import CardBox from '../../shared/CardBox'

const CheckBoxes = () => {
  return (
    <div>
       <CardBox>
            <h4 className="text-lg font-semibold mb-2">Checkbox</h4>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
              <div className="flex items-center gap-2">
                <Checkbox id="accept" defaultChecked />
                <Label htmlFor="accept" className="flex">
                  I agree with the&nbsp;
                  <a
                    href="#"
                    className="text-primary hover:underline dark:text-primary"
                  >
                    terms and conditions
                  </a>
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                  I want to get promotional offers
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">I am 18 years or older</Label>
              </div>
              <div className="flex gap-2">
                <div className="flex h-5 items-center">
                  <Checkbox id="shipping" />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor="shipping">Free shipping via Flowbite</Label>
                  <div className="text-gray-500 dark:text-gray-300">
                    <span className="text-xs font-normal">
                      For orders shipped from Flowbite from{" "}
                      <span className="font-medium">€ 25</span> in books
                      or&nbsp;
                      <span>€ 29</span> on other categories
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled" disabled>
                  Eligible for international shipping (disabled)
                </Label>
              </div>
            </div>
          </CardBox>
    </div>
  )
}

export default CheckBoxes
