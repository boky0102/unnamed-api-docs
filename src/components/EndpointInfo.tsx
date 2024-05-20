export type Response = {
    status: number,
    message?: string,
    description: string,
    body?: string
}

export type EndpointInfo = {
    method: "GET" | "POST" | "PUT" | "DELETE",
    route: string,
    protected: boolean,
    description: string,
    responses: Response[],
    queryParams?: string[],
    importantNotice?: string,
    requiredHeaders?: string[]
}

type EndpointInfoProps = {
    endpointInfo: EndpointInfo
}



export const EndpointInfo = (props: EndpointInfoProps) => {
    return(
        <div></div>
    )
}