import React from "react";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

//this page displays shoping window... first pass in the all item names you want to display as props
const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title"> {title.toUpperCase()} </h1>
		<div className="preview">
			{items
				//filter is used to ensure no more than 4 items are displayed
				.filter((item, idx) => idx < 4)
				//first map through items, then create a key in the div using id
				.map(({ id, ...otherItemProps }) => (
					<CollectionItem key={id} {...otherItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
