import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FeaturedProducts = ({type, description}) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg",
      img2: "https://images.pexels.com/photos/3757056/pexels-photo-3757056.jpeg",
      title: "Modern Chair",
      isNew: true,
      oldPrice: 199,
      price: 149,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/5709663/pexels-photo-5709663.jpeg",
      img2: "https://images.pexels.com/photos/5709664/pexels-photo-5709664.jpeg",
      title: "Stylish Desk Lamp",
      isNew: false,
      oldPrice: 79,
      price: 59,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/10309193/pexels-photo-10309193.jpeg",
      img2: "https://images.pexels.com/photos/10309194/pexels-photo-10309194.jpeg",
      title: "Classic Sofa",
      isNew: true,
      oldPrice: 899,
      price: 749,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/7766567/pexels-photo-7766567.jpeg",
      img2: "https://images.pexels.com/photos/7766568/pexels-photo-7766568.jpeg",
      title: "Wooden Coffee Table",
      isNew: false,
      oldPrice: 159,
      price: 129,
    },
  ];

  return(

    <div className="featuredProducts">

        <div className="top">
            <h1>{type} Products</h1>
            <p>
          {description}
        </p>
        </div>

        <div className="bottom">
            {data.map(item =>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )


};

export default FeaturedProducts;
