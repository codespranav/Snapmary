import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

type PriceType = {
    id: string;
    name: string;
    price: number;
    description: string;
    items: string[];
    paymentLink: string;
    priceID: string;
};

const plans: PriceType[] = [
    {
        id: "basic",
        name: "Basic",
        price: 9,
        description: "Ideal for individuals looking for essential PDF summaries.",
        items: ["5 PDF summaries per month", "Access to standard content library"],
        paymentLink: "",
        priceID: ""
    },
    {
        id: "pro",
        name: "Pro",
        price: 19,
        description: "Perfect for professionals and teams who need more flexibility and features.",
        items: [
            "10 PDF summaries per month",
            "Access to exclusive content",
            "Markdown export feature",
            "Priority support"
        ],
        paymentLink: "",
        priceID: ""
    },
    {
        id: "diamond",
        name: "Diamond",
        price: 49,
        description: "Designed for power users and businesses requiring unlimited access and premium features.",
        items: [
            "Unlimited PDF summaries",
            "Full access to premium content",
            "Advanced export options (Markdown, Word, HTML)",
            "Collaboration tools for teams",
            "Dedicated account manager",
            "24/7 priority customer support"
        ],
        paymentLink: "",
        priceID: ""
    }
];

const PricingCard = ({ name, price, description, items, paymentLink, id }: PriceType) => {
    return (
        <div
            className={cn(
                "relative w-full max-w-sm p-8 rounded-2xl shadow-lg transition-all duration-300",
                "border border-gray-300 bg-white dark:bg-gray-900 hover:shadow-2xl ",
                id === "pro" && "border-rose-500 scale-105 shadow-2xl"
            )}
        >
            {/* Plan Name */}
            <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white capitalize">{name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
            </div>

            {/* Pricing Section */}
            <div className="flex justify-center items-end mt-6">
                <p className="text-5xl font-extrabold text-gray-900 dark:text-white">${price}</p>
                <div className="flex flex-col justify-end ml-1 mb-1">
                    <p className="text-xs uppercase font-semibold text-gray-500 dark:text-gray-400">USD</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">/month</p>
                </div>
            </div>

            {/* Features List */}
            <ul className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 dark:text-green-400" size={18} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Buy Now Button */}
            <div className="mt-6">
                <Link href={paymentLink || "#"} className="w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-rose-800 to-rose-500 hover:from-rose-500 hover:to-rose-800 text-white border-2 py-2">
                    Buy Now
                </Link>
            </div>
        </div>
    );
};

export default function PricingSection() {
    return (
        <section className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Pricing Plans</h2>
                <p className="text-gray-600 dark:text-gray-300">Choose a plan that fits your needs.</p>
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {plans.map((plan) => (
                    <PricingCard key={plan.id} {...plan} />
                ))}
            </div>
        </section>
    );
}
