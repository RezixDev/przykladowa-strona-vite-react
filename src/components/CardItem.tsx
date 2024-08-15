export const CardItem = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-black text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )