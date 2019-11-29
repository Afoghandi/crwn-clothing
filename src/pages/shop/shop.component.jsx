import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

//import static page
import SHOP_DATA from "./shop.data.js";

// when creating a dynamic page with loads of potential traffic... use clas
class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//create the pointer to fetch static shop data
			collections: SHOP_DATA
		};
	}
	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{//the ... abbreviation saves listing all the item you want
				collections.map(({ id, ...otherCollectionProps }) => (
					<CollectionPreview key={id} {...otherCollectionProps} />
				))}
			</div>
		);
	}
}

export default ShopPage;
