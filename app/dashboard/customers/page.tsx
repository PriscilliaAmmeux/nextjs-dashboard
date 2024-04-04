import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function customers() {
  const customers = [
    { name: 'Jean Tourloupe', address: '12 rue de la Paix, 75000 Paris' },
    { name: 'Maëva Kué', address: '45 avenue de la Liberté, 67000 Strasbourg' },
    { name: 'Pat Atatrak', address: '789 rue du Général, 69000 Lyon' },
    {
      name: 'Marion Nete Soussette',
      address: '321 boulevard du Roi, 13000 Marseille',
    },
    { name: 'Gilbert Gamote', address: '654 rue de la Reine, 33000 Bordeaux' },
    { name: 'GuyLiguili', address: '987 avenue du Prince, 31000 Toulouse' },
    { name: 'Mouss Tache', address: '123 rue du Marché, 34000 Montpellier' },
    {
      name: 'Mélanie Sanedanlgarage',
      address: '456 boulevard de la Gare, 44000 Nantes',
    },
    { name: 'Lucie', address: '789 avenue du Parc, 35000 Rennes' },
  ];

  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-center text-2xl text-gray-700">Customers Page</h1>
      <ul className="space-y-2">
        {customers.map((customer, index) => (
          <li key={index} className="rounded bg-white p-2 shadow">
            <p>{customer.name}</p>
            <p>{customer.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
