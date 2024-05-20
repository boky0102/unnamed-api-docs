import { EndpointInfo, Response } from '@/components/EndpointInfo'
import { Separator } from '@/components/ui/separator'
import { createLazyFileRoute } from '@tanstack/react-router'

const response1: Response = {
  status: 200,
  description: "User is logged in, cookie has been sent",
}

const response2: Response = {
  status: 500,
  description: "Internal server error"
}

const response3: Response = {
  status: 201,
  description: "User is successfully created"
}

const AuthLoginEndpointData: EndpointInfo = {
  route: "/auth/login",
  method: "GET",
  protected: false,
  description: "This is endpoint for logging in and registering users via 0auth provider. Hitting this endpoint will result in redirect to discords authorization page.",
  importantNotice: "Server will send cookie in response containing jwt that can be used for further authentication. Please include it using with credentials header on subsequent requests.",
  responses: [response1, response2, response3]
}


const AuthRoute = () => {
  return(
    <div className=' w-5/6 mx-auto my-4'>
      <h1 className='mb-2'>/auth</h1>
      <Separator />
      <EndpointInfo endpointInfo={AuthLoginEndpointData}></EndpointInfo>
    </div>
  )
}


export const Route = createLazyFileRoute('/auth')({
  component: AuthRoute
})


