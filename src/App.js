import "./styles.css";
import ProductCard from "/components/ProductCard";
export default function App() {
  const products = [
    {
      name: "Kaffeemaschine",
      price: 89.99,
      description: "Eine moderne Kaffeemaschine mit Timer.",
      image:
        "https://www.bader.de/celum/celum_assets/2019FE9_0068020FCD050_699890_jpg_1_local_l_rd_local_l_rd.jpg/wmf-kaffeemaschine-lumero-fuer-besten-kaffeegenuss-farbe-edelstahl.jpg",
    },
    {
      name: "Bluetooth-Lautsprecher",
      price: 45.00,
      description: "Kompakter Lautsprecher mit gutem Klang.",
      image:
        "https://www.calibereurope.com/wp-content/uploads/2023/02/093e2589c0a8bbad00dc1eadd7b263f5450e1b14_HPG440BT_Schuin_Top.jpg",
    },
    {
      name: "USB-C Ladegerät",
      price: 19.99,
      description: "Schnelles Ladegerät für alle Geräte.",
      image: "https://nevox.de/media/image/8e/f0/c5/100W.jpg",
    },
  ];

  return (
    <div className="App">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
