import { cn } from "@/lib/utils";

interface ListItem {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

interface RollingTextItemProps {
    item: ListItem;
}

const RollingTextItem = ({ item }: RollingTextItemProps) => {
    const Icon = item.icon;

    return (
        <div className="group relative w-full cursor-pointer border-b border-neutral-200 dark:border-neutral-800 py-6">
            {/* Rolling text */}
            <div className="relative overflow-hidden h-[48px] md:h-16">
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                    {/* State 1: Normal - Unfilled Icon */}
                    <div className="h-[48px] md:h-16 flex items-center justify-between gap-4">
                        <h2 className="text-2xl md:text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter">
                            {item.title}
                        </h2>
                        <Icon
                            className="text-2xl md:text-3xl text-violet-600 dark:text-violet-400 transition-all duration-300 shrink-0"
                            style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '2' }}
                        />
                    </div>

                    {/* State 2: Hover - Italic + Color + Filled Icon */}
                    <div className="h-[48px] md:h-16 flex items-center justify-between gap-4">
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic text-violet-600 dark:text-violet-400">
                            {item.title}
                        </h2>
                        <Icon
                            className="text-2xl md:text-3xl text-violet-600 dark:text-violet-400 transition-all duration-300 shrink-0"
                            style={{ fill: 'currentColor', stroke: 'currentColor', strokeWidth: '0' }}
                        />
                    </div>
                </div>
            </div>

            {/* Description - fades in on hover */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.description}
            </p>

            {/* Decorative gradient bar */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-500 group-hover:w-full" />
        </div>
    );
};

interface RollingTextListProps {
    items: ListItem[];
    className?: string;
}

export const RollingTextList = ({ items, className = "" }: RollingTextListProps) => {
    return (
        <div className={cn("mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-12", className)}>
            <div className="w-full flex flex-col">
                {items.map((item, index) => (
                    <RollingTextItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
