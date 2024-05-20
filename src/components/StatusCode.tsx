import { Badge } from "./ui/badge"
type StatusCodeProps = {
    code: number
}

export const StatusCode = ({code} : StatusCodeProps) => {
    if(code >= 200 && code < 300){
        return(
             <Badge className=" bg-emerald-400">{code}</Badge> 
        )
    } else if (code >= 300 && code < 400){
        return(
            <Badge className=" bg-sky-600">{code}</Badge>
        )
    } else{
        return(
            <Badge className=" bg-red-600">{code}</Badge>
        )
    }

}