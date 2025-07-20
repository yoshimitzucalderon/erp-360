import React from 'react'
import CodeModal from '../../CodeModal'

const BasicBreadcrumbCode = () => {
    return (
        <CodeModal>
            {
                `
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/app/components/shadcn-ui/Default-Ui/breadcrumb"
                 
<Breadcrumb>
<BreadcrumbList>
    <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
</BreadcrumbList>
</Breadcrumb>           
            `
            }
        </CodeModal>
    )
}

export default BasicBreadcrumbCode