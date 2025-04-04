export default function HomePage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>🚀 MHC Automation App is Live!</h1>
      <p>More features coming soon. You're successfully deployed on Vercel.</p>
    </div>
  );
}
'use client';
import { useState } from 'react';

const Card = ({ children, ...props }) => (
  <div className="border rounded-lg p-4 bg-white shadow-sm" {...props}>{children}</div>
);
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>{children}</button>
);

const listings = [
  {
    id: 1,
    seller: "John Doe",
    address: "123 Palm View Ln",
    spaceNumber: "A12",
    serial: "XYZ123456",
    decal: "D123456",
    year: "1985",
    make: "Fleetwood",
    model: "Suncrest",
    size: "24x48",
    community: "Palm Grove Estates"
  }
];

export default function MHCDashboard() {
  const [selectedListing, setSelectedListing] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">MHC AUTOMATION Dashboard</h1>

      {!selectedListing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              onClick={() => setSelectedListing(listing)}
              className="cursor-pointer hover:shadow-xl"
            >
              <CardContent>
                <p className="font-semibold">{listing.seller}</p>
                <p>{listing.address} — Space #{listing.spaceNumber}</p>
                <p>{listing.make} {listing.model} ({listing.year})</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div>
          <Button onClick={() => setSelectedListing(null)} className="mb-4">⬅ Back to Listings</Button>

          <h2 className="text-xl font-semibold mb-2">{selectedListing.seller} — {selectedListing.address}</h2>
          <div className="mb-4">
            <p><strong>Serial:</strong> {selectedListing.serial}</p>
            <p><strong>Decal:</strong> {selectedListing.decal}</p>
            <p><strong>Size:</strong> {selectedListing.size}</p>
            <p><strong>Community:</strong> {selectedListing.community}</p>
          </div>

          <Button className="mb-6">🚀 Fill All Known Fields</Button>

          <h3 className="text-lg font-semibold mb-2">📄 Required Documents</h3>
          <ul className="mb-6">
            <li>📄 Listing Contract <Button className="ml-2">Open</Button></li>
            <li>📄 Spec Sheet <Button className="ml-2">Open</Button></li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">➕ Optional Documents</h3>
          <ul>
            <li>📄 TDS Form <Button className="ml-2">Open</Button></li>
            <li>📄 NOI Form <Button className="ml-2">Open</Button></li>
            <li>📄 Request for Repair <Button className="ml-2">Open</Button></li>
          </ul>
        </div>
      )}
    </div>
  );
}

