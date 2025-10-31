import Image from "next/image";

export type MenuItem = {
  name: string;
  description?: string;
  price?: string | number;
  image?: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export default function MenuSection({ section }: { section: MenuSection }) {
  return (
    <section className="my-12">
      <h3 className="text-3xl font-bold text-neon-teal drop-shadow-neonTeal mb-6">
        {section.title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.items.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl p-4 shadow-lg flex gap-4 items-center"
          >
          
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold text-white">
                {item.name}
              </h4>

              {item.description && (
                <p className="text-gray-300 text-sm mb-2">
                  {item.description}
                </p>
              )}

              {item.price !== undefined && (
                <span className="text-neon-pink font-bold">
                  {typeof item.price === "number"
                    ? `${item.price} €`
                    : item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
<Image
  src="/IMG_5931.jpeg"
  alt="Test"
  width={300}
  height={200}
/>
