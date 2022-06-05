import Nav from "./Nav"
export default function NotFoundPage() {
return(
    <div>
        <Nav></Nav>
<div className='w-screen flex w-screen h-screen flex-col items-center text-white text-center bg-savant-home m-auto text-6xl font-bold'>
    <div className="m-auto flex-col space-y-6">
    <div>
    404
    </div>
    <div className='m-auto text-2xl font-medium'>
    Page Not Found -- try navigating to a different page above.
    </div>
    </div>
</div>
    </div>

)
}