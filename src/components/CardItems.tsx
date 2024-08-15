import { CardItem } from './CardItem'

export const CardItems = () => {
    return (
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CardItem title="Tytuł Card Item Jeden" description="No Siema Drilluj Propsa" />
            <CardItem title="Super Tytuł 2" description="Jeszcze jedna przerzuta" />
            <CardItem title="Dobrze, ze tylko trzy tytuly" description="No Elo Description" />
          </div>
        </div>
      </div>
    )
  }