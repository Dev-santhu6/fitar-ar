import sheenchair from "../assets/models/sheenchair.glb";
import ioschair from "../assets/models/sheenchair.usdz";
import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";
import chairs from "../assets/models/the_kungsara_bench.glb";
import ioschairs from "../assets/models/scene.usdc";
import sofa from "../assets/models/sofa.glb"
import iossofa from "../assets/models/sofa.usdc"
import Chair from  "../assets/models/Chair.glb"
import iosChair from  "../assets/models/chair.usdc"




const productItems = [
  {
    id: 1,
    name: "Sheen Chair",
    modelSrc: sheenchair,
    iOSSrc: ioschair,
    category: "Furniture",
    color: "Orange",
  },
  {
    id: 2,
    name: "Sofa",
    modelSrc: sofa,
    iOSSrc: iossofa,
    category: "Furniture",
    color: "Brown",
  }, {
    id: 3,
    name: "Chairs",
    modelSrc:Chair,
    iOSSrc: iosChair,
    category: "Furniture",
    color: "Orange",
  },
   {
    id: 4,
    name: "Chairs",
    modelSrc:chairs,
    iOSSrc: ioschairs,
    category: "Furniture",
    color: "Orange",
  },
  {
    id: 5,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
  }
];
export default productItems;
