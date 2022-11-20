import { plantList } from "../datas/plantList"
import PlantItem from "./PlantItem"
import '../styles/ShoppingList.css'

const categories = plantList.reduce(
	(acc, plant) =>
		acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
)

// plant.isBestSale && "+" --> Affiche le "+" uniquement si la condition
// qui précède les "&&" est respectée
function ShoppingList() {
	return (
		<div>
			<ul>
				{ categories.map((category) => (
					<li key={ category }>{ category }</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						key={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList