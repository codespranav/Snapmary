import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return <section className='flex justify-center items-center lg:min-h-[40vh'>
    <div>
        <SignIn  />
    </div>
    </section>
}