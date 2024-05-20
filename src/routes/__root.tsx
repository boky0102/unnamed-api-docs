import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModeToggle } from '@/components/ModeToggle';

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='grid grid-cols-8'>
            <nav className='col-span-2 flex flex-col items-center h-screen text-sm text-foreground border-r border-r-solid border-r-border'>
                <h1 className='font-semibold text-foreground text-xl mt-5'>API docs</h1>
                <div className="flex justify-between items-center w-5/6 m-3">
                  <div className="font-semibold text-foreground text-lg">Routes</div>
                  <ModeToggle></ModeToggle>
                </div>
                <Link to="/auth" className='[&.active]:font-semibold [&.active]:text-primary [&.active]:bg-muted w-5/6 mt-2 flex justify-start items-center p-2 rounded'>
                  /auth
                </Link>
                <Link to="/subject" className='[&.active]:font-semibold [&.active]:text-primary [&.active]:bg-muted w-5/6 mt-2 flex justify-start items-center p-2 rounded'>
                  /subject
                </Link>

              {/* <NavigationMenu orientation='vertical' className='bg-background text-foreground'>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to='/about'>About</Link>
                  </NavigationMenuItem>
                    <Link to="/routes">Routes</Link>
                  <NavigationMenuItem>
                  <ModeToggle></ModeToggle>

                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
            </nav>
            <div className='col-span-6'>
                <Outlet />
            </div>
        </div>
      </ThemeProvider>
        {/* <Link to="/" className="[&.active]:font-bold">
          Home
        </Link> */}
      {/* <hr /> */}
      
{/*       <TanStackRouterDevtools />
 */}    </>
  ),
})