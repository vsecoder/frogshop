import Card from './card';


export default function Products() {
    return (
        <div className="grid gap-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-md:gap-5 max-w-[1240px] m-auto pl-5 pr-5 md:p-0">
            <Card text="Apple Magic Pro" image="/products/1.png" rating={3} price={300} />
            <Card text="Fifine a9v" image="/products/2.png" rating={4} price={300} />
            <Card text="JBL" image="/products/3.png" rating={2} price={300} />
            <Card text="Apple Magic Pro" image="/products/1.png" rating={3} price={300} />
        </div>
    );
}
