import Card from './card';


export default function Products() {
    return (
        <div className="grid gap-9 grid-cols-2 md:grid-cols-4 max-md:gap-5 max-w-[1240px] m-auto">
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
            <Card text="Apple Magic Pro" image="/products/1.png" link="#" />
        </div>
    );
}
