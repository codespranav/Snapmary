import { AirVent, BrainCircuit, FileOutput, FileText, Icon } from "lucide-react";
import { ReactNode } from "react";

export default function HowItWorksSection() {
    type Step = {
        icon: ReactNode;
        label: string,
        description: string,
    }
    const steps: Step[] = [
        {
            icon: <FileText size={64} strokeWidth={1.5} />,
            label: "Upload your PDF",
            description: "Upload your PDF file to the platform. We support all popular file formats.",
        },
        {
            icon: <BrainCircuit size={64} strokeWidth={1.5} />,
            label: "AI analysis",
            description: "Our advanced AI will analyze the uploaded PDF and extract the most important information.",
        },
        {
            icon: <FileOutput size={64} strokeWidth={1.5} />,
            label: "Get summary",
            description: "We will generate a summary of the uploaded PDF.",
        },

    ]
    return (
        <section className="relative overflow-hidden bg-gray-50">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 lg:px-12">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-30 sm:left-[calc(40%+30rem)] sm:w-[40.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 96.8%, 85.5% 91.8%, 80.7% 72.5%, 52.3% 50.2%, 42.8% 52.4%, 47.5% 58.3%, 45.3% 34.3%, 75.7% 7.6%, 64.8% 19.7%, 9% 100%, 27.6% 86%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>

                <div className="text-center mb-16">
                    <h2 className="font-bold text-xl uppercase mb-4 text-rose-500">How it works</h2>
                    <h3 className="font-bold text-3xl max-w-2xl mx-auto">Transform any pdf into easy-to-digest summary in three simple steps </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
                {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 hover:border-rose-500/50 transition-colors group w-full"
                        >
                            <div className="flex items-center justify-center gap-4 h-full flex-col">
                                <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-rose-500/10 text-rose-500">
                                    {step.icon}
                                </div>
                                <div className="flex flex-col gap-2 text-center">
                                    <h4 className="font-bold text-lg text-center">{step.label}</h4>
                                    <p className="text-sm text-gray-500">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

