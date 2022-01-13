import React from "react";
import SHOP_DATA from "./2.1 shop.data.js.js";
import CollectionPreview from "../../Components/collection-preview/collection-preview.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherprop }) => (
          <CollectionPreview key={id} {...otherprop} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
