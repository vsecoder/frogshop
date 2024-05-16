import React, { useEffect } from "react";

interface ColorButtonProps {
  color: string;
  children: React.ReactNode;
}

interface ProductProps {
  name: string;
}

function ColorButton({ color, children }: ColorButtonProps) {
  return (
    <div
      className={`justify-center px-4 py-2.5 rounded-md ${color === "black" ? "bg-stone-950" : "bg-blue-600"
        } max-md:px-5 text-white`}
    >
      {children}
    </div>
  );
};

export default function Product({ name }: ProductProps) {
  const colors = [
    { color: "black", label: "Черный" },
    { color: "white", label: "Белый" },
  ];
  const [product, setProduct] = React.useState({
    title: "",
    price: 0,
    image: "",
    rating: 0,
    description: "",
  });

  useEffect(() => {
    fetch("/api/products?id=" + name)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data = data.body;
        setProduct({
          title: data.name,
          price: data.price,
          image: data.image,
          rating: data.rating,
          description: data.description,
        });
      });
  }, []);

  return (
    <div className="p-5 pt-0">
      <div className="mt-10 m-auto bg-white shadow-2xl rounded-[30px] max-w-full w-[1240px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <img src={product.image} className="shrink-0 mx-auto max-w-full bg-blue-600 border border-blue-600 border-solid rounded-[30px] w-[559px]" />
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-8 p-6 md:p-4 text-xs font-medium text-stone-950 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-3xl max-md:max-w-full">{product.title}</h1>
              <div className="mt-1.5 text-2xl max-md:max-w-full">
                {product.price}$
              </div>
              <p className="mt-1.5 max-md:max-w-full">
                Оплатить за товар можно как наличным, так и безналичными способами
                оплаты, все цены включают НДС.
              </p>
              <div className="mt-2.5 max-md:max-w-full">Цвет*</div>
              <div className="flex gap-2.5 mt-1.5 text-xs text-white whitespace-nowrap max-md:flex-wrap">
                {colors.map((colorObj) => (
                  <ColorButton key={colorObj.color} color={colorObj.color}>
                    {colorObj.label}
                  </ColorButton>
                ))}
              </div>
              <button className="justify-center items-center px-6 py-2.5 mt-2.5 text-sm whitespace-nowrap rounded-md border border-solid border-stone-950 max-md:px-5 max-md:max-w-full">
                Приобрести
              </button>
              <div className="flex gap-2.5 mt-2.5 max-md:flex-wrap">
                <div>Добавить для сравнения</div> •
                <div className="max-md:max-w-full">
                  Добавить к списку желаний
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};