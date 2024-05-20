import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { TriangleAlert, LockKeyhole } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { StatusCode } from "./StatusCode"

export type Response = {
    status: number,
    message?: string,
    description: string,
    body?: string
}

export type Param = {
    name: string,
    description: string
}

export type EndpointInfo = {
    method: "GET" | "POST" | "PUT" | "DELETE",
    route: string,
    protected: boolean,
    description: string,
    responses: Response[],
    queryParams?: Param[],
    importantNotice?: string,
    requiredHeaders?: string[]
}

type EndpointInfoProps = {
    endpointInfo: EndpointInfo
}



export const EndpointInfo = ({
    endpointInfo
}: EndpointInfoProps) => {

    return(
        <div className="w-full text-foreground mt-4 border border-solid border-border p-7 bg-card rounded">
            <div className=" flex space-x-2 justify-between">
                <div className="flex">
                    <Badge>{endpointInfo.method}</Badge>
                    <h1 className="ml-2 text-foreground">{endpointInfo.route}</h1>
                </div>
                
                <Badge className=" space-x-1"><LockKeyhole size={12}></LockKeyhole>{endpointInfo.protected ? "PROTECTED" : "UNPROTECTED"}</Badge>
            </div>
           <Separator className="my-2" />
           
            <div className="w-4/6 space-y-3 mt-5">
                <p className=" mt-1">{endpointInfo.description}</p>
                <div className=" flex flex-col border border-solid border-border p-2 mt-2 rounded">
                    <div className="flex items-center space-x-1">
                        <TriangleAlert size={20}></TriangleAlert>
                        <h3>IMPORTANT</h3>
                    </div>
                    <p>{endpointInfo.importantNotice}</p>
                </div> 
            </div>

            <h1 className="m-3 font-semibold">Responses</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>STATUS</TableHead>
                        <TableHead>DESCRIPTION</TableHead>
                        <TableHead>RESPONSE BODY</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        endpointInfo.responses.map((response) => (
                            <TableRow>
                                <TableCell>
                                    <StatusCode code={response.status}></StatusCode>
                                </TableCell>
                                <TableCell>{response.description}</TableCell>
                                <TableCell>{response.body}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>  
        </div>
    )
}