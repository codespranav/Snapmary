import { Pizza } from "lucide-react";

export default function DemoSection() {
    return (
        <section className="relative w-full">

            <div className="py-12 lg:py-24 max-w-5xl md:max-w-full px-4 sm:px-6 lg:px-8">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 96.8%, 85.5% 91.8%, 80.7% 72.5%, 52.3% 50.2%, 42.8% 52.4%, 47.5% 58.3%, 45.3% 34.3%, 75.7% 7.6%, 64.8% 19.7%, 9% 100%, 27.6% 86%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center space-y-4 ">
                    <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-500/20 mb-4 backdrop-blur-xs">
                        <Pizza className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto px-4 sm:px-6">Watch how Snapmary transforms  <span className="text-rose-500">this Next.js course pdf</span>  into an easy-to-read summary!</h3>
                </div>
                <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
                    {/* Summary viewer */}
                    
                </div>
            </div>

        </section>
    );
}
